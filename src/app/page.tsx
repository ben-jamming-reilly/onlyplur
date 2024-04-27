import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  justify-between ">
      <div className="container text-white flex flex-col gap-4 text-6xl sm:text-8xl p-4 py-16">
        <p>You are loved.</p>
        <p>You matter.</p>
        <p className="text-4xl sm:text-6xl">
          The world would suck without you in it.{" "}
        </p>
        <h1 className="text-[#ff0069] text-8xl">&lt;3</h1>
      </div>
    </main>
  );
}
