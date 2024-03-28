import OrderFooter from '@/components/pages/product-detail/orderFooter';

export default function ProductDetailLead(props: any) {

    const giveData = props.giveData;

    return (
        <div>
            {/* 하단 구매하기 버튼 */}
            <OrderFooter giveData={giveData} />
        </div>
    )
}