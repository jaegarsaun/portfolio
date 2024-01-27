import Image from "next/image";
import Trail from "./components/Trail.js";
import Nav from "./components/Nav.js";
import ProjectSection from "./components/ProjectSection.js";
export default function Home() {


  const projects = [
    {
      title: "Quick Poll",
      description: "Our capstone project, developed at the Nova Scotia Community College (NSCC), is a collaborative effort by me and three of my colleagues. The project is a web application named 'Quick Poll', which offers a user-friendly platform for creating and sharing polls. This application is designed to provide a simple yet effective way for users to gather opinions and preferences from their friends or a broader audience.",
      imageSrc: "/images/quickpoll-ss.png",
      tech: "HTML, TAILWIND, JAVASCRIPT, REACT, NEXT.JS, GOLANG",
      github: "N/A",
    },
  ];



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
        className="about flex justify-center items-center flex-col w-[100vw] h-[100vh] p-24"
        id="about"
      >
        <h2 className="text-5xl border-b-4 border-primary z-20">ABOUT ME</h2>
        <div className="flex flex-col lg:flex-row gap-10 z-20">
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
        </div>
      </section>
      {/* Projects*/}
      {projects.map((project) => (
        <ProjectSection
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          tech={project.tech}
          github={project.github}
        />
      ))}
      {/* Contact */}
    </main>
  );
}
