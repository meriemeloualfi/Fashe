
import React from "react"
import { images } from "../../constants"

export const Contact = () => {
    return (
        <>
            <div className="mt-[100px]">
                <img src={images.heading6} alt="" className='h-[35vh]  relative' />
                <h1 className='absolute top-[25vh] left-[10vw] lg:top-[23vh] lg:left-[40vw] text-white font-bold text-7xl'>CONTACT</h1>
            </div>
            <div className='lg:flex flex lg:flex-row flex-col p-10'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sfr!2sus!4v1720099422958!5m2!1sfr!2sus"  className='lg:w-[600px] lg:h-[600px] w-[350px] h-[600px]'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col gap-6 p-6    '>
                    <h2 className='text-gray-600 font-thin' >Send us your message</h2>
                    <div className='flex flex-col gap-6'>
                        <input className='border-1 border-zinc-400 p-3 rounded lg:w-[40vw]' type="text" placeholder='Name' />
                        <input className='border-1 border-zinc-400 p-3 rounded lg:w-[40vw]' type="email" placeholder='Email' />
                        <input className='border-1 border-zinc-400 p-3 rounded lg:w-[40vw] ' type="number" placeholder='Phone' />
                        <textarea className='border-1 border-zinc-400 p-3 rounded lg:w-[40vw] h-[25vh]' placeholder='message' name="" id="" cols="30" rows="10"></textarea>
                        <button className='bg-zinc-900 text-white lg:h-[6vh] lg:w-[10vw] h-[8vh] w-[50vw] font-light text-xl rounded-3xl hover:bg-orange-600 hover:transition-all'>SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}
