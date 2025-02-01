import { FaCamera, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import bgImage from '../../../assets/coverbg.jpg'
// import { IoMdSettings } from "react-icons/io";
const Cover = () => {
    return (
        <div
            className="h-[500px] ml-8 max-w-full bg-cover bg-center pl-8 pr-8 md:pl-20 flex items-center md:pr-20 rounded-lg relative"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)` }}>
            <div className="px-8 py-10 text-white space-y-3 bg-gradient-to-b from-[#9b27b07a] to-[#661fff84] w-[800px] rounded-lg">
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