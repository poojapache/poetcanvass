import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import argon2d from 'argon2';
import { RowDataPacket } from 'mysql2';

export async function POST(request: Request) {
  interface User extends RowDataPacket {
    id: number;
    email: string;
    username: string;
    password: string;
    full_name: string;
  }

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    const [rows] = await pool.query<User[]>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const user = rows[0];
      
          // Update the Zustand store with the user data
        //   useUserStore.getState().setUser(userData);

    // Create a user object without the password
    const userData = {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.full_name,
    };

    if (!(await argon2d.verify(user.password, password))) {
      console.error('Invalid password');
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful', userData }, { status: 200 });
  } catch (error) {
    console.error('Error while verifying user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
