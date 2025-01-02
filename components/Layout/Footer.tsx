"use client";

import SocialFooters from "../Button/SocialFooter";
import '../../app/style/footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span>
                Copyright © 2024 Muhammad Teguh
            </span>
            <SocialFooters />
        </div>
    )
}