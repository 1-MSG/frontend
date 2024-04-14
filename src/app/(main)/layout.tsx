import { ReactNode } from "react";
import Header from "@/components/layout/Header"
import BottomHeader from "@/components/layout/BottomHeader";
import UserFooter from '@/components/layout/UserFooter';
type Props = { children: ReactNode};

export default function Layout({ children}: Props) {
    return (
        <>
            <Header />
            <BottomHeader />
            {children}
            <UserFooter />
        </>
    )
}