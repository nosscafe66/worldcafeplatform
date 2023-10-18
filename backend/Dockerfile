# ベースイメージを指定
FROM golang:latest

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ローカルのソースコードをコンテナにコピー
COPY . .

# 必要なパッケージをインストール
RUN go mod download

# アプリケーションをビルド
RUN go build -o main .

RUN apt-get update && apt-get install -y default-mysql-client && rm -rf /var/lib/apt/lists/*

# コンテナのポートを公開
EXPOSE 8080

# アプリケーションを実行
CMD ["go", "run", "main.go"]
