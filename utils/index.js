'use server'
import { connectToDB } from "../libs/mongoose";
import Review from '../libs/databse'
import nodemailer from 'nodemailer'

export async function saveReview ({FirstName, LastName, Message, Rating}) {
    try {
        await connectToDB()
        if (!FirstName || !LastName || !Message || !Rating){
            console.log(FirstName, LastName, Message, Rating)
            return 'all fields are required'
        }
            await Review.create({firstName: FirstName, lastName: LastName, message: Message, rating: Rating})
            return 'thanks for your the review'
    } catch (error) {
        console.log(error)
    }finally{
        
    }
}

export async function getReview () {
    const dbReview = await Review.find({}, null, {limit: 4}).sort({createdAt: -1})
    return dbReview
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'solomon4chidera@gmail.com',
        pass: process.env.PASS
    }
});

export async function sendEmail (fullName, email, phoneNo, subject, message) {
    const options = {
        from: 'solomon4chidera@gmail.com',
        to: 'obuegbechidera@gmail.com',
        subject: subject,
        html: `An email from ${fullName}, my email is ${email} phone no ${phoneNo} my message is ${message}`
    };
    try {
        if (!fullName || !email || !phoneNo || !subject || !message) {
            return 'all fields are required'
        }
        await transporter.sendMail(options)
        return 'success'
    } catch (error) {
        return 'Error sending verification email'
    }
};