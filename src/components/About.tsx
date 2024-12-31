import Img1 from "../assets/about1.png";
import Img2 from "../assets/about2.png";

export default function About() {
	return (
		<div className="w-full bg-[#E4F6FA] md:min-h-[92vh] p-6">
			<div className=" flex items-center flex-col md:flex-row justify-center my-12 md:my-20">
				<div className="imgs relative hidden md:block w-[40%]  ">
          <img src={Img1} className="absolute -bottom-20 left-0 w-[300px]" alt="about1" />
          <img src={Img2} className="absolute  top-0 left-20 w-[300px]" alt="about2" />
        </div>
				<div className="about md:w-[40%] w-[90%] text-center">
					<h1 className="text-5xl md:text-7xl lemon text-[#659F16] mb-12">About</h1>
					<p className="md:text-3xl text-2xl">
						Welcome to Meme Mango – the juiciest meme token in the crypto
						orchard! Combining the tropical sweetness of mangoes with the spicy
						humor of meme culture, Meme Mango is here to bring flavor, fun, and
						financial potential to your crypto experience. Dive into a vibrant
						community, share a laugh, and watch your crypto journey ripen with
						Meme Mango!
					</p>
				</div>
			</div>
		</div>
	);
}
