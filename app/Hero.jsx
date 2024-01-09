'use client'

import Image from "next/image";
import heroImage from '../public/images/hero.png'
import { motion } from "framer-motion";
import Link from "next/link";

const slidIn = {
        hidden: { x: -100, opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 0.5,
        }
    },
}

const Hero = () => {
    return (
        <>
        <div className="mt-[12vh] flex justify-center gap-3 sm:px-5 px-10 items-center dark:text-white">
            <motion.div 
            variants={slidIn}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
            className="flex flex-col gap-3 pt-[15vh] sm:pt-[10vh] w-[48%] md:w-[90%] sm:w-[90%]">
                <div>
                    <h2 className=" text-5xl  font-bold ">
                        We specialize in UI/UX, Web Development, Graphics Design.
                    </h2>
                </div>
                <div>
                    <p className="font-medium text-gray-600">
                        Empowering Your Online Presence
                        We're not just a web agency, we're your digital partners. Let's build something amazing together and make your business stand out in the digital world.
                    </p>
                </div>
                <div className="flex justify-start gap-4 items-center">
                    <Link href="#contact">
                        <button className="py-3 px-5 bg-primary rounded-3xl text-white text-[16px] font-medium">
                            Contact Us Now
                        </button>
                    </Link>
                    <div>
                        <p className="text-lg font-semibold">Call us (+234 9030683225)</p>
                        <p className="text-gray-600">For any question or concern</p>
                    </div>
                </div>
            </motion.div>
            <div className="w-[48%] sm:hidden md:hidden">
                <Image
                src={heroImage}
                alt="Image"
                className="bg-primary rounded-full"/>
            </div>
        </div>
        </>
    );
};

export default Hero;