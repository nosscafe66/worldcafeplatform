import { use } from "react";

async function getData() {
  const res = await fetch("http://localhost:8080/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

type Data = {
      id: number;
    sample_name: string;
    sample_description: string;
    sample_date: string;
    sample_boolean: boolean;
};

export default function Page() {
  const datas: Data[] = use(getData());

  return (
    <>
      <h1>Todos</h1>
      {datas.map((data, index) => {
        // 一意のキーとして各データの `id` を使用します（もし存在する場合）。そうでなければ、配列のインデックスを使用します。
        const keyId = data.id || index;

        return <div key={keyId}>{data.sample_name}</div>;
      })}
    </>
);
}
