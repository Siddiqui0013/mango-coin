import { useState } from "react"

export default function FAQ() {
 
  const [selected, setSelected] = useState<number | null>(null)
  
  const FAQ = [
    {
      question: "What is Mango?",
      answer: "Mango is a fruit."
    },
    {
      question: "What is the color of Mango?",
      answer: "Mango is yellow."
    },
    {
      question: "What is the taste of Mango?",
      answer: "Mango is sweet."
    },
    {
      question: "What is the size of Mango?",
      answer: "Mango is small."
    }
  ]

  return (
    <div className="w-full bg-[#E4F6FA] flex items-center flex-col justify-center">
      <h1 className="text-5xl md:text-7xl lemon text-[#659F16] my-8">FAQ</h1>

      <div className="flex items-end justify-center mx-auto px-8 gap-4  w-full">
        <div className="box1 md:w-[80%] w-[95%] ">
            {
                FAQ.map((faq, index) => {
                    return (
                        <div className="w-full flex flex-col border-black border-4 p-8 rounded-2xl bg-[#FFFFFF] items-start justify-center my-4" 
                        key={index} onClick={() => selected === index ? setSelected(null) : setSelected(index)}>
                            <h1 className="md:text-[40px] text-[22px]">{faq.question}</h1>
                            {
                                selected === index && <p className="text-[20px] mt-8 md:text-[24px]">{faq.answer}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className="border-b-8 border-black w-full h-4 "></div>
    </div>
  )
}
