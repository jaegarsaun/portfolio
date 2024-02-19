import Image from "next/image";

export default function ProjectSections({
  title,
  description,
  imageSrc,
  tech,
  github,
  contentStyle,
}) {
  return (
    <section className="project flex justify-center items-center flex-col p-10 md:p-24 gap-10">
      <div className="flex flex-row items-center justify-center w-full gap-10">
        {contentStyle === "left" ? (
          <div className="w-full flex flex-row items-center justify-center gap-5">
            <h1 className="border-b-4 border-primary text-2xl w-auto ">
              {title}
            </h1>
            <div className="grow bg-secondary rounded-full h-[2px] w-auto"></div>
          </div>
        ) : (
          <div className="w-full flex flex-row items-center justify-center gap-5">
            <div className="grow bg-secondary rounded-full h-[2px] w-auto"></div>
            <h1 className="border-b-4 border-primary text-2xl w-auto ">
              {title}
            </h1>
          </div>
        )}
      </div>

      {contentStyle === "left" ? (
        <div className="flex justify-center flex-col lg:flex-row gap-20">
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={`${title} project screenshot`}
            className="border-4 border-primary"
          />
          <div className="flex flex-col gap-3 justify-between items-center lg:text-left h-[500]">
            <p className="font-normal text-2xl text-center">{description}</p>
            <p>{tech}</p>
            <a
              href={github}
              target="_blank"
              className="bg-transparent p-3 w-[15vw] text-center rounded-xl border-2 border-primary hover:bg-primary transition-all hover:scale-110"
            >
              Github
            </a>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col lg:flex-row gap-20">
          <div className="flex flex-col gap-3 justify-between items-center lg:text-left h-[500]">
            <p className="font-normal text-2xl text-center">{description}</p>
            <p>{tech}</p>
            <a
              href={github}
              target="_blank"
              className="bg-transparent p-3 w-[15vw] text-center rounded-xl border-2 border-primary hover:bg-primary transition-all hover:scale-110"
            >
              Github
            </a>
          </div>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={`${title} project screenshot`}
            className="border-4 border-primary"
          />
        </div>
      )}
    </section>
  );
}
