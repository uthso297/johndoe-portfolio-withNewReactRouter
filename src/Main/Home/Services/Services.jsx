import { AiOutlineGlobal } from "react-icons/ai";
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import { TbVirusSearch } from "react-icons/tb";

const Services = () => {
    return (
        <div className="absolute w-full left-0 flex items-center px-20">
            <div className=" flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full ">
                <PiLessThanBold></PiLessThanBold>
            </div>
            <div className="flex items-center justify-center gap-10 w-[90%] mx-auto my-10">
                <div className="w-52 h-36 text-center bg-gray-100 rounded-lg">
                    <h1 className="text-xl font-bold">Services</h1>
                    <div className="flex items-center justify-center"><p className="w-2 h-2 rounded-full bg-purple-900"></p></div>
                    <p className="mt-6 text-justify p-2">Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="w-52 h-36 shadow-2xl rounded-lg">
                    <TbVirusSearch className="text-purple-900 text-5xl mx-auto mt-5" />
                    <p className="text-lg font-bold text-center mt-5">UI Interface Design</p>
                </div>

                <div className="w-52 h-36 shadow-2xl rounded-lg bg-gradient-to-b from-purple-500 to-purple-800">
                    <p className="text-lg mt-5 font-bold text-center text-white">Icon design</p>
                    <div className="w-5 h-0.5 bg-white mx-auto my-3"></div>
                    <p className="mt-5 text-white p-1">Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="w-52 h-36 shadow-2xl rounded-lg">
                    <AiOutlineGlobal className="text-purple-900 text-5xl mx-auto mt-5" />
                    <p className="text-lg font-bold text-center mt-5">HTML Prototyping</p>

                </div>
            </div>
            <div className="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
                <PiGreaterThanBold />
            </div>
        </div>
    );
};

export default Services;