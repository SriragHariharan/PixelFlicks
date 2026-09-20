import React, { useState } from 'react'

function Faq({question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="accordion w-full">
        <div className="overflow-hidden mb-2 rounded-md">
            <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="accordion-header w-full p-6 md:p-8 text-left flex items-center justify-between bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
                <span className='text-neutral-100 text-lg md:text-2xl'>{question}</span>
                <i className={`fa-solid ${showAnswer ? 'fa-xmark' : 'fa-plus'} text-brand-red`}></i>
            </button>
            {
                showAnswer && (
                    <div className="accordion-panel p-6 md:p-8 bg-neutral-900 text-neutral-400">
                        <p>{answer}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Faq;
