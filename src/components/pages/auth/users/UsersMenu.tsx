import Image from "next/image";
import Link from "next/link";

export default function UsersMenu() {
    const text1 = '결제수단\n관리'
    const text2 = '정기배송\n관리'
    const text3 = '유니버스\n클럽'
    const text4 = '회원정보\n변경'

    return (
        <div className="py-[50px]">
            <div>
                <strong className="text-[18px]">자주 찾는 메뉴</strong>
            </div>

            <div className="mt-[18px] grid grid-cols-5 gap-[10px] leading-[20px]">
                <Link href="/like" className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_like@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">좋아요</span>
                </Link>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_freq@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">자주구매</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_event@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">이벤트현황</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_qna@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">상품 Q&A</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_alert@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">입고알림</span>
                </div>

                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_gift@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">선물함</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_giftcard@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">상품권전환</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_albi@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">알비백관리</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_payment@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666] whitespace-pre-line">{text1}</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_regular_delivery@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666] whitespace-pre-line">{text2}</span>
                </div>

                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_notification@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">알림함</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_chat@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">고객센터톡</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_universe@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666] whitespace-pre-line">{text3}</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_modify@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666] whitespace-pre-line">{text4}</span>
                </div>
                <div className="text-center">
                    <Image src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_manage@3x.png?q=d3458fca6f15a9912c6863de7efe58f9bb7bbe72" width={182} height={182} alt=""/>
                    <span className="mt-[4px] text-[12px] text-[#666666]">내정보관리</span>
                </div>
            </div>

            <div className="mt-[50px] grid grid-cols-2">
                <div className="h-[45px] text-[13px] text-center text-[#222222] content-center border border-[#e8e8e8] rounded-l-lg">
                    고객센터
                </div>
                <div className="h-[45px] text-[13px] text-center text-[#222222] content-center border border-[#e8e8e8] rounded-l-lg">
                    e-mail 상담/답변
                </div>
            </div>
        </div>
    )
}