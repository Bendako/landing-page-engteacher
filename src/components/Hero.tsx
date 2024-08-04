import React from 'react'
import Image from 'next/image'
import profile from "../../public/profile.jpeg"
import { FaWhatsapp } from "react-icons/fa";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <div className="w-full max-w-sm lg:w-1/3">
            <Image 
              src={profile} 
              className="rounded-full border-4 border-white shadow-xl object-cover w-64 h-64 mx-auto"
              alt="profile image" 
              width={250}
              height={250}
            />
          </div>
          <div dir='rtl' className="w-full lg:w-2/3 text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              מורה פרטי לאנגלית ומתמטיקה
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              ברוכים הבאים לאתר שלי! שמי בן דקו, ואני מורה פרטי לאנגלית ומתמטיקה מעפולה. אני מציע שיעורים מותאמים אישית לכל תלמיד, בהתאם לצרכיו ורמתו האישית.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">השירותים שלי</h2>
            <ul className="text-gray-200 mb-8 list-disc list-inside space-y-2">
              <li>שיעורי אנגלית: לימוד האלפבית האנגלי, קריאה וכתיבה בסיסית, חיזוק מיומנויות דקדוקיות ושיפור הבנת הנקרא.</li>
              <li>שיעורי מתמטיקה: עזרה בחומר הלימוד, פתרון בעיות, הכנה למבחנים וחיזוק הבסיס המתמטי.</li>
            </ul>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">למה לבחור בי?</h2>
            <ul className="text-gray-200 mb-8 list-disc list-inside space-y-2">
              <li>התאמה אישית: אני בונה תכנית לימודים אישית לכל תלמיד, בהתאם לקצב הלמידה והיעדים האישיים שלו.</li>
              <li>סבלנות ותמיכה: יחס אישי, סבלני ותומך, עם מטרה לעזור לכל תלמיד להרגיש בטוח ולהצליח.</li>
            </ul>
            <div className="text-center mr-7 lg:text-right">
              <a 
                href="https://wa.me/+972546255880" 
                target='_blank' 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300 ease-in-out shadow-lg"
              >
                <FaWhatsapp className="ml-2" />
                <p className='m-1'>
                    לשליחת הודעה
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )    
}

export default Hero