'use client'
import { OptionListType } from "@/types/optionDataType"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function OrderOption({
    item, 
    setOpenedOptionName,
    setIsOpenModal,
    selected,
    setSelectedLevel
} : {
    item: OptionListType, 
    setOpenedOptionName: React.Dispatch<React.SetStateAction<any>>, 
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    index: number,
    selected: boolean,
    setSelectedLevel: React.Dispatch<React.SetStateAction<any>>
}) {

    const params = useSearchParams();
    const [selectText, setSelectText] = useState<any>();


    // console.log("item ", item);
    // console.log("selected ", selected);
    const handleSetOpenedOptionName = () => {
        console.log("item ", item);
        
       if(selected) {
        setSelectedLevel(item.optionLevel);
        setOpenedOptionName(item.optionType);
        setIsOpenModal(true);
        
        } else alert('선택할 수 없는 옵션입니다.');

    }

    useEffect(() => {
        const option1name = params.get('option1');
        const option2name = params.get('option2');
        const option3name = params.get('option3');
        // console.log("option1name ", option1name);
        // console.log("option2name ", option2name);
        // console.log("option3name ", option3name);
        if(option1name && item.optionLevel === 1) {
            setSelectText(option1name);
        } else if(option2name && item.optionLevel === 2) {
            setSelectText(option2name);
        } else if(option3name && item.optionLevel === 3) {
            setSelectText(option3name);
        } else {
            setSelectText(item.optionType);
        }
    },[params, item])

  return (

    <div className={`mt-[8px] mx-[15px] h-[42px] mb-[13px] pl-[15px] tracking-[-0.07rem] text-[13px] text-left leading-[42px] border rounded-md ${selected ? 'cursor-pointer border-[#ff5452]' : 'cursor-not-allowed opacity-40 border-[#333333]'}`}
        onClick={handleSetOpenedOptionName}
    >
        선택하세요. &#40;{selectText}&#41;
    </div>
  )
}

export default OrderOption