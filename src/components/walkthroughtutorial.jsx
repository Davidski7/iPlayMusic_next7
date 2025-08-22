"use client";

import { useState } from 'react';
import '../style/walkthrough.scss';
import { FaBroadcastTower, FaHeart, FaMusic } from 'react-icons/fa';
import Link from "next/link";

const slides = [
    {
        image: '/Asset 3.png',
        title: 'Where Words Fail,\nMusic Speaks',
        text: 'Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.',
    },
    {
        image: null,
        title: 'No Music\nNo Life',
        text: 'Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.',
    },
    {
        image: null,
        title: 'Peace.Love\nMusic',
        text: 'Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.',
    },
];

export default function WalkThroughTutorial() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const { image, title, text } = slides[activeIndex];

    return (
        <div className="walkthrough">
            <div className="walkthrough-image-wrapper">
                {image ? (
                    <img src={image} alt="illustration" className="walkthrough-image" />
                ) : (
                    <div className="walkthrough-image-placeholder" />
                )}
            </div>

            <h2 className="walkthrough-title">{title}</h2>
            <p className="walkthrough-text">{text}</p>

            <div className="walkthrough-icons">
                {[0, 1, 2].map((i) => (
                    <button
                        key={i}
                        className={`icon-button ${activeIndex === i ? 'active' : ''}`}
                        onClick={() => handleSlideChange(i)}
                    >
                        {i === 0 && <FaBroadcastTower />}
                        {i === 1 && <FaHeart />}
                        {i === 2 && <FaMusic />}
                    </button>
                ))}
            </div>

            <Link href="/featured">
                <button className="skip-button">SKIP</button>
            </Link>
        </div>
    );
}
