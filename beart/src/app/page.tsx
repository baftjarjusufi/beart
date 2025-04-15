"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans">
            {/* Navbar */}
            <Navbar />


            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4">
                {/* Text and Blob SVG Container */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full relative space-y-6 md:space-y-0 md:space-x-12">
                    {/* Beautiful Moments Text */}
                    <div className="z-10 text-center md:text-left md:w-1/2 flex flex-col justify-center md:space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Capturing Life’s Beautiful Moments
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
                            Wedding & Event Photography and Videography
                        </p>
                        {/* Centered Button */}
                        <div className="flex justify-center mb-6">
                            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                                View Portfolio
                            </button>
                        </div>
                    </div>




                    {/* Blob SVG Positioned Below the Text on Mobile and Medium, to the Right on Desktop */}
                    <div className="relative sm:block md:block lg:right-10 xl:right-16 z-0">
                        <img
                            src="/blob.svg"
                            alt="Blob Shape"
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-128 lg:h-128 mx-auto md:mx-0"
                        />
                    </div>


                </div>
            </section>


            {/* Wave SVG from public folder using Image component */}
            <div className="absolute inset-x-0 bottom-0 z-10">
                <img src="/wave.svg" alt="Wave" className="w-full" />

            </div>




        </main>
    );
}
