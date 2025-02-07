import { FaCamera, FaClock, FaHeart, FaHtml5, FaIcons, FaSearch, } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import john from '../../../assets/john.png'
import award from '../../../assets/awards.png'
import subscriber from '../../../assets/subscriber.png'
import footage from '../../../assets/footage.png'

const Experience = () => {

    return (
        <>
            <div className="flex justify-around ">
                <div className="flex flex-col items-center justify-center text-[#D6BD96]">
                    {/* <i className="text-5xl"> <FaAward></FaAward> </i> */}
                    <img className="w-36 h-36" src={award} alt="" />
                </div>

                <div className="flex flex-col items-center justify-center text-[#D6BD96]">
                    <img className="w-36 h-36" src={subscriber} alt="" />

                </div>

                <div className="flex flex-col items-center justify-center text-[#D6BD96]">
                    <img className="w-36 h-36" src={footage} alt="" />

                </div>

                <div className="bg-[#8669ce] w-72 h-80 flex items-end justify-center rounded-lg -mt-10 z-10 relative">
                    {/* <img className="w-60 h-60 rounded-lg bg-amber-700" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-photo" /> */}
                    <img className="w-60 h-60 rounded-lg" src={john} alt="profile-photo" />
                    <div className="w-64 h-80 -bottom-10 border-2 border-purple-800 absolute rounded-lg">
                        <div className="w-0.5 h-16 bg-purple-800 absolute top-full right-1/2">
                            <div className="w-[70vw] h-0.5 absolute right-0 top-full bg-purple-800">
                                <div className="h-96 w-0.5 absolute left-0 top-full bg-purple-800">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-40 ml-[1.85rem] flex items-start gap-96">

                <div>
                    <h1 className="font-bold text-xl">WORK EXPERIENCE</h1>
                    <ul className="marker:text-purple-800 list-disc">
                        <li>
                            <div className="font-bold text-lg">
                                Creative Din
                            </div>
                            <p>
                                at Fourth Compn
                            </p>
                            <p className="text-sm opacity-60">
                                2015-Present
                            </p>
                        </li>
                    </ul>
                    <ul className="marker:text-purple-800 list-disc">
                        <li>
                            <div className="font-bold text-lg">
                                Senior UI/UX
                            </div>
                            <p>
                                at Fourth Compn
                            </p>
                            <p className="text-sm opacity-60">
                                2015-Present
                            </p>
                        </li>
                    </ul>
                    <ul className="marker:text-purple-800 list-disc">
                        <li>
                            <div className="font-bold text-lg">
                                UI/UX
                            </div>
                            <p>
                                at Fourth Compn
                            </p>
                            <p className="text-sm opacity-60">
                                2015-Present
                            </p>
                        </li>
                    </ul>
                    <ul className="marker:text-purple-800 list-disc">
                        <li>
                            <div className="font-bold text-lg">
                                UI/UX
                            </div>
                            <p>
                                at Fourth Compn
                            </p>
                            <p className="text-sm opacity-60">
                                2015-Present
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl">SKILL AND EXPERTISE</h1>
                    <div className="flex flex-col justify-start gap-6">
                        <ul>
                            <div className="flex items-center gap-2">
                                <FaSearch></FaSearch>
                                <p className="text-lg font-bold">UI Interface Design</p>
                            </div>
                            <div className="bg-gray-400 rounded-lg"><div className="bg-gradient-to-r from-[#9c27b0] to-[#651fff] w-[85%] h-2 rounded-lg"></div></div>
                        </ul>
                        <ul>
                            <div className="flex items-center gap-2">
                                <FaIcons></FaIcons>
                                <p className="text-lg font-bold">Icon Design</p>
                            </div>
                            <div className="bg-gray-400 rounded-lg"><div className="bg-gradient-to-r from-[#9c27b0] to-[#651fff] w-[50%] h-2 rounded-lg"></div></div>
                        </ul>

                        <ul>
                            <div className="flex items-center gap-2">
                                <FaHtml5></FaHtml5>
                                <p className="text-lg font-bold">HTML Prototyping</p>
                            </div>
                            {/* <input type="range" min={0} max="100" value="60" className="range-primary bg-gradient-to-r from-[#9c27b0] to-[#651fff]" /> */}
                            <div className="bg-gray-400 rounded-lg"><div className="bg-gradient-to-r from-[#9c27b0] to-[#651fff] w-[70%] h-2 rounded-lg"></div></div>
                        </ul>
                        <ul>
                            <div className="flex items-center gap-2">
                                <FaCamera></FaCamera>
                                <p className="text-lg font-bold">Photo Editing</p>
                            </div>
                            <div className="bg-gray-400 rounded-lg"><div className="bg-gradient-to-r from-[#9c27b0] to-[#651fff] w-[90%] h-2 rounded-lg"></div></div>
                        </ul>
                        <ul>
                            <div className="flex items-center gap-2">
                                <FaCamera></FaCamera>
                                <p className="text-lg font-bold">Graphic Illustration</p>
                            </div>
                            <div className="bg-gray-400 rounded-lg"><div className="bg-gradient-to-r from-[#9c27b0] to-[#651fff] w-[60%] h-2 rounded-lg"></div></div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="-ml-10 w-full">
                <div className="bg-gray-100 rounded-2xl border-2 mt-3 border-purple-800 p-6 flex items-center justify-around space-x-12 shadow-md w-full">

                    <div className="">
                        <div className="text-4xl flex gap-3 items-center">
                            <i className="text-purple-500 "> <FaBagShopping></FaBagShopping> </i>
                            <h2 className="text-2xl font-bold">123</h2>
                        </div>
                        <p className="text-gray-600">Completed Project</p>
                    </div>

                    <div className="">
                        <div className="text-4xl flex gap-3 items-center">
                            <i className="text-purple-500 "> <FaClock></FaClock> </i>
                            <h2 className="text-2xl font-bold">4567</h2>
                        </div>
                        <p className="text-gray-600">Working Hours</p>
                    </div>

                    <div className="">
                        <div className="text-4xl flex gap-3 items-center">
                            <i className="text-purple-500 "> <FaHeart></FaHeart> </i>
                            <h2 className="text-2xl font-bold">89</h2>
                        </div>
                        <p className="text-gray-600">Happy CLients</p>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Experience;