import NonuserInquiryHeader from "@/components/pages/nonuser/nonuserInquiryHeader";


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <NonuserInquiryHeader/>
            {children}
        </>
    );

}