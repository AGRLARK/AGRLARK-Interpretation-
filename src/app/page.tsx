import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-4 my-2 rounded-md border leading-8">
        <div className="font-black">Machine Learning (ML) </div>
        <div>
          Machine learning (ML) is defined as a discipline of artificial
          intelligence (AI) that provides machines the ability to automatically
          learn from data and past experiences to identify patterns and make
          predictions with minimal human intervention.
        </div>
        <div className="flex gap-4 justify-end">
          <Link
            className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
            href={"/edit"}
          >
            Edit
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
