"use client"
import MenuIcon from "./MenuIcon"
import {useState} from "react"

const Menu = () => {
    return (
        <div></div>
    )
}

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
            <div></div>
            <nav className="w-1/3">
                <ul className="hidden justify-between md:flex">
                    <li className="">home</li>
                    <li className="">projects</li>
                    <li className="">contact</li>
                </ul>
                <div className="mobile md:hidden">
                    <button onClick={toggleNav} className={`${isOpen ? "block" : <Menu/>}`}>
                        <MenuIcon/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

