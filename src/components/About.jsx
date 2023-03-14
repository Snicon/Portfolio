import React from 'react';
import { socialMedia } from "../constants/index.js";

const About = () => {
    return (
        <div id="about" className="mt-32 max-w-2xl">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3"
                          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                    <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
                                        y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC"/>
                            <stop offset="1" stopColor="#FF80B5"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <h1 className="font-poppins text-zinc-100 text-4xl md:text-5xl font-bold uppercase tracking-tight">
                <span className="lowercase text-xl md:text-3xl">
                    <span className="font-mono text-zinc-600 text-sm md:text-2xl">01. </span>
                    Hi, my name is</span><br/>
                <span className="text-primary italic">Sixten Peterson</span>.
            </h1>
            <p className="mt-6 text-sm leading-6 text-zinc-400 font-poppins">
                I love everything tech and especially web development. Currently I study information and media technology at
                <a className="text-primary hover:text-primaryDarker font-bold" href="https://lbs.se"> LBS </a>
                (previously <a href="https://realgymnasiet.se" className="text-primary hover:text-primaryDarker font-bold">Realgymnasiet</a>).
                I'm the co-founder and CTO of
                <a href="https://winterzone.se" className="text-fuchsia-300 hover:text-fuchsia-400 font-bold"> WinterZone AB</a>
                , where we do everything from 3d-printing to web development
                to web/game hosting. Additionally, I'm the host of the
                <a href="https://anchor.fm/winterzone" className="text-fuchsia-300 hover:text-fuchsia-400 font-bold"> Primör Entreprenör</a> podcast.
            </p>
            <div className="flex flex-col text-primary mt-4">
                <a className="hover:text-primaryDarker" href="mailto:sixten@snicon.rip">E: sixten@snicon.rip</a>
                <a className="hover:text-primaryDarker" href="tel:+46733426585">P: +46 (0)73 342 65 85</a>
            </div>
            <div className="flex flex-start gap-4 mt-4">
                { socialMedia.map((social, index) => (
                    <a
                        key={ social.id }
                        href={ `${ social.link }` }
                        className="w-6 h-6"
                    >
                        <img className="fill-zinc-200 transition hover:text-primary" src={ social.icon } alt={ social.alt } />
                    </a>
                )) }
            </div>
        </div>
    )
}

export default About