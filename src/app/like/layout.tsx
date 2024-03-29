import Footer from "@/components/layout/Footer";
import LikeHeader from "@/components/pages/like/LikeHeader";


export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <LikeHeader/>
            {children}
            <Footer/>
        </>
    );

}