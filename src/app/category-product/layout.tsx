import LeftNav from "@/components/layout/LeftNav";
import RightNav from "@/components/layout/RightNav";
import TopHeader from "@/components/layout/TopHeader";
import CategoryHeader from "@/components/pages/category/CategoryHeader";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <TopHeader/>
            {children}
            <LeftNav/>
            <RightNav/>
        </>
    );

}