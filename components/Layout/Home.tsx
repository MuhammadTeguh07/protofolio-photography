"use client";

import Image from "next/image";
import Socials from "../Button/Social";

export default function Home() {
    return (
        <div className="home">
            <div className="content-center">
                <span className="subtitle-home animate-fadeIn">
                    I AM PHOTOGRAPHER
                </span>
                <h1 className="title-home animate-fadeIn">
                    Capture Every
                    <span className="title-hightlight-home">
                        Precious
                    </span><br />
                    Moment
                </h1>
                <div className=" mt-10">
                    <Socials />
                </div>
            </div>
            <div>
                {/* <div className="bg-[#3d3e3814] w-[450px] h-[200px] absolute left-0"></div> */}
                {/* <div className="bg-[#3d3e3814] w-[450px] h-[200px] absolute right-0 bottom-[90px]"></div> */}
                <Image className="img-home animate-slideInRight" src="/images/photo-home-2.png" alt="photo" width={500} height={500} />
            </div>
        </div>
    )
}