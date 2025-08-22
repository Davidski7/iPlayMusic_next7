import { useEffect, useState } from 'react'
import "../style/splashscreen.scss";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="splash-screen">
                <img src="/Group 434.png" alt="Logo" className="splash-logo" />
            </div>
        )
    }


}
