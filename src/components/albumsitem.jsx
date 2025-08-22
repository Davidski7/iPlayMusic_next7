import React from 'react';
import '@/style/albums.scss';
import Header from './header';
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";


export default async function AlbumsItem() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            "Authorization": `Bearer ${access_token?.value}`
        },

    });

    const data = await response.json();


    const newReleases = data.albums.items;

    return (
        <div className="albums-page">
            <Header />
            <div className="albums-header">
                <h1>All Albums</h1>
            </div>


            <div className="section">
                <div className="section-header">
                    <h2>Featured Albums</h2>
                    <span className="view-all">View All</span>
                </div>
                <div className="featured-albums">
                    {newReleases.slice(0, 3).map((album, index) => (
                        <Link href={`/albumdetails/${album.id}`} key={album.id}>
                            <Image
                                unoptimized
                                src={album.images[0].url}
                                width={album.images[0].width}
                                height={album.images[0].height}
                                alt={album.name}
                                className="featured-img"
                            />
                        </Link>
                    ))}
                </div>
            </div>


            <div className="section">
                <div className="section-header">
                    <h2>New Releases</h2>
                    <span className="view-all">View All</span>
                </div>
                <div className="new-releases">
                    {newReleases.map((item, index) => (
                        <Link href={`/albumdetails/${item.id}`} key={item.id} className="release">
                            <Image
                                unoptimized
                                src={item.images[0].url}
                                width={item.images[0].width}
                                height={item.images[0].height}
                                alt={item.name}
                                className="release-img"
                            />
                            <div className="release-info">
                                <div className="title">{item.name}</div>
                                <div className="artist">{item.artists.map(artist => artist.name).join(', ')}</div>
                            </div>
                            <div className="songs">{item.total_tracks} Songs</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
