"use client";
import Head from "next/head";
import Footer from "@/components/ui/Footer";

import Testimonials from "@/components/Testimonials";
import Contact from "./pages/contact/page";

import HeroSection from "@/components/HeroSection";
import { LandingNavbar } from "@/components/ui/Navbar";
import ServiceCards from "@/components/ServiceCards";
import Companies from "@/components/ui/Companies";
import OurCompany from "@/components/OurCompany";

export default function Home() {
  return (
    <div className=" text-gray-200  bg-gradient-to-br from-gray-900 to-indigo-950">
      <Head>
        <title>KeyBud</title>
        <meta
          name="description"
          content="Tu idea, nuestro equipo, tu experiencia"
        />
      </Head>
      <LandingNavbar logoSrc="/KeyBudLogo.png" />
      <HeroSection />
      <OurCompany />
      <Companies />
      <ServiceCards />

      <Contact />
      <Testimonials />

      <Footer />
    </div>
  );
}
