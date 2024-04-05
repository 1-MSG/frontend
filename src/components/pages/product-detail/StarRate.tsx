'use client'
import { useState, useEffect } from "react";

function StarRate({product_star}:{product_star:number}) {

    const AVR_RATE = product_star * 20;
    const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
    const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
    const calcStarRates = () => {
        let tempStarRatesArr = [0, 0, 0, 0, 0];
        let starVerScore = (AVR_RATE * 110) / 100;
        let idx = 0;
        while (starVerScore > 22) {
            tempStarRatesArr[idx] = 22;
            idx += 1;
            starVerScore -= 22;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };
    useEffect(() => {
        setRatesResArr(calcStarRates)
    }, [calcStarRates])



    return (
        <div className="flex items-center w-[110px] ">
            {STAR_IDX_ARR.map((item, idx) => {
                return <span className='inline-flex' key={`${item}_${idx}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='20' viewBox='0 0 22 20' fill='none'>
                        <clipPath id={`${item}StarClip`}>
                            <rect width={`${ratesResArr[idx]}`} height='20' />
                        </clipPath>
                        <path
                            id={`${item}Star`}
                            d="M11 1.61804L12.9941 7.75532L13.1064 8.10081H13.4697H19.9228L14.7021 11.8939L14.4082 12.1074L14.5205 12.4529L16.5146 18.5902L11.2939 14.7971L11 14.5836L10.7061 14.7971L5.48542 18.5902L7.47954 12.4529L7.5918 12.1074L7.29791 11.8939L2.07722 8.10081H8.53035H8.89362L9.00587 7.75532L11 1.61804Z"
                            stroke="black" 
                        />
                        <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#000000'
                        />
                    </svg>
                </span>
            })
            }
        </div>
    )
}

export default StarRate;
