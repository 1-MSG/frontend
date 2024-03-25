import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LeftNav from "@/components/layout/LeftNav";
import Nav from "@/components/layout/Nav";
import RightNav from "@/components/layout/RightNav";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <Header/>
            {children}
            <LeftNav/>
            <RightNav/>
            <Nav/>
            <Footer/>
        </>
    );

}