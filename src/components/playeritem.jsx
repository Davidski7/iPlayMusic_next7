import React from "react";
import "../style/player.scss";
import { FaPlay, FaBackward, FaForward } from "react-icons/fa";
import Header from './header'

const PlayerItem = () => {
    return (
        <div className="player-container">
            <Header />
            <div className="player-background">
                <img
                    src="/pexels-photo-1771305.png"
                    alt="Background"
                    className="background-img"
                />
                <div className="overlay" />
            </div>

            <div className="album-circle">
                <div className="album-inner-circle">
                    <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                        alt="Album Art"
                        className="album-art"
                    />
                </div>
            </div>

            <div className="track-info">
                <h2>Don't Call Me Up</h2>
                <p>Mabel</p>
            </div>

            <div className="progress-bar">
                <span>0:00</span>
                <input type="range" min="0" max="100" className="slider" />
                <span>3:40</span>
            </div>

            <div className="controls">
                <FaBackward />
                <FaPlay className="play-button" />
                <FaForward />
            </div>
        </div>
    );
};

export default PlayerItem;
