import temaImg from '@/assets/image/etc/etc4.png'
import Image from "next/image";
import etc5 from '@/assets/image/etc/etc5.png'

export default function CategoryTheme() {
    return (
        <>
            <div style={{ padding: '10px' }}>
                <h2 style={{ fontSize: '13px', fontWeight: 'bold' }}>테마추천</h2>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <Image src={temaImg} alt='' style={{ width: '100%', height: 'auto' }}></Image>
            </div>
            <div style={{ background: '#555555', marginTop: '50px', width: '100%', padding: '40px', paddingBottom: '150px', display: 'flex', justifyContent: 'center' }}>
                <Image src={etc5} alt='' style={{ width: '200px', height: 'auto' }}></Image>
            </div>
        </>
    )
}