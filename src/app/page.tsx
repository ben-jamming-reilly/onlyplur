import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  justify-between ">
      <div className="container text-white flex flex-col gap-4 text-6xl sm:text-8xl p-4 py-16">
        <h1>You are loved.</h1>
        <h1>You matter.</h1>
        <p className="text-4xl sm:text-6xl">
          The world would suck without you in it.
        </p>
      </div>
    </main>
  );
}
