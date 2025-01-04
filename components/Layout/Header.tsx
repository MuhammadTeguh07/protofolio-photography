"use client";

import { handleScroll } from "@/functions/general";
import { useEffect, useState } from "react";
import "../../app/style/header.css";
import DrawerTop from "../Drawer/DrawerTop";

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState("home");
    const listMenu = ["Home", "About", "Service", "Project", "Testimonial"];

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsMenuActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -10% 0px', // Agar menu aktif sedikit sebelum bagian tengah layar
                threshold: 0.1, // Mengaktifkan saat 50% elemen terlihat
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);

    return (
        <header className={`header`}>
            <a className="header-brand" href="index.html">TEGUH</a>
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav nav">
                        {
                            listMenu.map((item, index) => (
                                <li className="nav-item" onClick={() => handleScroll(item.toLowerCase(), setIsMenuActive)} key={index}>
                                    {
                                        item === "Home" ? <a href="#" className={`nav-link ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                            : <a href={`#${item.toLowerCase()}`} className={`nav-link ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                    }
                                </li>
                            ))
                        }
                    </ul >
                </nav >
                <DrawerTop
                    listMenu={listMenu}
                    isMenuActive={isMenuActive}
                    setIsMenuActive={setIsMenuActive}
                    handleScroll={handleScroll}
                />
            </div>
        </header >
    )
}