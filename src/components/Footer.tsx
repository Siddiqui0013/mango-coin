import Footerimg from "../assets/footer.png"

export default function Footer() {
  return (
    <div className="w-full bg-[#E4F6FA] flex items-center flex-col justify-center">
      <h1 className="text-5xl md:text-7xl lemon text-[#FDAD17] mt-20 mb-10">IT'S MANGO</h1>
      <button className="bg-[#659F16] text-3xl md:text-4xl lemon text-white border-black border-b-2 border-r-2 px-8 py-2 rounded-full">Join Us</button>
      <img src={Footerimg} className="w-[450px]" alt="" />
    </div>
  )
}
