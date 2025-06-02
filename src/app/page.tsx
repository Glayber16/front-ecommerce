"use client";

import Image from "next/image";
import { User, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import FeaturedCars from "./components/FeaturedCars";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className="min-h-screen font-poppins font-normal bg-base-">
      <Navbar />
      <Header />
      <main className="flex flex-col items-center sm:items-start">
        <Brands />

        <CategorySection />
        <Brands />

        <FeaturedCars />

      </main>
      <Footer/>
    </div>
  );
}
