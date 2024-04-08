'use client'
import { OptionListType } from "@/types/optionDataType"

function OrderOption({
    item, 
    setOpenedOptionName,
    setIsOpenModal,
    index,
    selected,
    setSelectedList
} : {
    item: OptionListType, 
    setOpenedOptionName: React.Dispatch<React.SetStateAction<any>>, 
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    index: number,
    selected: boolean,
    setSelectedList: React.Dispatch<React.SetStateAction<boolean[]>>
}) {


    console.log("item ", item);
    console.log("selected ", selected);
    const handleSetOpenedOptionName = () => {
       if(selected) {
        setOpenedOptionName(item.optionType);
        setIsOpenModal(true);
        setSelectedList((prev) => {
            prev[index+1] = true;
            return prev;
        })
        } else alert('선택할 수 없는 옵션입니다.');

    }
  return (

    <div className={`mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border border-[#ff5452] rounded-md ${selected ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={handleSetOpenedOptionName}
    >
        선택하세요. &#40;{item.optionType}&#41;
    </div>
  )
}

export default OrderOption