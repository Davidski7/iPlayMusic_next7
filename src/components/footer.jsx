import React from "react";
import { FaMicrophone, FaCog } from "react-icons/fa";
import { IoIosContrast } from "react-icons/io";
import { CiWavePulse1 } from "react-icons/ci";
import { IoMdWifi } from "react-icons/io";
import Link from "next/link";
import "../style/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="/playlists" className="footer-icon"><CiWavePulse1 /></Link>
            <Link href="/categories" className="footer-icon"><FaMicrophone /></Link>
            <Link href="/featured" className="footer-icon active-center"><IoMdWifi /></Link>
            <Link href="/albums" className="footer-icon"><IoIosContrast /></Link>
            <Link href="/settings" className="footer-icon"><FaCog /></Link>
        </footer>
    );
};

export default Footer;
