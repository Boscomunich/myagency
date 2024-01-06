'use client'
import Image from "next/image";
import { care } from "./constant";
import { motion } from "framer-motion";

const slidIn = {
        hidden: { y: 100, opacity: 0},
        show: {y: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}
const fadeIn = {
        hidden: { x: 100, opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 1,
            duration: 0.5,
        }
    },
}


const Body = () => {
    return (
        <div className="h-90vh" id="features">
            <div className="flex justify-evenly gap-5 flex-wrap pt-20">
                {
                    care.map((care, index) => (
                        <motion.div 
                        variants={slidIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:true}}
                        className="w-[300px] flex justify-start gap-5 items-center" 
                        key={index}>
                            <div className="w-[30%]">
                                <Image
                                src={care.icon}
                                alt={care.title}
                                width={200}
                                height={200}/>
                            </div>
                            <div className="flex flex-col justify-start items-start w-[70%]">
                                <h1 className="text-xl font-bold dark:text-white">{care.title}</h1>
                                <p className="text-gray-600">{care.description}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <div className="flex mt-10 items-center justify-evenly px-10 gap-10">
                <div className="flex justify-center w-[50%] gap-5 items-start h-[70vh] mb-60 md:hidden sm:hidden">
                    <div className="h-full w-[50%] gap-3">
                        <div className="my-3">
                            <Image
                            src="/images/about-1.png"
                            alt="image"
                            width={1000}
                            height={1000}/>
                        </div>
                        <div className="mb-5">
                            <Image
                            src="/images/about-02.png"
                            alt="image"
                            width={1000}
                            height={1000}/>
                        </div>
                    </div>
                    <div className="w-[50%]  pt-[15vh]">
                        <Image
                            src="/images/about-03.png"
                            alt="image"
                            width={1000}
                            height={1000}
                            />
                    </div>
                </div>
                <motion.div 
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:true}}
                className="lg:w-[50%] w-[90%] flex flex-col gap-5">
                    <p className="text-primary font-semibold text-lg">
                        Why Choose Us
                    </p>
                    <h1 className="text-4xl font-[900] dark:text-white text-secondary">
                        We Make Our customers happy by giving The Best services.
                    </h1>
                    <p className="text-gray-600">
                        We build your website using the latest industries technology available(NEXT.js) to ensure speed and reliablity for high conversion rate 
                    </p>
                    <div></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Body;