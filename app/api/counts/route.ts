import { NextResponse } from 'next/server'
 
export async function GET() {
    // need to add DB here for the count
    var count = 0
    return NextResponse.json({ data: count})
}