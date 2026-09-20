import React from 'react'
import Faq from './Faq'

const FAQS = [
    {
        question: "What is PixelFlicks?",
        answer: "PixelFlicks is a streaming platform where you can browse and discover movies and TV shows, powered by real-time data from TMDB and an AI-assisted search that understands natural language requests like \"funny heist movies from the 90s\"."
    },
    {
        question: "What devices can I watch PixelFlicks on?",
        answer: "PixelFlicks runs in any modern web browser, so you can watch on your laptop, tablet, or phone. The layout adapts to your screen size for a smooth experience on any device."
    },
    {
        question: "Is PixelFlicks free?",
        answer: "PixelFlicks is a demo project built to showcase a streaming-app experience. Sign up with an email to create an account and start browsing — no payment required."
    },
    {
        question: "How do I cancel or manage my account?",
        answer: "You can manage your profile and sign out at any time from within the app. Since PixelFlicks is a portfolio project, there's no subscription to cancel."
    },
    {
        question: "What's the AI-powered search feature?",
        answer: "PixelFlicks includes a GPT-powered search that takes a plain-language description of what you're in the mood for and returns matching movie suggestions, instead of relying on exact title or genre matches."
    },
]

function FaqContainer() {
    return (
        <div className='bg-black py-10 border-t border-neutral-800'>
            <div className='text-center text-3xl md:text-5xl py-10 text-white font-extrabold'>
                Frequently Asked Questions
            </div>

            <div className='mx-auto w-11/12 md:w-2/3'>
                {FAQS.map((faq) => (
                    <Faq key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <div className="mx-auto text-center pb-10 px-6">
                <div className="text-white text-center text-lg md:text-xl my-10">
                    Ready to watch? Enter your email or mobile number to create or restart your membership.
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input type="text" className='py-4 rounded-md px-4 bg-neutral-800 focus:bg-neutral-800 text-white w-full sm:w-96 outline-none focus:ring-2 focus:ring-brand-red' placeholder='Email or mobile number' />
                    <button className='bg-brand-red hover:bg-brand-red-dark transition-colors px-6 py-4 rounded-md text-white font-semibold whitespace-nowrap'>
                        Get Started <i className="fa-solid fa-chevron-right fa-sm ml-1"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FaqContainer
