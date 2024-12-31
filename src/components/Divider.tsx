import Frame from "../assets/Frame.png"

interface DividerProps {
  bgColor: string
}
export default function Divider({bgColor}: DividerProps) {
  return (
    <div className={`footer min-w-full bg-[${bgColor}] flex gap-4 border-black border-t-4 border-b-4 py-4 overflow-hidden justify-center items-center`}>
    { 
    Array.from({length : 10}).map((index)=>{
        return <img src={Frame} className="w-[120px] md:w-[300px] md:h-[30px] h-[30px]" alt={`frame-${index}`} />
     })
    }
 </div>
  )
}