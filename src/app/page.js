import Image from "next/image";
import Trail from "./components/Trail.js";
import Nav from "./components/Nav.js";
export default function Home() {
  return (
    <main className="background flex min-h-screen flex-col items-center justify-between p-24 h-[100vh]">
      <Nav/>
      <Trail/>
      <header className="welcome flex justify-center flex-col items-center h-full">
        <div className="wrapper w-[75vw] flex justify-center items-start flex-col gap-7">
          <h1 className="text-5xl border-b-4 border-primary z-20">JAEGAR SAUNDERS </h1>
          <p className="text-4xl z-20">FRONT-END DEVELOPER</p>
        </div>
      </header>
    </main>
  );
}
