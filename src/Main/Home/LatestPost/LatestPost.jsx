import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const LatestPost = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })

    return (
        <>
            <div className="max-w-5xl mt-[850px] flex">
                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-xl font-bold">Latest Post</h1>
                    <div className="flex items-center justify-center"><p className="w-2 h-2 rounded-full bg-purple-900"></p></div>

                    <p className="opacity-70 mt-5">Lorem ipsum dolor sit amet at <a className="text-purple-900" href="">www.abcd.com</a> </p>
                </div>

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbmVyfGVufDB8fDB8fHww"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1602064172250-43f8909056c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc2lnbmVyfGVufDB8fDB8fHww"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1581548133861-ad7a282a1d62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbmVyfGVufDB8fDB8fHww"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <div className="card bg-base-100 w-96 shadow-sm h-96">
                            <figure>
                                <img
                                    src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2lnbmVyfGVufDB8fDB8fHww"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-xl font-bold">Lorem ipsum dolor sit amet.</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-start">
                                    <div className="text-purple-900">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LatestPost;