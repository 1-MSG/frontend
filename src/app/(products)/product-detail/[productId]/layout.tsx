import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className=" sticky bg-orange-400 px-2 py-2 top-0 z-50">
                Test
            </div>
            {children}
        </>
    );

}