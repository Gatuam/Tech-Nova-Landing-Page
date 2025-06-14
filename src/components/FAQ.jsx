import React, { useState } from 'react'
import { frequentlyAskedQuestions } from '../utils/const'

const FAQ = () => {
  const [questionType, setquestionType] = useState('General')
  const [openIndex, setOpenIndex] = useState(null)

  const selectedCategory = frequentlyAskedQuestions.find(
    (ele) => ele.category === questionType
  )

  return (
    <div className="bg-gradient-to-t from-[#001919] to-[#001a1a] w-full h-[90vh] flex items-center justify-center relative ">
      <div className='w-110 h-100 bg-[#3cffd550] rounded-full blur-3xl opacity-45 absolute -left-40'></div>
      <div className="w-full max-w-4xl px-10 py-15 flex flex-col items-center border rounded-lg border-[#27fed324] bg-gradient-to-b from-[#27f3d415]">
        <div className="faqheading-section text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-5"> Frequently Asked Questions</h1>
          <p className="text-neutral-400">  Find answers to common questions about our AI-driven web application, its features, performance, integrations, and support.
</p>
        </div>
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {frequentlyAskedQuestions.map((ele, i) => (
            <button
              key={i}
              className={`font-normal text-teal-200 border border-[#35ffb178] px-8 py-2 rounded-3xl hover:bg-[#93ffe0] hover:text-zinc-900 transition ${
                ele.category === questionType ? 'bg-[#93ffe0] text-zinc-900' : ''
              }`}
              onClick={() => {
                setquestionType(ele.category)
                setOpenIndex(null)
              }}
            >
              {ele.category}
            </button>
          ))}
        </div>
        <div className="qna w-full flex flex-col gap-2 ">
          {selectedCategory?.questions.map((QnA, i) => (
            <div key={i} className="mb-4 w-full felx">
              <div
                className="flex justify-between items-center cursor-pointer px-5 py-3 border-1 border-[#2af2af3f] rounded-lg h-18 mb-2 "
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h2 className="text-white font-normal flex justify-between   ">
                
                {QnA.question}
                
                </h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              {openIndex === i && (
                <p className="text-neutral-400 flex justify-center items-center border-1 px-8 py-6 border-[#39f7c42a] rounded-lg bg-[#29ffed09]">{QnA.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ