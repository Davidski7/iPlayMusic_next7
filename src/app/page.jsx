

// import { useEffect, useState } from "react";
// import SplashScreen from "@/components/splashscreen";
import Login from "@/components/login";
import '../style/App.css';
// import "../style/App.css";                             


export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <SplashScreen />
      ) : ( */}
      <div className="app-content">
        <Login />
      </div>
      {/* )} */}
    </>
  );
}
