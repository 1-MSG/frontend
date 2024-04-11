'use client'

import { CategoryDataType } from "@/types/categoryDataType";
import React, { useEffect, useState } from 'react'
import CategoryItem from "./CategoryItem";
import Image from "next/image";

export default function CategoryListItem({ categoryList }: { categoryList: CategoryDataType[] }) {

    const [isOpen, setIsOpen] = React.useState<Boolean[]>(
        categoryList && Array(categoryList.length).fill(false)
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
            <p className="px-[10px] text-[14px] font-bold text-[#222222] tracking-[-0.05rem]">전체 카테고리</p>

            <div className=" mt-[10px]">
                {categoryList && categoryList.reduce((acc: CategoryDataType[][], item, index) => {
                    const groupIndex = Math.floor(index / 5);
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    acc[groupIndex].push(item);
                    return (acc);
                }, []).map((group, idx) => (
                    <GroupNav
                        key={categoryList[idx].categoryId}
                        group={group}
                        gx={idx}
                        handleOpen={handleOpen}
                        isOpen={isOpen[idx]}
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
        <>
        <ul
            className={ "w-full px-[10px] mb-[15px] grid grid-cols-5 relative"}
        >
            {group.map((item) => (
                <NavItem key={item.categoryId} item={item} handleOpen={handleOpen} gx={gx} handleClick={handleClick}/>
            ))}
            
        </ul>
        {
            isOpen && (
                <div className='w-full relative mt-[12px] py-[16px] px-[25px] left-0 top-0 bg-[#f7f7f7]'>
                    <CategoryItem categoryId={pushId}/>
                </div>
            )
        }
        </>
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