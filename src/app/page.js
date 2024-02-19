import Image from "next/image";
import Trail from "./components/Trail.js";
import Nav from "./components/Nav.js";
import ProjectSection from "./components/ProjectSection.js";
import AboutSection from "./components/AboutSection.js";
import Section from "./components/Section.js";
export default function Home() {
  const projects = [
    {
      title: "Quick Poll",
      description:
        "Our capstone project, developed at the NSCC by me and my peers. A web app that allows users to create and share straw polls. Still in development",
      imageSrc: "/images/quickpoll-ss.png",
      tech: "HTML, TAILWIND, JAVASCRIPT, REACT, NEXT.JS, GOLANG",
      github: "N/A",
    },
    {
      title: "TheJJBot",
      description:
        "A discord bot developed by me and Josh Scott for our class discord server. With a variety of utility, fun and administration commands it is a very versatile tool.",
      imageSrc: "/images/jjbot-ss.png",
      tech: "JAVASCRIPT, NODE.JS, DISCORD.JS",
      github: "https://github.com/BigBandzJosh/TheJJBot",
    },
    {
      title: "FlickFinder",
      description:
        "A web app that provides a fun and interactive way to find movies or shows to watch. This project was developed by me for my Self Directed Study at NSCC. Still in Development",
      imageSrc: "/images/flickfinder-ss.png",
      tech: "NEXT.JS, TAILWIND, TYPESCRIPT, API",
      github: "https://github.com/jaegarsaun/flickfinder",
    },
    {
      title: "Fitness Club Web App",
      description:
        "Made with PHP utilizing the MVC design pattern, this web app allows users to sign up for personal training sessions. Trainers can manage their clients, and admins can manage the trainers.",
      imageSrc: "/images/fitnessapp-ss.png",
      tech: "PHP, MYSQL, HTML, CSS, JAVASCRIPT",
      github: "https://github.com/jaegarsaun/fitnessclub-web-app",
    },
    {
      title: "My Github",
      description:
        "My Github page is filled with a collection of different projects I have made and collaborated on. From static web pages to full stack web apps, there is a little bit of everything.",
      imageSrc: "/images/github-ss.png",
      tech: "",
      github: "https://github.com/jaegarsaun",
    }
  ];

  const profileImage = "/images/portfolio-picture.png";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between z-20 relative">
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
        <AboutSection image={profileImage} imageAlt={"Jaegar"}>
          <p className="font-normal text-xl">
            Hello! I&apos;m a 20-year-old web wizard from Newfoundland, Canada.
            By day, I craft websites as a front-end developer, and by night, I
            hit the books at Nova Scotia Community College.
          </p>
          <p className="font-normal text-xl hidden md:block">
            My two Yorkies are my faithful sidekicks, always ready to join me on
            my adventures, whether I&apos;m coding or exploring the great
            outdoors.
          </p>
          <p className="font-normal text-xl hidden md:block">
            Living in Newfoundland has shaped me into someone who&apos;s as
            resilient as I am friendly. Watch this space - I&apos;m just getting
            started on making my mark in the digital world!
          </p>
        </AboutSection>
      <section id="projects">
        {/* Projects*/}
        {projects.map((project) => (
          <ProjectSection
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            tech={project.tech}
            github={project.github}
            contentStyle={projects.indexOf(project) % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
      {/* Contact */}
      {/* <section className="contact flex justify-center items-center flex-col w-[100vw] h-[100vh] p-10 md:p-24 gap-10 bg-secondary">
          <div className="contactWrapper flex items-center flex-col gap-10 h-full w-full">
            <h1 className="text-5xl text-primary font-bold border-b-4 border-dark">CONTACT ME</h1>
          </div>
      </section> */}
    </main>
  );
}
