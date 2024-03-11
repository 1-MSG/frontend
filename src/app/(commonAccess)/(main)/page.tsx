import MainCategory from "@/components/MainCategory/MainCategory";
import MainBanner from "@/components/banner/MainBanner";

import PreviewProducts from "./_serverComponets/previewProducts";
import PreviewCards from "./_serverComponets/previewCards";
import PreviewPopularityProducts from "./_serverComponets/previewPopularityProducts";


export default function Home() {
  return (
    <>
      <MainBanner/>
      <MainCategory/>
      <PreviewProducts/>
      <PreviewCards/>
      <PreviewPopularityProducts/>
      {/* 클라이언트 컴포넌트 호출(무한 스크롤) */}
      {/* footer*/}
    </>
  );
}
