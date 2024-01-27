import Image from "next/image";
export default function ProjectSections({
  title,
  description,
  imageSrc,
  tech,
  github,
}) {
  return (
    <section className="project flex justify-center items-center flex-col h-[100vh] p-24 gap-10">
<div className="flex flex-row items-center justify-center w-full gap-10">
    <h1 className="border-b-4 border-primary text-2xl w-auto ">{title}</h1>
    <div className="grow bg-secondary rounded-full h-[2px] w-auto"></div>
</div>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-20 items-start">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={`${title} project screenshot`}
          className="border-4 border-primary"
        />
        <div className="flex flex-col gap-3 text-center justify-center items-center lg:text-left">
          <p className="font-normal text-2xl">{description}</p>
          <p>{tech}</p>
          <a href={github}>Github</a>
        </div>
      </div>
    </section>
  );
}
