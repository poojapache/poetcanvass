import argon2 from "argon2";
import { NextResponse } from "next/server";

export async function hashPassword(password: string) 
{
    try{
        const hashedPassword = await argon2.hash(password);
        return hashedPassword;
    }catch(error)
    {
        console.error('Error hashing the password', error);
        return NextResponse.json({error:'Internal Server Error'},{status: 500});
    }
    
}

export async function verifyPassword(providedPassword :string, storedHash :string) {
    try {
      const match = await argon2.verify(storedHash, providedPassword);
      return match;
    } catch (error) 
    {
      console.error('Error verifying password:', error);
      return NextResponse.json({error:'Internal Server Error'},{status: 500});
    }
  }
  