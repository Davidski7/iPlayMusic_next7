import React from 'react';
import '../style/featured.scss';
import Header from './header'
import { cookies } from "next/headers";
import Image from "next/image";


export default async function FeaturedCard() {

    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    });

    const data = await response.json();
    console.log("data", data);



    return (
        <div className="featuredContent">
            <Header />
            <h2 className="page-title">Featured</h2>

            {data.albums.items.map((card, index) => (
                <div className="card" key={index}>
                    <Image
                        unoptimized
                        src={card.images[0].url}
                        width={card.images[0].width}
                        height={card.images[0].height}
                        alt=""
                        className="cardImage"
                    />
                    <div className="cardContent">
                        <h2 className="cardTitle">{card.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};
