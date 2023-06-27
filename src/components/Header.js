import Image from "next/image"

import Logo from "../../public/images/logo-light.svg"
import Hero from "../../public/images/image-hero.webp"
import Bg1 from "../../public/images/bg-pattern-1.svg"
import Bg2 from "../../public/images/bg-pattern-2.svg"

const Header = () => (
  <header className="z-10">
    <div className="grid px-6 py-8 md:px-10 lg:px-40 lg:py-14 ">
      <section className="z-50 flex justify-between">
        <Image src={Logo} />
        <p
          className="cursor-pointer text-white font-bold -tracking-[0.16px]
                  underline underline-offset-8 decoration-2 decoration-eucalyptus hover:text-eucalyptus"
        >
          Apply for access
        </p>
      </section>
      <section className="z-50 my-16 grid justify-items-center">
        <h1 className="text-headingS text-white text-center font-semibold mb-10 lg:mb-9 md:w-[50%]">
          Data{" "}
          <span className="underline underline-offset-8 decoration-2 decoration-eucalyptus">
            tailored
          </span>{" "}
          to your needs.
        </h1>
        <Image
          className="hidden md:block absolute w-64 -left-44 lg:-left-24 top-[20%]"
          src={Bg1}
        />
        <button>Learn more</button>
        <Image
          className="hidden md:block absolute w-36 -right-20 lg:-right-9 bottom-[5%]"
          src={Bg2}
        />
      </section>
    </div>

    <Image
      className="z-50 absolute -bottom-[15%] md:-bottom-[25%] lg:-bottom-[40%] ml-[8%] place-self-center w-[293px] md:w-[470px] lg:w-[715px]"
      src={Hero}
    />
  </header>
)

export default Header
