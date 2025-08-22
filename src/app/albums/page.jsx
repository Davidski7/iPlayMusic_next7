import React from 'react';
import AlbumsItem from "@/components/albumsitem"
import { cookies } from "next/headers";
import Footer from '@/components/footer'




const Albums = () => {
    return (
        <>


            <AlbumsItem />


            <Footer />
        </>
    );
};

export default Albums;
