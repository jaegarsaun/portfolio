import Image from "next/image";
import Trail from "./components/Trail.js";
import Nav from "./components/Nav.js";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-y-scroll z-20">
      {/* Landing page */}
      <section className="background p-24 " id="home">
        <Nav />
        <Trail />
        <header className="welcome flex justify-center flex-col items-center h-full">
          <div className="wrapper w-[75vw] flex justify-center items-start flex-col gap-7">
            <h1 className="text-5xl border-b-4 border-primary z-20">
              JAEGAR SAUNDERS
            </h1>
            <p className="text-4xl z-20">FRONT-END DEVELOPER</p>
          </div>
        </header>
      </section>

      {/* About */}
      <section
        className="about flex justify-center items-center flex-col w-[100vw] h-[100vh] p-24 lg:flex-row gap-10 z-20"
        id="about"
      >
        <Image
          src="/images/portfolio-picture.png"
          width={375}
          height={375}
          alt="Jaegar"
        />
        <div className="bio flex flex-col gap-3 text-center justify-center items-center lg:text-left">
          <p className="font-normal text-xl">
            Hello! I'm a 20-year-old web wizard from Newfoundland, Canada. By
            day, I craft websites as a front-end developer, and by night, I hit
            the books at Nova Scotia Community College.
          </p>
          <p className="font-normal text-xl hidden md:block">
            My two Yorkies are my faithful sidekicks, always ready to join me on
            my adventures, whether I'm coding or exploring the great outdoors.
          </p>
          <p className="font-normal text-xl hidden md:block">
            Living in Newfoundland has shaped me into someone who's as resilient
            as I am friendly. Watch this space - I'm just getting started on
            making my mark in the digital world!
          </p>
        </div>
      </section>
    </main>
  );
}
