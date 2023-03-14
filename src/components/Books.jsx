import React from "react";
import { react } from "../assets/index.js";
import {books} from "../constants/index.js";

const Books = () => {
    return (
        <div id="books" className="rounded-2xl border border-zinc-700/40 p-6 mt-12">
            <h2 className="flex text-sm font-semibold text-zinc-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 flex-none">
                    <path className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                </svg>
                <span className="ml-3 mt-1">Book recommendations</span>
            </h2>
            <ol className="mt-6 space-y-4">
                { books.map((book, index) => (
                <li className="flex gap-4" key={ book.id }>
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-0 bg-zinc-800 border border-zinc-700/50">
                        <img src={ book.icon } alt="" className="h-8 w-8 rounded-full"/>
                    </div>
                    <dl className="flex flex-auto flex-wrap gap-x-2">
                        <dt className="sr-only">Book title</dt>
                        <dd className="w-full flex-none text-sm font-medium text-zinc-100">{ book.title }</dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="text-xs text-zinc-400">{ book.author }</dd>
                    </dl>
                </li>
                )) }
            </ol>
        </div>
    )
}

export default Books