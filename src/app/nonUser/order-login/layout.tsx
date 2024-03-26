import NonuserLoginHeader from "@/components/pages/nonuser/nonuserLoginHeader";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <NonuserLoginHeader/>
            {children}
        </>
    );

}