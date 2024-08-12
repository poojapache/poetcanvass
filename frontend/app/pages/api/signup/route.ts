import { NextResponse } from "next/server";
import pool from '../../../lib/db';
import { hashPassword } from '../../../lib/auth'; 

export async function POST(request: Request)
{
    const {email, username, fullName, password} = await request.json();

    if (!email || !username || !password || !fullName) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
      }

    const hashedPassword = await hashPassword(password);

    try{
        
        await pool.query(
            'INSERT INTO users (email, username, password, full_name) VALUES (?, ?, ?, ?)',
            [email, username, hashedPassword, fullName]
        );

        return NextResponse.json({message:'User registered successfully'},{status: 200});
    }catch(error)
    {
        console.error('Error inserting into database', error);
        return NextResponse.json({error:'Internal Server Error'},{status: 500});
    }
}