import React from 'react'
import profile from "../../public/profile.jpeg"
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import { FaWhatsapp } from "react-icons/fa";


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
        <div className="hero-content flex m-4 p-4 md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse items-center">
            <Image 
                src={profile} 
                className="max-w-sm border-dotted h-80 object-cover rounded-lg shadow-2xl" 
                alt="profile image" 
                width={250}
                height={250}
            />
            <div>
                <div className="text-center">
                <h1 className="text-5xl m-4 text-center text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
                    מורה פרטי לאנגלית
                </h1>
                {/* TODO: להוסיף תיאור */}
                    <p className="py-2 text-xl text-center text-slate-100 mt-4 pr-4">
                        תיאור תיאור תיאור
                    </p>
                </div>
                <div className="flex justify-center w-full">
                    <a href="https://wa.me/+972546255880" target='_blank' className="btn text-lg mt-16 px-12 btn-primary normal-case bg-green-500 rounded-2xl">
                    לשליחת הודעה
                    </a>
                </div>
            </div>
        </div>
    </div>
)    
}

export default Hero