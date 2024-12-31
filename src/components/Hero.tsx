import Navbar from "./Navbar"
import MangoPic from "../assets/mango.png" 
import { useState } from "react"

export default function Hero() {

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      const text = document.querySelector('.address .overflow-hidden')?.textContent;
      if (text) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('No text found to copy');
      }
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopySuccess(false);
    }
  };

  return (
      <div className="min-w-[100%] overflow-hidden md:min-h-[95vh] min-h-[70vh] relative bg-[#D6DAE3]">
        <div className="nav mb-40">
        <Navbar />
        </div>
  <div className="imgs h-fit md:text-2xl text-lg">
    <img src={MangoPic} className="absolute md:top-[20%] top-[15%] left-1/2 transform -translate-x-1/2 w-[450px] 2xl:w-[600px]" alt="mango" />
    <div className="img bg-[#FDEE8F] absolute top-[23%] md:left-[30%] left-[10%] md:px-8 md:py-4 p-2 rounded-lg md:-rotate-12 -rotate-45">Maybe Banana</div>
    <div className="img bg-green-500 absolute hidden md:block top-[40%] left-[10%] rounded-lg rotate-12 md:px-8 md:py-4 p-2">Maybe Mango</div>
    <div className="img bg-red-500 absolute hidden md:block top-[60%] right-[25%] rounded-lg rotate-12 md:px-8 md:py-4 p-2">Maybe Apple</div>
  </div>

  <div className="address absolute bottom-4 right-4 md:w-[30%] w-[75%]">
    <div className="overflow-hidden text-lg py-4 border-black border-b-4 border-r-4 px-2 rounded-lg border">
      fgjreigrwhueht8438rhfuhfshfuhfuhrewfuh
    </div>
    <button 
      onClick={handleCopy}
      className="absolute md:right-2 right-1 top-2 h-10 px-4 bg-[#FAA727] lemon rounded-lg">
      {copySuccess ? 'Copied!' : 'Copy'}
    </button>
  </div>
</div>
  )
}
