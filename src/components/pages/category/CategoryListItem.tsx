'use client'

import { CategoryDataType } from "@/types/categoryDataType";
import React, { useEffect, useState } from 'react'
import CategoryItem from "./CategoryItem";
import Image from "next/image";

export default function ({ data }: { data: CategoryDataType[] }) {

    // const [cateid, setCateId] = useState(0);

    // const pushId = (id:number) => {
    //     useEffect(() => {
    //         setCateId(id);
    //     })
        
    // }

    const [isOpen, setIsOpen] = React.useState<Boolean[]>(
        Array(data.length).fill(false)
    );

    const handleOpen = (e: React.MouseEvent<HTMLLIElement>) => {
        console.log(e.currentTarget);
        const role = e.currentTarget.getAttribute('role');
        if (role) {
            const index = parseInt(role);
            if (!isOpen[index]) {
                setIsOpen((prev) => {
                    return prev.map((item, idx) => {
                        return index === idx ? !item : false;
                    })
                })
            }
        }
    };

    return (
        <div>
            <p className="text-[14px] font-bold text-[#222222] tracking-[-0.05rem]">전체 카테고리</p>

            <div className=" mt-[10px]">
                {data.reduce((acc: CategoryDataType[][], item, index) => {
                    const groupIndex = Math.floor(index / 5);
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    acc[groupIndex].push(item);
                    return acc;
                }, []).map((group, groupIndex) => (
                    <GroupNav
                        key={groupIndex}
                        group={group}
                        gx={groupIndex}
                        handleOpen={handleOpen}
                        isOpen={isOpen[groupIndex]}
                    />
                ))}
            </div>
        </div>
    )
}


export const GroupNav = ({
    group, gx, handleOpen, isOpen
}: {
    group: CategoryDataType[],
    gx: number,
    handleOpen: React.MouseEventHandler<HTMLLIElement>,
    isOpen: Boolean,
}) => {

    

    return (
        <ul
            className={isOpen ? "mb-[15px] grid grid-cols-5 relative" : "mb-[15px] grid grid-cols-5 relative"}
        >
            {group.map((item) => (
                <NavItem key={item.id} item={item} handleOpen={handleOpen} gx={gx}/>
            ))}
            {
                isOpen && (
                    <div className='w-screen mt-[12px] py-[16px] px-[25px] left-0 top-[50px] bg-[#f7f7f7]'>
                        <CategoryItem />
                    </div>
                )
            }
        </ul>
    )
}

export const NavItem = (
    { item, handleOpen, gx}
        :
        {
            item: CategoryDataType,
            handleOpen: React.MouseEventHandler<HTMLLIElement>,
            gx: number
        }) => {

    return (
        <li className="relative px-[5px]" onClick={handleOpen} role={gx.toString()}>
            <div className="w-[64px] h-[64px]">
                <Image src={item.category_image} width={100} height={100} alt=""/>
            </div>
            <p className="mt-[5px] text-[11px] font-normal tracking-[-0.07rem] text-center">{item.product_category_name}</p>
        </li>
    )
}