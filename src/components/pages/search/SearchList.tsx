'use client'

import React, { useState } from 'react';

function SearchList() {
    const items = [
        "사과",
        "사과잼",
        "사과식초",
        "사과나라",
        "사과하는 방법",
        "사과액상",
        "사과나라"
    ];

  return (
    <> 
        <div className='bg-[#ffffff] p-[10px]' style={{ width: '100%', height: 'calc(100% - 50px)', position: 'absolute', bottom: '0', right: '0' }}>
            {items.map((item, index) => (
                <div key={index} style={{ padding: '5px', paddingBottom: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d4d4d4', fontSize: '12px' }}>
                    <p>{item}</p>
                    <span>↖</span>
                </div>
            ))}
        </div>
    </>
  );
}

export default SearchList;
