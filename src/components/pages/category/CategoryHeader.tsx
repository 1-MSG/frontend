import SsgLogo from "@/images/svgs/SsgLogo";
import Link from "next/link";

export default function CategoryHeader() {
    return (
        <header className="w-full justify-between items-center h-[56px] gap-3">
            <h1 className="text-[40px] py-[8px] pl-[16px] pr-[10px] items-center">
                <Link href="/">
                    <div className="pt-[12px] h-[40px]">
                        <SsgLogo />
                    </div>
                </Link>
            </h1>
        </header>
    )
}