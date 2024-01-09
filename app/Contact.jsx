'use client'
import { motion } from "framer-motion";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { useState } from "react";
import { sendEmail } from "@/utils";
import { message as MSG } from "antd";

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
const slidInLeft = {
        hidden: { x: -100, opacity: 0},
        show: {x: 0, opacity: 100,
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

const Contact = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [messageApi, contextHolder] = MSG.useMessage();

    const success = (msg) => {
    messageApi.open({
        type: 'success',
        content: msg
        });
    };

    const warning = (msg) => {
    messageApi.open({
        type: 'warning',
        content: msg,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await sendEmail(fullName, email, phoneNo, subject, message)
            if (response == 'success'){
                success(response)
            } else {
                warning(response)
            }
        } catch (error) {
            warning(error)
        }
    }

    return (
        <>
        {contextHolder}
        <div className="bg-slate-100 dark:bg-[#0F1C2F] py-20" id="contact">
            <motion.div
            variants={slidInRight}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}>
                <h1 className="mt-20 font-bold text-center text-3xl lg:text-5xl sm:mx-10 mx-40 dark:text-white">
                    Send us an Email
                </h1>
                <p className="text-center text-lg font-medium mt-5 mb-10 text-gray-600">
                    Complete the form below to send us an email, our team will get back to you in less than 2hrs 
                </p>
            </motion.div>
            <div className="md:flex-col-reverse sm:flex-col-reverse justify-center mx-4 gap-5 flex">
                <motion.div 
                variants={slidInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="w-[98%] lg:w-[30%] flex flex-col gap-7 p-10 bg-white rounded-md dark:bg-gray-900 dark:text-white">
                    <div>
                        <div className="text-xl font-semibold">
                            Email Address
                        </div>
                        <p className="text-lg font-medium text-gray-400">
                            solomon4chidera@gmail.com
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Phone Number
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            +2349030683225
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Office
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            Lagos, Nigeria
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Skype Email
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            obuegbechidera@gmail.com
                        </p>
                    </div>
                    <hr/>
                    <div className="text-xl font-semibold">
                        Let’s Get Social
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <TiSocialFacebook className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                        <TiSocialLinkedin className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                        <TiSocialTwitter className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                        <TiSocialInstagram className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                    </div>
                </motion.div>
                <motion.div 
                variants={slidInRight}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="w-[98%] lg:w-[65%] flex flex-col gap-7 p-10 dark:bg-gray-900 bg-white rounded-md">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-wrap gap-5 justify-start">
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:max-w-[250px]">
                                <label htmlFor="name" className="text-lg font-medium text-gray-400">
                                    Full name
                                </label>
                                <input
                                type='text'
                                name='name'
                                placeholder="David Wonder"
                                className="border py-4 px-4 focus:border-primary outline-none rounded-md dark:bg-gray-900"
                                onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:max-w-[250px]">
                                <label htmlFor="email" className="text-lg font-medium text-gray-400">
                                    Email Address
                                </label>
                                <input
                                type='email'
                                name='email'
                                placeholder="DavidWonder@gmail.com"
                                className="border py-4 px-4 focus:border-primary outline-none rounded-md dark:bg-gray-900"
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:max-w-[250px]">
                                <label htmlFor="number" className="text-lg font-medium text-gray-400">
                                    Phone Number
                                </label>
                                <input
                                type='number'
                                name='number'
                                placeholder="+1 63535464"
                                className="no-spinner border py-4 px-4 focus:border-primary outline-none rounded-md dark:bg-gray-900"
                                onChange={(e) => setPhoneNo(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:max-w-[250px]">
                                <label htmlFor="subject" className="text-lg font-medium text-gray-400">
                                    Subject
                                </label>
                                <input
                                type='text'
                                name='subject'
                                placeholder="Type your subject"
                                className="border py-4 px-4 focus:border-primary outline-none rounded-md dark:bg-gray-900"
                                onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[97%]">
                                <label htmlFor="message" className="text-lg font-medium text-gray-400">
                                    Message
                                </label>
                                <textarea
                                type='text'
                                name='message'
                                rows="6"
                                placeholder="Enter Your Message"
                                className="border py-4 px-4 focus:border-primary outline-none rounded-md dark:bg-gray-900"
                                onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                        </div>
                        <button 
                        type='submit'
                        className='px-5 w-[150px] h-[50px] py-4 text-[16px] font-medium bg-primary text-white rounded-full active:scale-95'
                        onClick={() => handleSubmit()}>
                            Send Message
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Contact;