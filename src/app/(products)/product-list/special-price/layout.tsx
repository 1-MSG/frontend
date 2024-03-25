import BottomHeader from "@/components/layout/BottomHeader";
import Header from "@/components/layout/Header";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <div className="sticky top-0 z-10 overflow-x-scroll overflow-y-hidden"><BottomHeader/></div>
            {children}
        </>
    );

}