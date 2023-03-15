import React from "react";
import { contributions } from "../constants/index.js";

const Foss = () => {
    return (
        <div id="foss">
            <h1 className="font-poppins text-zinc-100 text-4xl md:text-5xl font-bold uppercase tracking-tight">
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3"
                              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                        <defs>
                            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208"
                                            y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9089FC"/>
                                <stop offset="1" stopColor="#FF80B5"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <span className="lowercase text-xl md:text-3xl">
                    <span className="font-mono text-zinc-600 text-sm md:text-2xl">03. </span>
                    Open source projects I have</span><br/>
                <span className="text-primary italic">contributed to</span>.
            </h1>
            <p className="mt-6 text-sm leading-6 text-zinc-400 font-poppins">
                While I have not been the most active FOSS participant I always try my best to give back to the community when I see a chance. If I ever find myself thinking that I am able to help out I would most likely spend my next weekend making a pull request. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                { contributions.map((contribution, index) => (
                <a
                    key={ contribution.id }
                    className="transition hover:cursor-pointer group hover:bg-secondaryBgDark rounded-xl px-5 py-5"
                    href={`https://${ contribution.link }`}
                    target="_blank"
                >
                    <div className="flex justify-between">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-0 bg-zinc-800 border border-zinc-700/50">
                            <img src={ contribution.logo } alt="" className="h-8 w-8 rounded-full"/>
                        </div>
                        <div>
                            <svg className="h-7 w-7 text-zinc-600 hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" ariaHidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                        { contribution.tech.map((icon, index) => (
                            <img key={ icon } className="mt-2 w-6 h-6" src={ icon } alt=""/>
                        ))}
                    </div>
                    <h3 className="text-zinc-100 group-hover:text-primaryDarker font-poppins mt-2">
                        { contribution.title }
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-400 group-hover:text-zinc-200 font-poppins">
                        { contribution.description }
                    </p>
                    <div className="flex mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 text-zinc-100 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p className="text-zinc-100 font-poppins text-sm mt-1.5 ml-3 group-hover:text-primary">{ contribution.link }</p>
                    </div>
                </a>
                )) }
            </div>
        </div>
    )
}

export default Foss