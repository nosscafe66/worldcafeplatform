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

import Page from '../components/clientsidecomponent';
function Home() {
  return (
    <div>
      {/* 他のUIコンポーネント */}
      
      <Page />
      
      {/* 他のUIコンポーネント */}
    </div>
  );
}

export default Home;