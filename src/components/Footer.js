import Image from "next/image"

import Bg3 from "../../public/images/bg-pattern-3.svg"
import Founder from "../../public/images/image-founder.webp"
import Facebook from "../../public/images/icon-facebook.svg"
import Instagram from "../../public/images/icon-instagram.svg"
import Twitter from "../../public/images/icon-twitter.svg"
import LogoDark from "../../public/images/logo-dark.svg"

const Footer = () => (
  <footer>
    <Image
      src={Founder}
      className="absolute -top-[209px] md:-top-[132px] lg:-top-[140px] lg:left-[162px] md:left-6 w-[265px] lg:w-[450px]"
    />
    <div className="grid justify-items-end">
      <div className="z-50 bg-darkPurple text-white p-8 md:p-12 lg:p-16 text-center md:text-left md:ml-[175px] lg:w-2/3 md:mb-[74px]">
        <h2 className="text-headingXS md:text-headingM mb-4 md:mb-6 lg:mb-8">
          Be the first to test
        </h2>
        <p className="mb-6 md:mb-8">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button>Apply for access</button>
      </div>
      <Image src={Bg3} className="hidden md:block absolute z-50 bottom-[25%]" />
    </div>
    <div className="grid justify-items-center gap-14 mt-20 lg:mt-32">
      <Image src={LogoDark} />
      <div className="flex w-28 justify-between">
        <Image src={Facebook} className="cursor-pointer" />
        <Image src={Twitter} className="cursor-pointer" />
        <Image src={Instagram} className="cursor-pointer" />
      </div>
    </div>
  </footer>
)

export default Footer
