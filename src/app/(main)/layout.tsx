import { ReactNode } from "react";
import Header from "@/components/layout/Header"
import BottomHeader from "@/components/layout/BottomHeader";
import UserFooter from '@/components/layout/UserFooter';
type Props = { children: ReactNode, modal: ReactNode };

export default function Layout({ children, modal }: Props) {
    return (
        <>
            <Header />
            <BottomHeader />
            {modal}
            {children}
            <UserFooter />
        </>
    )
}