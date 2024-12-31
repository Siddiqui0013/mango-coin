import mango from "../assets/token-mango.png"

export default function Tokenomics() {

  const tokenomics = [
      {
          title : "Liquidty Pool",
          description : "5%",
          rotate : "-rotate-3",
          bg : "bg-[#FDAD17]"
      },
      {
          title : "Team",
          description : "10%",
          rotate : "rotate-3",
          bg : "bg-[#D6DAE3]"
      },
      {
          title : "Advisors",
          description : "10%",
          rotate : "-rotate-3",
          bg : "bg-[#D6DAE3]"
      },
      {
          title : "Marketing",
          description : "10%",
          rotate : "rotate-3",
          bg : "bg-[#D6DAE3]"
      },
  ]

return (
  <div className="bg-[#E8C5C5] relative flex flex-col items-center justify-center gap-4 p-4">
    <img src={mango} className="absolute md:top-0 top-20 right-0 z-10 w-[100px] md:w-[550px]"  alt="" />
      <h1 className="md:my-12 my-10 text-5xl md:text-7xl lemon text-[#659F16]">Tokenomics</h1>
      <div className="w-full flex md:my-12 my-4 flex-col md:gap-12 gap-3 justify-center items-center">
          {
              tokenomics.map((value)=>{
                  return (
                      <div className={`${value.bg} border-black border-4 md:w-[60%] w-[90%] flex justify-around items-center py-4 px-8 rounded-2xl ${value.rotate}` }>
                          <h1 className="md:text-[32px] text-[24px] ">{value.title}</h1>
                          <p className="text-[32px] ">{value.description}</p>
                      </div>
                  )
              })
          }
      </div>
  </div>
)
}