'use client'
import Image from "next/image";
import { perks, website } from "./constant";
import { motion } from "framer-motion";
import Link from "next/link";

const slidInBottom = {
        hidden: { y: 100, opacity: 0},
        show: {y: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}
const slidInTop = {
        hidden: { y: -100, opacity: 0},
        show: {y: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}
const slidInRight = {
        hidden: { x: 100, opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}

const PriceCard =({name, price,}) => {
    return(
            <motion.div 
            variants={slidInTop}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            className="flex flex-col justify-center items-center py-10 px-5 lg:w-[28%] md:w-[45%] sm:w-[95%] my-5 h-[500px] bg-white dark:bg-gray-900 gap-5 rounded-md">
                <h1 className="text-xl font-semibold text-center dark:text-white">{name}</h1>
                <h1 className="text-2xl font-bold text-center dark:text-white">${price}</h1>
                <Link href="#contact">
                    <button className="bg-secondary py-2 px-6 text-[20px] font-medium rounded-full text-white hover:bg-primary">
                        Contact us
                    </button>
                </Link>
                <div className="flex flex-col justify-center items-center text-lg text-gray-400 font-medium">
                    <p>Free domain name</p>
                    <p>Free 6 Months hosting</p>
                    <p>Free ssl certificate</p>
                </div>
            </motion.div>
    )
}

const Perks = () => {
    return (
        <>
            <motion.div
            variants={slidInRight}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            id="perks">
                <h1 className="mt-20 font-bold text-center text-3xl lg:text-5xl sm:mx-10 mx-40 dark:text-white">
                    We Offer The Best Quality Service for You
                </h1>
                <p className="text-center text-gray-600 text-lg font-medium mt-5 mb-10">
                    Work with us to enjoy the following these Perks
                </p>
            </motion.div>
            <div className="flex justify-evenly gap-5 items-center flex-wrap bg-[#FBFBFB] dark:bg-gray-900 py-20">
                {
                    perks.map((perk, index) => (
                        <motion.div 
                        key={index}
                        variants={slidInBottom}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:true}}
                        className="flex flex-col justify-start items-start gap-7 lg:w-[28%] md:w-[35%] sm:w-[80%] dark:text-white dark:hover:bg-gray-800 hover:bg-white p-5 rounded-md">
                            <div>
                                <Image
                                src={perk.icon}
                                alt={perk.title}
                                width={60}
                                height={60}/>
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold">
                                    {perk.title}
                                </h1>
                                <p className="text-gray-500 text-lg font-medium">
                                    {perk.description}
                                </p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <div className="py-20 px-2 bg-slate-100 flex flex-wrap justify-evenly items-center gap-3 mt-10 dark:bg-[#0F1C2F]">
                <motion.h1
                variants={slidInRight}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="my-5 font-bold text-center text-3xl lg:text-5xl mx-40 sm:mx-10 dark:text-white">
                    We Offer Great Affordable Premium Prices.
                </motion.h1>
                {
                    website.map((web, index) => (
                        <PriceCard key={index} {...web}/>
                    ))
                }
            </div>
        </>
    );
};

export default Perks;