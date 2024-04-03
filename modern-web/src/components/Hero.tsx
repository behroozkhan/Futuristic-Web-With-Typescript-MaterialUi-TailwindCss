
import HeroImg from "../assets/HeroImg.png"
import HeroImg1 from "../assets/HeroImg-upd.png"

import Button from "../custom/Button";

const Hero = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-[4.309rem] text-[#FFFFFF] font-bold leading-none ">LET YOUR
                           <br/> 
                           <span className="dark:text-violet-600"> MIND 
                            <span className="text-[#7855fe] gradient-text">EXPLORE</span>
                           </span> 
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF]">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced 
                            <br className="hidden md:inline lg:hidden" />term that suggests regular gameplay.
                        </p>
                        <div className="flex flex-col gap-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a> */}
                            <Button onClick={()=> alert("Hello")}>Buy Now</Button>
                            <Button onClick={()=> alert("Hello")}>Buy Now</Button>
                        </div>
                    </div>
                    <div className="image-container flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        {/* <img src={HeroImg} style={{ filter: 'brightness(1)' , height:'500px' }} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                        <img src={HeroImg1} alt="" className="object-contain  w-[3500px]" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;