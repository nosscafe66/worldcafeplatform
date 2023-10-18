// import React, { useEffect, useState } from 'react';

// // データ構造の型を定義します。
// interface ExampleData {
//     id: number;
//     sample_name: string;
//     sample_description: string;
//     sample_date: string;
//     sample_boolean: boolean;
// }

// const ClientSideComponent: React.FC = () => {
//   // 状態に型を付けます。
//   const [data, setData] = useState<ExampleData[]>([]);

//   useEffect(() => {
//     // APIからデータをフェッチします。
//     fetch('http://localhost:8080/') // Goサーバーのアドレスを指定します。
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then(data => setData(data as ExampleData[])) // データに型を付けます。
//       .catch(error => {
//         console.error('There was an issue fetching data: ', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>My Data</h1>
//       {/* データをレンダリングします。 */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>{item.sample_name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header>
      <Image src="/path/to/image.jpg" alt="Description" width={500} height={300} />
        <nav>
          <ul>
            <li><Link href="/page1">ページ1</Link></li>
            <li><Link href="/page2">ページ2</Link></li>
            <li><Link href="/page3">ページ3</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>SANJOY!</h1>
          <p>こちらはサンジョイのポータルサイトです。</p>
        </section>
        <section>
          <h2>サービス紹介</h2>
          {/* // サービスの詳細情報や画像を追加 */}
        </section>
      </main>
      <footer>
        © 2023 SANJOY. All Rights Reserved.
      </footer>
    </div>
  )
}
