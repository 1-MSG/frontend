import Image from "next/image";
import Adv2 from "@/assets/image/mainadvertisement/adv2.png"
import Adv3 from "@/assets/image/mainadvertisement/adv3.png"


async function getProductRandomData() {
    const res = await fetch('https://gist.githubusercontent.com/YOON-CC/aa61e8eaa86ad20e5400c6c6a70cc35d/raw/c5d48130ae3dc8bbb74c2a72282cfdd57895499c/gistfile1.txt');
    if (!res.ok) {
      throw new Error('Network Error');
    }
    const data = await res.json();
    return data;
}

export default async function PreviewPopularityProducts() {

  const data = await getProductRandomData()
  // console.log(data)
  // console.log(data.products[0].image_url)
  // console.log(data.products[0].product_name)

  return (
    <>
      <div style={{padding : '12px', marginTop:'20px'}}>
          <h2 style={{fontSize:'19px', fontWeight:'bold'}}>가장 인기 있는 특가 상품이에요!</h2>
          <Image src={Adv2} alt='' style={{width:'100%'}}/>
      </div>  

      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent:'space-between'}}>
        {/* 시작 */}
        {data.products.map((product:any, index : number) => (
          <>
            <div className="mobile-only" style={{width: '100%', height: 'auto', padding:'12px'}}>
              <img src={product.image_url} alt='' style={{width:'100%'}}/>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{width:'70%', fontWeight:'bold'}}>{product.product_name}</div>
                <div style={{width:'20%', display:'flex'}}>
                  <div style={{width:'50%', display:'flex', justifyContent:'center'}}>좋</div>
                  <div style={{width:'50%', display:'flex', justifyContent:'center'}}>장</div>
                </div>
              </div>
              <div style={{fontWeight:'bold'}}>{product.price}원~</div>
            </div>

            <div className="web-only" style={{width: '50%', height: 'auto', padding:'12px'}}>
              <img src={product.image_url} alt='' style={{width:'100%'}}/>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{width:'80%', fontWeight:'bold'}}>{data.products[1].product_name}</div>
                <div style={{width:'20%', display:'flex'}}>
                  <div style={{width:'10%', display:'flex', justifyContent:'center'}}>좋</div>
                  <div style={{width:'10%', display:'flex', justifyContent:'center'}}>장</div>
                </div>
              </div>
              <div style={{ fontWeight:'bold'}}>{product.price}원~</div>
            </div>
          </>
        ))}
        {/* 끝 */}
      </div>

      <div style={{padding : '12px', marginTop:'20px'}}>
          <Image src={Adv3} alt='' style={{width:'100%'}}/>
      </div>  
    </>
  );
}
