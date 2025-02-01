import { BiSolidFoodMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiDotsNineBold } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className="space-y-4">
            <p className="bg-[#5d1ded] mx-auto text-6xl text-white rounded-2xl flex justify-center items-center w-[60px] h-[60px]">
                J
            </p>
            <div className="flex flex-col items-center bg-[#D1C4E9] h-[396px] w-[80px] rounded-2xl justify-around text-2xl">
                <svg width="32" height="32">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#9C27B0" />
                            <stop offset="100%" stopColor="#651FFF" />
                        </linearGradient>
                    </defs>
                    <CgProfile stroke="url(#gradient)" strokeWidth="1" width="100%" height="100%" />
                </svg>

                {[FaHome, PiDotsNineBold, TbMessages, BiSolidFoodMenu, FaMessage].map((Icon, index) => (
                    <svg key={index} width="32" height="32">
                        <Icon fill="url(#gradient)" width="100%" height="100%" />
                    </svg>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
