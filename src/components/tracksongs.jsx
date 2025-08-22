"use client"

import { useContext } from "react";
import { playerContext } from "@/providers/player-provider";
import { IoIosPlay } from "react-icons/io";
import '../style/albumdetails.scss';

export default function TrackSongs({ song, albumCover }) {
    const { setShowPlayer, setCurrentTrack, setAlbumCover } = useContext(playerContext);

    async function clickHandler(event) {
        setShowPlayer(true);
        setCurrentTrack(song);
        setAlbumCover(() => albumCover);
    }



    return (
        <>

            <button className="song" onClick={clickHandler}>
                <div className="left">
                    <div className="play-btn">
                        <IoIosPlay />
                    </div>
                    <div className="info">
                        <div className="title">{song.name}</div>
                        <div className="artist">
                            {song.artists.map(a => a.name).join(', ')}
                        </div>
                    </div>
                </div>
                <div className="time">
                    {Math.floor(song.duration_ms / 60000)} : {Math.floor((song.duration_ms % 60000) / 1000).toString().padStart(2, '0')}
                </div>
            </button>


        </>
    )

}

