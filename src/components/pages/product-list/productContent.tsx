import { CommonDataResType } from '@/types/commonResType';
import ProductCardTypeItem from './ProductCardTypeItem';
import { ProductCardDataType, ProductIdListByCategoryType } from '@/types/productDataType';

async function getProductList(categoryId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/category-product?categoryId=${categoryId}`)
    return res.json();
}

export default async function ProductConetent({ categoryId }: { categoryId: number }) {

    if (categoryId === 0) {
        alert('카테고리 정보가 없습니다.');
    }

    const getProductListData: CommonDataResType = await getProductList(categoryId);
    console.log('상품데이터',getProductListData.data);

    const productList: ProductIdListByCategoryType[] = getProductListData.data.categoryProducts;

    return (
        <div className='grid grid-cols-2 gap-2 mx-[16px]'>

            {/* {productList.map((item: ProductIdListByCategoryType, index: number) => (
                <ProductCardTypeItem productId={item.productId} key={index} />
            ))} */}
        </div>
    )
}