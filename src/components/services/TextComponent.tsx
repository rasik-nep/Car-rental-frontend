type TextComponentProps = {
    index: number;
    firstSpan: string;
    secondSpan: string;
    description_short: string;
    description_long: string;
}

import { useState } from "react";

export default function TextComponent({ index, firstSpan, secondSpan, description_short, description_long }: TextComponentProps) {
    const [isClicked, setIsClicked] = useState(false)
    function handleDivClick() {
        setIsClicked(!isClicked)
    }
    return (
        <div className="group block cursor-pointer mb-14 pb-8 border-b-2 border-black-70 border-opacity-10 hover:border-opacity-100 items-center transition duration-300" onClick={handleDivClick} key={firstSpan}>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                    <div className="flex items-start">
                        <span className="hidden group-hover:inline-block mr-5 font-heading text-4xl font-medium text-red-400 font-cursive">{index}</span>
                        <h4 className="font-heading text-2xl md:text-4xl font-medium text-black-90 group-hover:text-red-400 font-cursive">
                            <span className="block">{firstSpan}</span>
                            <span>{secondSpan}</span>
                        </h4>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
                    <div className="relative flex items-center">
                        <p className="max-w-md ml-auto text-right text-black-90 tracking-tight leading-snug font-cursive">{description_short}</p>
                    </div>
                </div>
                <div className="w-full lg:w-2/12 px-4 text-right">
                    <span className={`inline-block text-black-90 group-hover:text-red-400 transform rotate-0 group-hover:rotate-90 ${isClicked ? "rotate-90" : ""} transition duration-300`}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 42.5L42.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17.5 17.5H42.5V42.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </div>
            </div>
            {isClicked && <div className="w-full flex items-center px-10 lg:py-4">
                <p className="max-w-[40rem] mr-auto text-left text-black-90 tracking-tight leading-snug md:ml-20">{description_long}</p>
                {/* <img src={imgLink} alt="Image clicked" className="h-[20rem] w-[30rem] p-6" /> */}
            </div>}

        </div>)
}
