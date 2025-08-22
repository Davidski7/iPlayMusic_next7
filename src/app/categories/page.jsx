import CategoriesItems from '@/components/categoriesitems'
import Footer from '@/components/footer'
import { cookies } from "next/headers";
// import '../style/categories.scss'

export default async function Categories() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch(
        "https://api.spotify.com/v1/browse/categories?limit=20&country=US",
        {
            headers: {
                Authorization: `Bearer ${access_token?.value}`
            },
        }

    );

    const data = await response.json();
    console.log("data", data);

    return (
        <>
            <CategoriesItems categories={data.categories.items} />

            <Footer />

        </>
    );
}