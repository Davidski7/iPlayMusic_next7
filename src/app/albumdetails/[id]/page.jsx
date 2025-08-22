import React from 'react';
import AlbumDetailsItem from '@/components/albumdetailsitems';
import Footer from '@/components/footer';
import { cookies } from 'next/headers';



export async function generateMetadata({ params }) {
    const { id } = await params;
    console.log(id)
    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/albums/" + id, {
        headers: {
            Authorization: "Bearer " + access_token.value
        }
    });

    const data = await response.json();
    console.log(data)

    return {
        title: data.name
    }
}

export default async function AlbumDetails({ params }) {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('ipm_access_token');

    const resolvedParams = await params;
    const id = resolvedParams.id;

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token?.value}`
        },

    });

    const data = await response.json();

    return (
        <>
            <AlbumDetailsItem data={data} />
            {/* < PlaySongs tokenVal={access_token.value} uri={data.uri} /> */}
            <Footer />
        </>
    );
}
