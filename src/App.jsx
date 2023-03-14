import React from 'react'
import { Navbar } from './components'
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Foss from "./components/Foss.jsx";
import Books from "./components/Books.jsx";

const App = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-20 lg:px-12">
            <div id="navbar">
                <Navbar />
            </div>

        <div className="flex flex-start">
            <div className="xl:max-w-1280px w-full">
                <About />
                <div className="flex flex-col justify-between mt-48 lg:flex-row">
                    <div className="max-w-2xl">
                        <Projects />
                    </div>
                    <div className="max-w-2xl mt-12 lg:mt-0">
                        <Work />
                        <Books />
                    </div>
                </div>
                <div className="max-w-2xl mt-24">
                    <Foss />
                </div>
            </div>
        </div>
    </div>
)

export default App