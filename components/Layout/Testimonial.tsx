"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import '../../app/style/testimonial.css';

export default function Testimonial() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    var data = [
        {
            title: "Robert Doe",
            subtitle: "Product Owner",
            rating: 4.5,
            desc: "Wow! I love this site. Realtime Colors is all websites at the same time.",
        },
        {
            title: "Robert Doe",
            subtitle: "Product Owner",
            rating: 4.5,
            desc: "Wow! I love this site. Realtime Colors is all websites at the same time.",
        },
        {
            title: "Robert Doe",
            subtitle: "Product Owner",
            rating: 4.5,
            desc: "Wow! I love this site. Realtime Colors is all websites at the same time.",
        },
        {
            title: "Robert Doe",
            subtitle: "Product Owner",
            rating: 4.5,
            desc: "Wow! I love this site. Realtime Colors is all websites at the same time.",
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="testimonial">
            <div className="flex flex-col gap-3 pb-14">
                <div className={`title ${isVisible && "animate-fadeIn"}`}>TESTIMONIAL</div>
                <div className={`tagline ${isVisible && "animate-fadeIn"}`}><span className="sub-tagline">My Happy</span> Client</div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    data.map((item, index) => (
                        <div className={`card ${isVisible && index % 2 === 0 && "animate-slideInLeft" || isVisible && index % 2 === 1 && "animate-slideInRight"}`} key={index}>
                            <div className="flex justify-between items-center w-full">
                                <div className="text-left">
                                    <div className="title-card">{item.title}</div>
                                    <div className="subtitle-card">{item.subtitle}</div>
                                </div>
                                <div className="rating-card">
                                    <Image src="/icons/star.png" alt="star" width={15} height={15} />
                                    {item.rating}
                                </div>
                            </div>
                            <div className="desc-card">
                                "{item.desc}"
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}