import MainCategory from "@/components/MainCategory/MainCategory";
import MainBanner from "@/components/banner/MainBanner";

import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SsgNotification from "@/components/ui/SsgNotification";
import PreviewProducts from "@/components/pages/main/PreviewProducts";
import PreviewCards from "@/components/pages/main/PreviewCards";
import PreviewPopularityProducts from "@/components/pages/main/PreviewPopularityProducts";
import RightNav from "@/components/layout/RightNav";
import PreviewRanking from "@/components/pages/main/PreviewRanking";


export default async function Home() {

  const session = await getServerSession(options);
  console.log('mainsession',session?.user);

  return (
    <>
      {/* <SsgNotification isView={session ? true : false} 
      userData={{
        userName: session?.user?.name || '손님',
        userPhoto: session?.user?.image || '',
      }}/> */}
      <MainBanner/>

      <MainCategory/>

      <PreviewRanking/>

      <PreviewCards/>

      <PreviewPopularityProducts/>

      <PreviewProducts/>

      {/* 클라이언트 컴포넌트 호출(무한 스크롤) */}
      
      <Footer/>
      <Nav/>
      <RightNav/>
    </>
  );
}