'use client'

import { CategoryDataType } from "@/types/categoryDataType";
import React, { use, useEffect, useState } from 'react'
import CategoryItem from "./CategoryItem";
import Image from "next/image";

export default function ({ categoryList }: { categoryList: CategoryDataType[] }) {

    const [isOpen, setIsOpen] = React.useState<Boolean[]>(
        Array(categoryList.length).fill(false)
    );

    const [pushId, setPushId] = useState<number>(0);

    function handleClick(id:number) {
        setPushId(id);
    }

    // useEffect(() => {
    //     //console.log('pushId', pushId);
    // }, [pushId]);

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
                {categoryList.reduce((acc: CategoryDataType[][], item, index) => {
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
                        handleClick={handleClick}
                        pushId={pushId}
                    />
                ))}
            </div>
        </div>
    )
}


export const GroupNav = ({
    group, gx, handleOpen, isOpen, handleClick, pushId
}: {
    group: CategoryDataType[],
    gx: number,
    handleOpen: React.MouseEventHandler<HTMLLIElement>,
    isOpen: Boolean,
    handleClick: Function,
    pushId: number
}) => {

    return (
        <ul
            className={isOpen ? "mb-[15px] grid grid-cols-5 relative" : "mb-[15px] grid grid-cols-5 relative"}
        >
            {group.map((item) => (
                <NavItem key={item.id} item={item} handleOpen={handleOpen} gx={gx} handleClick={handleClick}/>
            ))}
            {
                isOpen && (
                    <div className='w-screen mt-[12px] py-[16px] px-[25px] left-0 top-[50px] bg-[#f7f7f7]'>
                        <CategoryItem categoryId={pushId}/>
                    </div>
                )
            }
        </ul>
    )
}

export const NavItem = ({
    item, handleOpen, gx, handleClick
}: {
    item: CategoryDataType,
    handleOpen: React.MouseEventHandler<HTMLLIElement>,
    gx: number,
    handleClick: Function
}) => {

    return (
        <li className="relative px-[5px]" onClick={handleOpen} role={gx.toString()}>
            <div onClick={() => handleClick(item.categoryId)}>
                <div className="w-[64px] h-[64px]">
                    <Image src={item.categoryImage} width={100} height={100} alt="" />
                </div>
                <p className="mt-[5px] text-[11px] font-normal tracking-[-0.07rem] text-[#444444] text-center">{item.categoryName}</p>
            </div>
        </li>
    )
}