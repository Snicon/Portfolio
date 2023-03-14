import { Menu } from "@headlessui/react"

import { close, menu } from '../assets'
import { navLinks } from "../constants"

const Navbar = () => {
    return (
        <nav className="fixed right-0 md:z-20 md:w-1/2 mr-6 md:mx-auto md:inset-x-0 mt-8 max-3xl">
            <div className="hidden md:flex sm:flex-1 sm:justify-center">
                <ul className="flex rounded-full px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur">
                    { navLinks.map((nav, index) => (
                        <li
                        key={ nav.id }
                        >
                            <a href={`#${ nav.id }`} className="relative block px-3 py-2 transition hover:text-primary">
                                { nav.title }
                            </a>
                        </li>
                    )) }
                </ul>
            </div>
            <div className="flex justify-end mr-4 md:hidden">
                <Menu>
                    <Menu.Button>
                        <img src={ menu }
                            className="text-white fill-current h-7 w-7"
                            alt="menu"
                        />
                    </Menu.Button>
                    <Menu.Items className='flex shadow-lg shadow-zinc-800/5 backdrop-blur p-6 bg-secondaryBgDark absolute top-20 right-0 mx-4 my-2 min-w-[140px] ring-1 ring-white/10 rounded-xl sidebar'>
                        <div className="flex flex-col text-sm font-medium text-zinc-200">
                        { navLinks.map((nav, index) => (
                            <Menu.Item key={ nav.id }>
                                <a href={`#${ nav.id }`} className="hover:bg-secondaryBgDark hover:rounded-lg relative block px-3 py-2 transition hover:text-primary">
                                    { nav.title }
                                </a>
                            </Menu.Item>
                        )) }
                        </div>
                    </Menu.Items>
                </Menu>
            </div>
        </nav>
    )
}

export default Navbar