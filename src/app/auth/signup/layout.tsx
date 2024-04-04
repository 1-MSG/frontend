import Footer from "@/components/layout/Footer";
import UnionHeader from "@/components/pages/auth/signup/unionHeader";


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <UnionHeader/>
            {children}
            <Footer/>
        </>
    );

} 