package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type ExampleTable struct {
	ID                uint      `gorm:"primaryKey"`
	SampleName        string    `json:"sample_name"`
	SampleDescription string    `json:"sample_description"`
	SampleDate        time.Time `json:"sample_date"`
	SampleBoolean     bool      `json:"sample_boolean"`
}

func (ExampleTable) TableName() string {
	return "example_table"
}

func main() {
	dbUser := os.Getenv("DATABASE_USER")
	dbPassword := os.Getenv("DATABASE_PASSWORD")
	dbName := os.Getenv("DATABASE_NAME")
	dbHost := os.Getenv("DATABASE_HOST")
	dbPort := os.Getenv("DATABASE_PORT")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPassword, dbHost, dbPort, dbName)

	// データベースに接続します。ここでログの出力レベルを調整して、デバッグ情報をより詳細にすることができます。
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// デバッグログを有効にします。これにより、実行されるSQLクエリが表示されます。
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("Error connecting to the database: ", err)
	}
	fmt.Println("Successfully connected to the database.")

	// 自動マイグレーションでスキーマを更新します。
	err = db.AutoMigrate(&ExampleTable{})
	if err != nil {
		log.Fatal(err)
	}

	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		var results []ExampleTable

		// Findメソッドでデータを取得し、エラーがあればログに記録します。
		if err := db.Find(&results).Error; err != nil {
			log.Printf("Error while getting data: %v", err) // エラー情報をより詳細にログに出力
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Data retrieval error"})
			return
		}

		// 結果が空の場合のログ
		if len(results) == 0 {
			log.Println("No data found in database.")
		}

		c.JSON(http.StatusOK, results) // 取得したデータをレスポンスとして送ります。
	})

	router.Run(":8080") // 指定したポートでアプリケーションを実行します。
}
