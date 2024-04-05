import { getListType } from "@/app/(search)/search-list/page";

function SearchList({searchList}:{searchList:getListType[]}) {
   
  return (
    <> 
        <div className='bg-[#ffffff] p-[10px]' style={{ width: '100%', height: 'calc(100% - 50px)', position: 'absolute', bottom: '0', right: '0' }}>
            {
                searchList.map((item, index) => (
                    <div key={index} style={{ padding: '5px', paddingBottom: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d4d4d4', fontSize: '12px' }}>
                        <p>{item.productName}</p>
                        <span>↖</span>
                    </div>
                )).slice(0,10)
            }
        </div>
    </>
  );
}

export default SearchList;
