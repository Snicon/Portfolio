import React from "react";
import { winterzone, nartryck } from "../assets/index.js";
import { work } from "../constants/index.js";

const Work = () => {
    return (
        <div id="work" className="rounded-2xl border border-zinc-700/40 p-6">
            <h2 className="flex text-sm font-semibold text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                    <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>
                <span className="ml-3 mt-1">Work experience</span>
            </h2>
            <ol className="mt-6 space-y-4">
                { work.map((work, index) => (
                    <li className="flex gap-4"
                        key={ work.id }
                    >
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-0 bg-zinc-800 border border-zinc-700/50">
                            <img src={ work.logo } alt="" className="h-8 w-8 rounded-full"/>
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-100">{ work.company }</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-400">{ work.title }</dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-400" aria-label={ `${ work.started } until ${ work.ended}` }>
                                <time dateTime={ work.started }>{ work.started }</time>
                                <span aria-hidden="true"> - </span>
                                <time dateTime={ work.ended }>{ work.ended }</time>
                            </dd>
                        </dl>
                    </li>
                )) }
            </ol>
            <a href="#download" className="flex text-zinc-100 font-poppins text-sm bg-secondaryBgDark/80 hover:bg-zinc-800 py-2 px-2 justify-center rounded-md mt-6">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </a>
        </div>
    )
}

export default Work