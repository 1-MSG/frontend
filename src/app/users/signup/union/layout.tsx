import Footer from "@/components/layout/Footer";
import UnionHeader from "@/components/pages/signup/union/unionHeader";


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <UnionHeader/>
            {children}
            <Footer/>
        </>
    );

}