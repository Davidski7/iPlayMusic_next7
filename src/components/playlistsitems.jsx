import React from 'react';
import Header from './header';
import '../style/playlists.scss';
import '../style/albumdetails.scss';

import { cookies } from 'next/headers';
import Image from 'next/image';
import TrackSongs from './tracksongs';

export default async function PlayListsItems() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token")?.value;

    const playlistsResponse = await fetch("https://api.spotify.com/v1/me/playlists?limit=4", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const playlistsData = await playlistsResponse.json();

    const myPlaylistsTracks = [];

    for (const playlist of playlistsData.items) {
        const tracksResponse = await fetch(
            `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?limit=10`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        const tracksData = await tracksResponse.json();

        myPlaylistsTracks.push({
            ...playlist,
            tracksPreview: tracksData.items.map((item) => item.track),
        });
    }

    return (
        <div className="playlists-wrapper">
            <div className="header-bg">
                <img src="/sound-wave.png" alt="Background" />
            </div>

            <div className="content">
                <Header theme="light" />
                <h1 className="main-title">Dine Playlister</h1>

                <div className="playlists-list">
                    {myPlaylistsTracks.map((playlist) => (
                        <div key={playlist.id} className="playlist-card">
                            <Image
                                unoptimized
                                src={playlist.images?.[0]?.url || "/default-playlist.png"}
                                width={playlist.images?.[0]?.width || 300}
                                height={playlist.images?.[0]?.height || 300}
                                alt={playlist.name}
                                className="cover-img"
                            />
                            <h2 className="subtitle">{playlist.name}</h2>
                            <h3 className="subtitle-small">{playlist.description || ""}</h3>

                            <div className="songs">
                                {playlist.tracksPreview.map((track) => (
                                    <TrackSongs
                                        key={track.id}
                                        song={track}
                                        albumCover={playlist.images?.[0]?.url || "/default-playlist.png"}
                                    />
                                ))}
                            </div>

                            <button className="listen-all">LISTEN ALL</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}