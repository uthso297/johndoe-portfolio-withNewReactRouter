import { FaCamera, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import bgImage from '../../../assets/bannerImage.png'
// import { IoMdSettings } from "react-icons/io";
const Cover = () => {
    return (
        <div
            className="h-[500px] ml-8 max-w-full bg-cover bg-center pl-8 pr-8 md:pl-20 flex items-center md:pr-20 rounded-lg relative"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="px-8 py-10 text-white space-y-3 bg-gradient-to-b from-[#9c27b0] to-[#651fff] w-[800px] rounded-lg">
                <h1 className="text-2xl font-bold">Hello World,</h1>
                <h1 className="text-4xl font-bold">I am John,3D Illustrator</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque tempore cupiditate quisquam voluptatibus fuga illo porro aliquam quas distinctio repellat!</p>
                <div className="flex items-center justify-between w-[150px] text-xl">
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                    <FaCamera></FaCamera>
                </div>
            </div>
            <div className="absolute top-[8rem] right-20">

                {/* <IoMdSettings />  */}

                <input type="checkbox" value="synthwave" className="toggle theme-controller text-white" />

            </div>

        </div>
    );
};

export default Cover;