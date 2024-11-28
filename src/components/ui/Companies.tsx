import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Android from "@/assets/Android.svg";
import TypeScript from "@/assets/TypeScript.svg";
import Next from "@/assets/Next.svg";
import ReactLogo from "@/assets/React.svg"; // Cambié el nombre porque "React" podría causar conflicto
import ReactNative from "@/assets/ReactNative.svg";
import Tailwind from "@/assets/Tailwind.svg";
import Node from "@/assets/Node.svg";
import Express from "@/assets/Express.svg";
import PostgreSQL from "@/assets/PostgreSQL.svg";
import MongoDb from "@/assets/MongoDb.svg";

export default function LogoCarousel() {
  const logos = [
    { src: Android, alt: "Android" },
    { src: ReactLogo, alt: "React" },
    { src: TypeScript, alt: "TypeScript" },
    { src: Next, alt: "Next.js" },
    { src: ReactNative, alt: "React Native" },
    { src: Tailwind, alt: "Tailwind CSS" },
    { src: Node, alt: "Node.js" },
    { src: Express, alt: "Express.js" },
    { src: PostgreSQL, alt: "PostgreSQL" },
    { src: MongoDb, alt: "MongoDB" },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-300">
          Aprovechando las{" "}
          <span className="text-indigo-400">Últimas Tecnologías</span>
        </h1>
      </div>
      <Marquee gradient={true} speed={50}  autoFill={true} gradientColor="#111827">
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
