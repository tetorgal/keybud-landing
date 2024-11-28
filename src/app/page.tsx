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
import CanvasCursor from "@/cursor/CanvasCursor";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-200 bg-gray-900">
      <Head>
        <title>KeyBud</title>
        <meta
          name="description"
          content="Tu idea, nuestro equipo, tu experiencia"
        />
      </Head>
      <CanvasCursor/>
      <LandingNavbar logoSrc="/KeyBudLogo.png" />
      <HeroSection />
      <div className="relative -top-4 h-24">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950  to-gray-900 "></div>
      </div>
      <ServiceCards />
      <OurCompany />
      <Companies />
      <div className="relative top-10 h-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-950  to-gray-900 blur-sm"></div>
        <div
          className="absolute top-5 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
 
      </div>

      <Testimonials />
    

      <Contact />
      <Footer />
    </div>
  );
}
