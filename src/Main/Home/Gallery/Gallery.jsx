const Gallery = () => {
    return (
        <div className="absolute left-0 w-full">
            <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 mt-60 mx-auto">
                {/* Categories */}
                <div className="flex justify-center gap-4 mb-6 flex-wrap">
                    {Array.from({ length: 6 }, (_, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-full border-2 transition-all ${i === 1 ? "bg-purple-600 text-white border-purple-600" : "border-gray-300"
                                }`}
                        >
                            CATEGORY {i + 1}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
                    <div className="bg-white shadow-md rounded-xl overflow-hidden row-span-2">
                        <img src="https://images.shiksha.com/mediadata/images/articles/1727952706phpexYyzb.jpeg" alt="Gallery Item" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <img src="https://img.freepik.com/free-vector/design-process-concept-landing-page_23-2148313670.jpg" alt="Gallery Item" className="w-full h-40 object-cover" />
                    </div>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <img src="https://images.squarespace-cdn.com/content/v1/54bdcba5e4b08f92b173441f/1492980835245-25LYZE96GXGM0194UELQ/designhexagon" alt="Gallery Item" className="w-full h-40 object-cover" />
                    </div>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden row-span-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbTwKKnREyfZVboGddNOMjGizYuxw9WCgbw&s" alt="Gallery Item" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-purple-600 text-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center">
                        <p className="text-lg font-semibold text-center">Aenean facilisis vitae purus</p>
                        <a href="#" className="text-blue-200 underline mt-2">
                            linkofthisitem.com
                        </a>
                    </div>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <img src="https://media.gettyimages.com/id/1362074710/vector/liquid-style-colorful-pastel-abstract-background-with-elements-vector.jpg?s=612x612&w=gi&k=20&c=AuX4MQRarEVTJChFCbYEibxSnxya6tNs0Ef_tQyMCFk=" alt="Gallery Item" className="w-full h-40 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
