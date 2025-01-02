"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import '../../app/style/service.css';
import '../../app/style/contact.css';

export default function Service() {
    const [isVisibleService, setIsVisibleService] = useState(false);
    const [isVisibleContact, setIsVisibleContact] = useState(false);
    const sectionServiceRef = useRef(null);
    const sectionContactRef = useRef(null);

    useEffect(() => {
        const observerService = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleService(true);
                }
            },
            { threshold: 0.1 }
        );

        const observerContact = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleContact(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionServiceRef.current) {
            observerService.observe(sectionServiceRef.current);
        }

        if (sectionContactRef.current) {
            observerContact.observe(sectionContactRef.current);
        }

        return () => {
            if (sectionServiceRef.current) {
                observerService.unobserve(sectionServiceRef.current);
            }
            if (sectionContactRef.current) {
                observerContact.unobserve(sectionContactRef.current);
            }
        };
    }, []);

    var data = [
        {
            title: "Wedding",
            icon: "/icons/wedding.png",
        },
        {
            title: "Fashion",
            icon: "/icons/fashion.png",
        },
        {
            title: "Product",
            icon: "/icons/product.png",
        },
        {
            title: "Food",
            icon: "/icons/food.png",
        },
        {
            title: "Sport",
            icon: "/icons/sport.png",
        },
        {
            title: "Graduation",
            icon: "/icons/graduation.png",
        }
    ]

    return (
        <div className="container-service">
            <div ref={sectionServiceRef} className="service">
                <div className="flex flex-col gap-3 pb-14">
                    <div className={`title-service ${isVisibleService && "animate-fadeIn"}`}>MY SERVICE</div>
                    <div className={`title-tagline ${isVisibleService && "animate-fadeIn"}`}><span className="sub-title-tagline">The Best</span> Service I Provide</div>
                </div>
                <div className="container-card">
                    {
                        data.map((item, index) => (
                            <div className={`card ${isVisibleService && "animate-zoomIn"}`} key={index}>
                                <Image className="pb-3" src={item.icon} alt="photo" width={70} height={70} />
                                <div className="title-card">{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div ref={sectionContactRef} className="contact">
                <div className={`title-tagline ${isVisibleContact && "animate-fadeIn"}`}>Keep In Touch <span className="sub-title-tagline">With Me</span></div>
                <button type="button" className={`btn-contact ${isVisibleContact && "animate-zoomIn"}`}>
                    Let's Talk
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}