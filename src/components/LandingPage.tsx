import Hero from "./Hero"
import About from "./About"
import Divider from "./Divider"
import Tokenomics from "./Tokenomics"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Howto from "./Howto"

export default function LandingPage() {
  return (
    <div>
      <div id="home"><Hero /></div>
      <Divider bgColor="#FAA727" />
      <div id="about"><About /></div>
      <Divider bgColor="#659F16" />
      <div id="tokenomics"><Tokenomics /></div>
      <Divider bgColor="#E4F6FA" />
      <div id="howto"><Howto /></div>
      <Divider bgColor="#E8C5C5" />
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  )
}