"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans">
            {/* Navbar */}
            <Navbar />


            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 z-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Capturing Life’s Beautiful Moments
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                    Wedding & Event Photography and Videography
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    View Portfolio
                </button>
            </section>

            {/* Wave SVG from public folder using Image component */}
            <div className="absolute inset-x-0 bottom-0 z-10">
                <img src="/wave.svg" alt="Wave" className="w-full" />

            </div>

        </main>
    );
}
