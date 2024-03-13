import MainCategory from "@/components/MainCategory/MainCategory";
import MainBanner from "@/components/banner/MainBanner";

import PreviewProducts from "@/app/(commonAccess)/(main)/_serverComponents/PreviewProducts";
import PreviewCards from "@/app/(commonAccess)/(main)/_serverComponents/PreviewCards";
import PreviewPopularityProducts from "@/app/(commonAccess)/(main)/_serverComponents/PreviewPopularityProducts";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

export default function Home() {
  return (
    <>
      <MainBanner/>
      <MainCategory/>
      <PreviewProducts/>
      <PreviewCards/>
      <PreviewPopularityProducts/>
      {/* 클라이언트 컴포넌트 호출(무한 스크롤) */}
      <Footer/>
      <Nav/>
    </>
  );
}
