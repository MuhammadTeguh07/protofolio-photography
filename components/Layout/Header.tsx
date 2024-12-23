"use client";

import { list } from "postcss";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMenuAcive, setIsMenuActive] = useState("home");
    const listMenu = ["Home", "Project", "About", "Experience", "Contact"];

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
        <header className="header">
            <a className="header-brand" href="index.html">TEGUH</a>
            <nav className="navbar">
                <ul className="navbar-nav nav">
                    {
                        listMenu.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a href="#" className={`nav-link ${isMenuAcive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                            </li>
                        ))
                    }
                </ul >
            </nav >
        </header >
    )
}