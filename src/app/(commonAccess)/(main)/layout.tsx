import {ReactNode} from "react";
import Header from "@/components/layout/Header"
type Props = { children: ReactNode};

export default function Layout({ children}: Props) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}