
import HeroImg from "../assets/HeroImg.png"
import HeroImg1 from "../assets/HeroImg-upd.png"
import HeroImg2 from "../assets/HeroImg-New.png"
import HeroImg3 from "../assets/h2_processed.jpg"
import galaxy from "../assets/galaxay.webp"
import Star from "../assets/Star1.svg"

import Button from "../custom/Button";
import Counter from "./Counter"

const Hero = () => {
    return (
        <div className="h-[] ">
            <section className=" dark:text-gray-800 " >
                <div className="container flex flex-col justify-center  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-[4.309rem] text-[#FFFFFF] font-bold leading-none ">LET YOUR
                            <br />
                            <span className=""> MIND
                            </span>
                            <span className="text-[#7855fe] gradient-text">EXPLORE</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF]">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced
                            <br className="hidden md:inline lg:hidden" />term that suggests regular gameplay.
                        </p>
                        <div className="flex flex-col gap-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Button onClick={() => alert("Hello")}>Buy Now</Button>
                            <Button onClick={() => alert("Hello")}>Play Now</Button>
                        </div>
                        <div className="flex h-[73px] justify-between mt-10" >
                            <Counter label={"Unique Style"} finalValue={300} labelClassName="unique" countClassName="counter-same" />
                            <Counter label={"Project Complete"} finalValue={200} labelClassName="unique" countClassName="counter-project gradient-text" />
                            <Counter label={"Happy Clinets"} finalValue={100} labelClassName="unique" countClassName="counter-same " />
                        </div>

                    </div>
                    {/* <div className="image-container w-[50%]  flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"> */}
                    {/* <img src={HeroImg}  alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                    {/* <img style={{width: '1500px'}} src={HeroImg2} alt="" className="object-contain  w-[3500px]" /> */}
                    <img src={HeroImg3} alt="" className="bg-red-500" />
                    {/* </div> */}
                </div>

                {/* New absolute positioned div for inclined plane */}
                <div className="absolute bottom-8 left-0 w-full h-[0%]">
                        <div className="bg-[#50197a] flex justify-center items-center p-6 transform -skew-y-2 ">
                            <span className="text-white mr-4">Gaming spaning</span>
                            <img src={Star} alt="" className="w-8 h-8" />
                        </div>
                    </div>
            </section>

            
        </div>
    )
}

export default Hero;