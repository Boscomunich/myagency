'use client'
import Link from "next/link";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { motion } from 'framer-motion'

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


const Footer = () => {
    return (
        <>
            <div className="flex justify-center md:flex-col gap-5 sm:flex-col px-5 py-20 dark:text-white">
                <motion.div 
                variants={slidInTop}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="lg:w-[40%] w-full flex flex-col justify-start  items-start">
                    <div className="flex justify-start gap-3 items-center">
                        <h1 className="text-2xl sm:xl font-bold">webBase</h1>
                    </div>
                    <p className="text-lg font-medium text-gray-400">
                        Join with 5000+ Startups and Businesses Growing with webBase.
                    </p>
                    <div className="flex justify-start items-center gap-3">
                        <TiSocialFacebook className="h-10 w-10 hover:text-primary rounded-full"/>
                        <TiSocialLinkedin className="h-10 w-10 hover:text-primary rounded-full"/>
                        <TiSocialTwitter className="h-10 w-10 hover:text-primary rounded-full"/>
                        <TiSocialInstagram className="h-10 w-10 hover:text-primary rounded-full"/>
                    </div>
                </motion.div>
                <div className="lg:w-[60%] w-full flex flex-wrap start">
                    <motion.div 
                    variants={slidInTop}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:true}}
                    className="flex flex-col items-start justify-start gap-2 w-[18%] min-w-[200px]">
                        <h1 className="text-2xl font-medium">Quick Links</h1>
                        <div className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                            <Link href='/'>Home</Link>
                            <Link href='#features'>Features</Link>
                            <Link href='#perks'>Perks</Link>
                            <Link href='#contact'>Contact</Link>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={slidInTop}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:true}}
                    className="flex flex-col items-start justify-start gap-2 w-[18%] min-w-[200px]">
                        <h1 className="text-2xl font-medium">Services</h1>
                        <div className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                            <Link href='#'>Web Development</Link>
                            <Link href='#'>Graphics Design</Link>
                            <Link href='#'>Ui/Ux Design</Link>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={slidInTop}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:true}}
                    className="flex flex-col items-start justify-start gap-2 w-[18%] min-w-[200px]">
                        <h1 className="text-2xl font-medium">Support</h1>
                        <div className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                            <Link href='#'>Company</Link>
                            <Link href='#'>Contact</Link>
                            <Link href='#'>Social Media</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between items-center md:flex-col sm:flex-col px-5 py-10">
                <motion.div
                variants={slidInTop}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}} 
                className="flex  justify-start md:justify-center sm:justify-center items-start gap-5">
                    <h1 className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                        English
                    </h1>
                    <h1 className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                        Privacy Policy
                    </h1>
                    <h1 className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                        Support
                    </h1>
                </motion.div>
                <motion.h1
                variants={slidInTop}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="flex flex-col items-start justify-center gap-2 text-lg font-[400] text-gray-400">
                    &copy; 2024 webBase. All rights reserved.
                </motion.h1>
            </div>
        </>
    );
};

export default Footer;