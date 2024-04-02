
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function middleware() {
    const session = await getServerSession(options);
    if (!session) {
        return NextResponse.redirect('http://localhost:3000/login');
    }
}

export const config = {
    matcher: ['/join/easy:path*', '/join/integrated:path*', '/mypage:path*'],
};