"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ModalProject from "../Modal/ModalProject";

export default function Project() {
    const data = {
        graduation: ["/images/graduation-2.jpg", "/images/graduation-3.webp"],
        food: ["/images/food-4.jpg", "/images/food-2.webp", "/images/food-3.jpg"],
        product: ["/images/product-5.jpg", "/images/product-3.jpeg", "/images/product-6.jpg"],
        fashion: ["/images/fashion-3.jpg", "/images/fashion-2.png"],
        sport: ["/images/sport-3.jpeg", "/images/sport-2.jpg"],
        wedding: ["/images/wedding-3.webp", "/images/wedding-2.jpeg"],
    }

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImgProject, setSelectedImgProject] = useState<string[]>([]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

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
        <>
            <div ref={sectionRef} className="project">
                <div className="flex flex-col gap-3 pb-10">
                    <div className={`title-project ${isVisible && "animate-fadeIn"}`}>MY PROJECTS</div>
                    <div className={`title-tagline ${isVisible && "animate-fadeIn"}`}>The <span className="sub-title-tagline">Moment</span> I Have Captured</div>
                </div>
                <div id="project-col-3" className="grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.graduation); }}>
                            <Image className="img-project" unoptimized src={data.graduation[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Graduation</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.food); }} >
                            <Image className="img-project" unoptimized src={data.food[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Food</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.product); }} >
                            <Image className="img-project" unoptimized src={data.product[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Product</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.fashion); }} >
                            <Image className="img-project" unoptimized src={data.fashion[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Fashion</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.sport); }} >
                            <Image className="img-project" unoptimized src={data.sport[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Sport</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.wedding); }} >
                            <Image className="img-project" unoptimized src={data.wedding[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Wedding</span>
                        </div>
                    </div>
                </div>
                <div id="project-col-2" className="grid-cols-2 gap-4">
                    <div className="grid gap-4">
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.graduation); }}>
                            <Image className="img-project" unoptimized src={data.graduation[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Graduation</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.food); }} >
                            <Image className="img-project" unoptimized src={data.food[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Food</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.sport); }} >
                            <Image className="img-project" unoptimized src={data.sport[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Sport</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.product); }} >
                            <Image className="img-project" unoptimized src={data.product[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Product</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.fashion); }} >
                            <Image className="img-project" unoptimized src={data.fashion[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Fashion</span>
                        </div>
                        <div className={`img-container ${isVisible && "animate-zoomIn"}`} onClick={() => { openModal(); setSelectedImgProject(data.wedding); }} >
                            <Image className="img-project" unoptimized src={data.wedding[0]} alt="photo" width={500} height={500} />
                            <span className="title-img">Wedding</span>
                        </div>
                    </div>
                </div>
            </div>

            <ModalProject isOpen={isModalOpen} onClose={closeModal} images={selectedImgProject} />
        </>
    )
}