

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-10 bg-white shadow-md mt-[900px]">
            <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center space-x-2">
                    <img src="https://t4.ftcdn.net/jpg/03/15/16/99/360_F_315169998_zq1ns5PGqeG6T0acJAimrcKUYiW4pGHf.jpg" alt="Logo" className="h-32 w-32" />
                </div>
                <h2 className="text-xl font-bold mt-2">John Doe</h2>
                <p className="text-gray-500">UX DESIGNER</p>
                <div className="flex space-x-4 mt-3">
                    <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-blue-700"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
                </div>
                <p className="text-gray-600 mt-4">My personal contact <br /> +12 345 678 90</p>
                <p className="text-gray-600 mt-2">Say hello, on Skype <br /> jenadoe.skype</p>
            </div>

            <div className="mt-6 md:mt-0">
                <h3 className="text-2xl font-bold">Contact <span className="text-purple-600">Me.</span></h3>
                <form className="mt-4 space-y-4">
                    <input type="text" placeholder="What is your name? *" className="w-full border-b-2 p-2 outline-none" />
                    <input type="email" placeholder="What is your email? *" className="w-full border-b-2 p-2 outline-none" />
                    <textarea placeholder="Write your message here*" className="w-full border-b-2 p-2 outline-none" rows="3"></textarea>
                    <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded-md">SEND MESSAGE</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;