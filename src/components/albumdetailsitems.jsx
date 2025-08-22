import React from 'react';
import { IoIosPlay } from "react-icons/io";
import '../style/albumdetails.scss';
import Header from './header';
import TrackSongs from './tracksongs';


export default function AlbumDetailsItem({ data }) {
    // const cookieStore = await cookies();
    // const access_token = cookieStore.get("ipm_access_token");

    // const response = await fetch(`https://api.spotify.com/v1/albums/${params.id}`, {
    //     headers: {
    //         "Authorization": `Bearer ${access_token?.value}`
    //     },
    // });

    // const data = await response.json();

    return (
        <div className="album-wrapper">
            <div className="album-header">
                <img
                    className="album-image"
                    src={data?.images?.[0]?.url || "/fallback.jpg"}
                    alt="Album Cover"
                />


                <div className="header-overlay">
                    <Header theme="light" />
                </div>

                <div className="album-info-top">
                    <h1 className="album-title">{data.name}</h1>
                    <p className="album-count">{data.total_tracks} Songs</p>
                </div>

                <div className="album-info-bottom">
                    <h2 className="genre-title">Artists</h2>
                    <div className="genre-tags">
                        {data.artists.map((artist) => (
                            <span className="tag" key={artist.id}>#{artist.name.replace().toLowerCase()}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="song-list">
                <h3 className="song-list-title">All Songs</h3>

                {data.tracks.items.map(track => <TrackSongs key={track.id} song={track} />)}

            </div>


        </div>
    );
}
