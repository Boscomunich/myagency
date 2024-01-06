import Hero from './Hero'
import Body from './Body'
import Perks from './Perks'
import Testimonial from './Testimonial'
import { connectToDB } from '@/libs/mongoose'
import { getReview } from '@/utils'
import Contact from './Contact'
import Footer from './Footer'

export default async function Home() {
  await connectToDB()
  const clReview =  await getReview()
  return (
    <div>
      <Hero/>
      <Body/>
      <Perks/>
      <div className='flex flex-wrap justify-evenly gap-2 w-full'>
        <h1 className="mt-20 font-bold text-center text-3xl lg:text-5xl sm:mx-10 mx-40 md:mx-20 w-full dark:text-white">Client’s Testimonials</h1>
      {
      clReview.map((cl, index) => (
        <div key={index} class="flex flex-col items-start justify-start gap-6 mt-14 lg:w-[24%] md:w-[45%] sm:w-[80%] shadow-xl h-[300px] bg-slate-100 dark:bg-gray-800 p-4 dark:text-gray-600">
                    <div class="flex justify-start items-center gap-2 text-[18px] font-semibold">
                        <div class="w-7 h-7 text-center pt-1 rounded-full bg-gray-200">{cl.firstName.slice(0, 1)}</div>
                        <span>{cl.firstName} {cl.lastName}</span>
                    </div>
                <div>
                    {cl.message}
                </div>
                <div class="flex justify-between gap-5 w-full">
                    <span>{cl.updatedAt.toDateString()}</span>
                    <div>
                      {Array(cl.rating).fill().map((_, i) => <span key={i} className='text-yellow-500'>&#9733;</span>)}
                    </div>
                </div>
            </div>
      ))
      }
      </div>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}
