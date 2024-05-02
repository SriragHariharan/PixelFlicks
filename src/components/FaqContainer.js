import React from 'react'
import Faq from './Faq'

function FaqContainer() {
    let question = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odio?"
    let answer = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ea, autem corrupti aspernatur, ratione itaque commodi architecto nesciunt doloremque distinctio dolorum consequuntur asperiores voluptate voluptas."
    return (
        <div className='bg-black py-10'>
            <div className='text-center text-5xl py-10 text-white font-extrabold'>
                Frequently Asked Questions        
            </div>

            <div className='mx-auto w-2/3'>
                <Faq question={question} answer={answer} />
                <Faq question={question} answer={answer} />
                <Faq question={question} answer={answer} />
                <Faq question={question} answer={answer} />
                <Faq question={question} answer={answer} />
            </div>

            <div className="mx-auto text-center pb-10">
                <div className="text-white text-center text-xl my-10">
                    Ready to watch? Enter your email or mobile number to create or restart your membership.
                </div>
                <input type="text" className='py-4 rounded-md pe-24 ps-4 bg-neutral-800 focus:bg-neutral-800 text-white mx-3' placeholder='Email or mobile number ' />
                <button className='bg-red-600 px-6 py-4 rounded-md'>Get Started &gt; </button>
            </div>
            <div className="bg-gray-500 py-1"></div>
        </div>
    )
}

export default FaqContainer
