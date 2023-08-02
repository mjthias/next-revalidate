import Image from "next/image";
import { useState } from "react";

export default function Dog({ imgUrl }) {
  const [revalidating, setRevalidating] = useState(false);

  async function revalidatePage() {
    setRevalidating(true);
    const path = window.location.pathname;
    const conn = await fetch(`/api/revalidate?path=${path}&secret=JustAToken`);
    if (conn.status == 200) window.location.reload();
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Image src={imgUrl} alt="Dog" width={200} height={200} priority />

      {!revalidating && (
        <button className="py-3 px-5 rounded bg-blue-700 text-white" onClick={revalidatePage}>
          Revalidate
        </button>
      )}

      {revalidating && (
        <button className="py-3 px-5 rounded bg-black text-white" onClick={revalidatePage}>
          Revalidating...
        </button>
      )}
    </main>
  );
}

export async function getStaticProps() {
  const conn = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await conn.json();
  const imgUrl = data.message;

  return { props: { imgUrl } };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "dog-1",
        },
      },
      {
        params: {
          slug: "dog-2",
        },
      },
      {
        params: {
          slug: "dog-3",
        },
      },
    ],
    fallback: true, // false or "blocking"
  };
}
