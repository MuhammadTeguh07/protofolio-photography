"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '../../app/style/about.css';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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
        <div ref={sectionRef} className="about">
            <div className="flex flex-col gap-10 m-auto p-0">
                <div className={`title-about ${isVisible && 'animate-fadeIn'}`}>ABOUT ME</div>
                <div className={`title-tagline ${isVisible && 'animate-fadeIn'}`}>
                    Taking Pictures Always Has <span className='sub-title-tagline'>Meaning</span>
                </div>
                <div className={`title-desc ${isVisible && 'animate-fadeIn'}`}>
                    Hello, I&#39;m Teguh, a professional photographer with over 3 years of experience capturing special moments through the lens.
                    With expertise in various photography fields, including portrait, wedding, and product photography.
                    I have the ability to create images that are not only beautiful but also rich in storytelling.
                </div>
            </div>
            <Image
                className={`img-about ${isVisible && 'animate-zoomIn'}`}
                src="/images/photo-6.jpg"
                alt="photo"
                width={500}
                height={500}
            />
        </div>
    );
}
