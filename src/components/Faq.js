import React, { useState } from 'react'

function Faq({question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="accordion w-full">
        <div className="overflow-hidden mb-2">
            <button className="accordion-header w-full p-8 text-left flex items-center justify-between bg-neutral-800 hover:bg-neutral-900">
                <span className='text-neutral-300 text-2xl'>{question}</span>
                {
                    !showAnswer && <span onClick={() => setShowAnswer(!showAnswer)}>➕</span> 
                }

                {
                    showAnswer && <span onClick={() => setShowAnswer(!showAnswer)}>✖️</span>
                }
                
                
            </button>
            {
                showAnswer && (
                    <div className="accordion-panel p-8 bg-neutral-800 text-neutral-500">
                        <p>{answer}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Faq;


