# Dokumentation for iPlayMusic 
David Alexander Simonsen

<img src="./public/file.svg">


## Sådan kommer du i gang
`npm install`

`npm run dev`

https://minadresse.dk/iplaymusic

Jeg har lavet valgfri opgave A


## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing. Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.
* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med stort modul-bibliotedk, som er aktivt, vel-dokumenteret og  vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor. 
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksmapel har lavet en fejl. Jeg bruger Git sammen med GitHub.
* **Tailwind**  
Et utility-baseret mobile-first CSS bibliotek.
* **React-icons**  
Et ikon-bibliotek, som er beregnet på React. 
* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.
* **Web-API fra Spotify**  
Et interface til at få adgang til Spotify's data, så jeg kan lave min egen app. Dette er den eneste måde hvor jeg lovligt kan få adgang til Spotify's data.
* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## kode-eksempel
(src/components/featuredcard.jsx)
```jsx
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


```


