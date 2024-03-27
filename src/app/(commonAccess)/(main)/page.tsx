import MainCategory from "@/components/MainCategory/MainCategory";
import MainBanner from "@/components/banner/MainBanner";

import PreviewProducts from "@/app/(commonAccess)/(main)/_serverComponents/PreviewProducts";
import PreviewCards from "@/app/(commonAccess)/(main)/_serverComponents/PreviewCards";
import PreviewPopularityProducts from "@/app/(commonAccess)/(main)/_serverComponents/PreviewPopularityProducts";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SsgNotification from "@/components/ui/SsgNotification";


export default async function Home() {

  const session = await getServerSession(options);
  console.log('mainsession',session);

  return (
    <>
      {/* <SsgNotification isView={session ? true : false} 
      userData={{
        userName: session?.user?.name || '손님',
        userPhoto: session?.user?.image || '',
      }}/> */}
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