
const Client = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-10 text-white flex flex-col md:flex-row items-center md:items-start justify-between absolute max-w-5xl left-[10vw] pb-36 mt-[850px]">
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold text-white">What <span className="font-bold">Client</span> Said</h2>
                <div className="relative mt-6">
                    <div className="bg-black p-5 rounded-lg max-w-sm">
                        <p className="text-sm">
                            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.
                        </p>
                        <p className="mt-4 font-bold">John Doe</p>
                        <p className="text-xs italic">Company Dot Com</p>
                    </div>
                    <img src="https://i.ibb.co.com/JQN8V32/userpic.jpg" alt="client1" className="w-10 h-10  absolute top-[150px] left-[150px] rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="client2" className="w-10 h-10  absolute top-[200px] left-[250px] rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="client3" className="w-10 h-10  absolute top-[220px] rounded-full border-2 border-white" />
                </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                <h2 className="text-2xl font-bold">Let’s work together</h2>
                <p className="mt-4 text-sm leading-relaxed">
                    Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. In id nisi id neque venenatis molestie.
                </p>
                <button className="mt-6 bg-black hover:bg-opacity-80 text-white px-6 py-2 rounded-lg font-semibold">
                    HIRE ME
                </button>
            </div>
        </div>
    );
};

export default Client;
