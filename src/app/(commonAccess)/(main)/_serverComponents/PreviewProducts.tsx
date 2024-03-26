import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";


async function getProductFasionData() {
  const res = await fetch('https://gist.githubusercontent.com/YOON-CC/19a46edd2975eaaa3ea847a6ca78d8b0/raw/08649bef23e345e08b18e626bdfefa919c4e47ed/fasiondata.json');
  if (!res.ok) {
    throw new Error('Network Error');
  }
  const data = await res.json();
  return data;
}

export default async function PreviewProducts() {
  const data = await getProductFasionData()
  // console.log(data.products[0].image_url)
  // console.log(data.products[0].product_name)
  // const imageUrls = data.products.map((product: { image_url: any; }) => product.image_url);
  // console.log(imageUrls);
  return (
    <>
      <div style={{padding : '12px'}}>
        <Image src={Adv1} alt=''/>
      </div>
      <div style={{padding : '12px'}}>
        <h2 style={{fontSize:'19px', fontWeight:'bold'}}>24 SPRING COLLECTION</h2>
      </div>

      <div style={{display:'flex', width : '100%', overflowX: 'auto', whiteSpace: 'nowrap'}}>
        <div style={{width:'fit-content'}}>
          {data.products.map((product: { image_url: string | undefined; category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; product_name: string; discount_rate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} style={{width : '150px', height : 'auto', margin : '12px',  display:'inline-block'}}>
              <img src={product.image_url} alt='' />
              <div>
                좋아요 / 장바구니
              </div>
              <div style={{width:'fit-content', height : 'fit-content', wordBreak:'break-all', fontSize:'12px', whiteSpace: 'wrap'}}>
                <span style={{fontWeight:'bold'}}>{product.category}</span>
                {' '}
                <span style={{color: 'grey'}}>{product.product_name.substring(0, 25)}...</span>
              </div>
              <div style={{fontSize:'11px'}}>원가</div>
              <div style={{width:'auto', height : 'auto', fontSize:'14px', display:'flex'}}>
                <span style={{fontWeight:'bold', color : '#ff6767'}}>{product.discount_rate}%</span>
                <span style={{fontWeight:'bold'}}>{product.price}원</span>
              </div>
              <div style={{fontSize:'11px'}}>리뷰</div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
