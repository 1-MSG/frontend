import MainCategory from "@/components/MainCategory/MainCategory";
import MainBanner from "@/components/banner/MainBanner";

import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'
import PreviewProducts from "./_serverComponets/previewProducts";


export default function Home() {
  return (
    <>
      <MainBanner/>
      <MainCategory/>
      <PreviewProducts/>
    </>
  );
}
