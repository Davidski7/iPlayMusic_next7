import React from 'react';
import FeaturedCard from '@/components/featuredcard'
// import '../style/featured.scss';
import Footer from '@/components/footer'
import { cookies } from "next/headers";

export const metadata = {
    title: "Featured"
};

export default async function Featured() {
    // const cookieStore = await cookies();

    // const access_token = cookieStore.get("ipm_access_token");

    // const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
    //     headers: {
    //         "Authorization": `Bearer ${access_token.value}`
    //     }
    // });

    // const data = await response.json();
    // console.log("data", data);


    return (
        <>


            <FeaturedCard />


            <Footer />
        </>
    );
};


