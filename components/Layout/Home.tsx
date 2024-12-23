"use client";

import Image from "next/image";
import { list } from "postcss";
import { useEffect, useState } from "react";

export default function Home() {

    return (
        <div className="home">
            <div className="sub-title">
                Capture Your Precious Moments
            </div>
            <div className="title">
                PHOTOGRAPHY
            </div>
            <Image className="img-home" src="/images/Photo.png" alt="photo" width={500} height={500} />
            <div className="title-name">
                By Muhammad Teguh
            </div>
        </div>
    )
}