import HowTo from "../assets/howTo.png"

export default function Howto() {
  return (
    <div className="w-full bg-[#FDEE8F] p-6 flex items-center flex-col justify-center">
      <div className="box1 flex items-center w-full justify-center">
        <img src={HowTo} alt="howto" className="md:w-[20%] w-[40%]" />
        <h1 className="text-5xl md:text-7xl lemon text-[#659F16]">How to Buy ? </h1>
      </div>
      <div className="box2 bg-[#659F16] rounded-2xl w-[90%] md:w-[80%]">
      <div className="flex gap-3 flex-col items-center justify-center my-12 mx-4">
        <div className="step">
        <p className="font-bold">Step 1: Connect Your Wallet</p>
        <p>Link your crypto wallet (like MetaMask or Trust Wallet) to get started securely.</p>
        </div>
        <div className="step">
        <p className="font-bold">Step 2: Fund Your Wallet</p>
        <p>Add some crypto (e.g., ETH or BNB) to your wallet for swapping Pepe Meloni.</p>  
        </div>
        <div className="step">
        <p className="font-bold">Step 3: Swap & Hold</p>
        <p>Search for $PEPEMELONI,  swap your crypto, and become part of the meme revolution!</p>
        </div>
      </div>
      </div>
    </div>
  )
}
