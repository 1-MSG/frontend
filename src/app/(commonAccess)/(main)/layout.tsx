import {ReactNode} from "react";
import Header from "@/components/layout/Header"
import BottomHeader from "@/components/layout/BottomHeader";
type Props = { children: ReactNode};

export default function Layout({ children}: Props) {
  return (
    <div>
      <Header/>
      <BottomHeader />
      {children}
    </div>
  )
}