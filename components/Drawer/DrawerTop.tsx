'use client'; // This line tells Next.js that this is a Client Component

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../app/style/header.css";

interface Props {
    listMenu: string[]
    isMenuActive: string
    setIsMenuActive: React.Dispatch<React.SetStateAction<string>>
    handleScroll: (id: string, setIsMenuActive?: React.Dispatch<React.SetStateAction<string>>) => void
}

const DrawerTop: React.FC<Props> = ({ listMenu, isMenuActive, setIsMenuActive, handleScroll }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <div className="text-center" onClick={toggleDrawer}>
                <FaBars className="menu-icon" />
            </div>

            {/* Overlay */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50"
                    onClick={closeDrawer}
                ></div>
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <h5
                    id="drawer-right-label"
                    className="inline-flex items-center mb-4 text-base font-bold text-dark"
                >
                    MENU
                </h5>
                <button
                    type="button"
                    onClick={closeDrawer}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <nav className="navbar-drawer">
                    <ul className="navbar-nav-drawer nav">
                        {
                            listMenu.map((item, index) => (
                                <li className="nav-item-drawer" onClick={() => handleScroll(item.toLowerCase(), setIsMenuActive)} key={index}>
                                    {
                                        item === "Home" ? <a href="#" className={`nav-link-drawer ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                            : <a href={`#${item.toLowerCase()}`} className={`nav-link-drawer ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                    }
                                </li>
                            ))
                        }
                    </ul >
                </nav >
            </div>
        </>
    );
};

export default DrawerTop;
