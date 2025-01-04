'use client'; // This line tells Next.js that this is a Client Component

import React from "react";
import { FaInstagram, FaPinterestP, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Socials = () => {
    const data = {
        email: "muhammadteguh301@gmail.com",
        whatsapp: "6283847070417",
        instagram: "mteguh07",
        tiktok: ""
    }

    return (
        <ul className="flex gap-2">
            <li><a className="icon-social animate-zoomIn delay-500" target="_blank" href={`https://api.whatsapp.com/send/?phone=${data.whatsapp}`}><FaWhatsapp fontSize={"1.2rem"} style={{ strokeWidth: 15 }} /></a></li>
            <li><a className="icon-social animate-zoomIn delay-100" target="_blank" href={`https://www.instagram.com/${data.instagram}`}><FaInstagram fontSize={"1.2rem"} style={{ strokeWidth: 15 }} /></a></li>
            <li><a className="icon-social animate-zoomIn delay-100" target="_blank" href={`#`}><FaYoutube strokeWidth={1} fontSize={"1.2rem"} /></a></li>
            <li><a className="icon-social animate-zoomIn delay-100" target="_blank" href={`#`}><FaTiktok strokeWidth={1} fontSize={"1.2rem"} /></a></li>
            <li><a className="icon-social animate-zoomIn delay-100" target="_blank" href={`#`}><FaPinterestP strokeWidth={1} fontSize={"1.2rem"} /></a></li>
        </ul>
    );
};

export default Socials;
