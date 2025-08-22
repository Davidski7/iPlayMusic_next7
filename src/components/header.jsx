"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaLongArrowAltLeft, FaSearch } from "react-icons/fa";
import "../style/header.scss";

export default function Header({ theme = "dark" }) {
    const router = useRouter();
    const pathname = usePathname();

    const path = pathname.split("/")[1];
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1);

    const goback = () => {
        router.back();
    };

    return (
        <div className={`header-container ${theme === "light" ? "light" : ""}`}>
            <FaLongArrowAltLeft onClick={goback} className="back-button" size={24} />
            <h2 className="header-title">{pageTitle}</h2>
            <FaSearch className="search-icon" size={20} />
        </div>
    );
}
