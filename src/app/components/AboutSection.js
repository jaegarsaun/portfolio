import Section from "./Section";
import Image from "next/image";

export default function AboutSection({ image, imageAlt, children }) {
  return (
    <Section name={'about'}>
      <h2 className="text-4xl border-b-4 border-primary z-20 md:text-5xl">
        ABOUT ME
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 z-20">
        <Image src={image} width={375} height={375} alt="Jaegar" />
        <div className="bio flex flex-col gap-3 text-center justify-center items-center lg:text-left">
          {children}
        </div>
      </div>
    </Section>
  );
}
