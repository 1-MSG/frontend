'use server'
export async function getCategoryMidData (categoryId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryId}`)
    if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data.data;
    }
}