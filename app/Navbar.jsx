'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";

const slidInRight = {
        hidden: { x: "100vw", opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0,
            duration: 1,
        }
    },
}

const ThemeToggle = () => {
    const[darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme == 'dark') setDarkMode('true')
    },[])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    })

    return (
        <div className="relative flex justify-center items-center pb-3 md:pb-0 sm:pb-0"
        onClick={() => setDarkMode(!darkMode)}>
            {
                darkMode ? 
                <GoSun className="h-5 w-5 font-semibold dark:text-white"/>
                : 
                <PiMoonLight className="h-5 w-5 font-semibold"/>
            }
        </div>
    )
}


const Navbar = () => {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className="flex justify-center sm:justify-between items-center md:justify-between h-[77px] gap-4 w-full px-5 py-3  bg-transparent fixed top-0 backdrop-blur-3xl">
                <div className="w-[30%]">
                    
                    <h1 className="text-2xl sm:xl font-bold dark:text-white">webBase</h1>
                </div>
                <div className="w-[30%] text-gray-600 md:hidden sm:hidden">
                    <ul className=" flex justify-evenly items-center gap-3">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="#features" className="hover:text-primary">Features</Link>
                        <Link href="#perks" className="hover:text-primary">Perks</Link>
                        <Link href="#contact" className="hover:text-primary">Contact</Link>
                    </ul>
                </div>
                <div className="w-[30%] flex justify-center gap-10 items-center px-5">
                    <ThemeToggle/>
                    <div onClick={()=>setActive(!active)} className={`${active ?` bg-black w-6 h-[2px] rounded transition-all relative before:content-[""] before:bg-black before:dark:bg-white before:w-6 before:h-[2px] before:rounded  before:absolute before:translate-y-0 before:rotate-45 before:duration-500 after:content-[""] after:bg-black after:dark:bg-white after:w-6 after:h-[2px] after:rounded after:absolute after:translate-y-0 after:-rotate-45 after:duration-500 bg-transparent cursor-pointer lg:hidden` : `bg-black dark:bg-white w-6 h-[2px] rounded transition-all relative before:content-[""] before:bg-black before:dark:bg-white before:w-6 before:h-[2px] before:rounded  before:absolute before:-translate-y-2 before:duration-500 after:content-[""] after:bg-black after:dark:bg-white after:w-6 after:h-[2px] after:rounded after:absolute after:translate-y-2 after:duration-500 cursor-pointer lg:hidden`} ` }>
                    </div>
                </div>
            </div>
            <motion.div className={`flex flex-col justify-start items-start h-[60vh] w-full fixed mt-0 bg-white dark:bg-gray-900 opacity-90 text-gray-600 gap-5 px-10 lg:hidden py-10`}
            variants={slidInRight}
            initial='hidden'
            animate={ active ? 'show' : 'hidden'}>
                <Link 
                href="/" 
                onClick={()=>setActive(!active)} 
                className="hover:text-primary">
                    Home
                </Link>
                <Link 
                href="#features" 
                className="hover:text-primary"
                onClick={()=>setActive(!active)}>
                    Features
                </Link>
                <Link 
                href="#perks" 
                className="hover:text-primary"
                onClick={()=>setActive(!active)}>
                    Perks
                </Link>
                <Link 
                href="#contact" 
                className="hover:text-primary"
                onClick={()=>setActive(!active)}>
                    Contact
                </Link>
            </motion.div>
        </>
    );
};

export default Navbar;