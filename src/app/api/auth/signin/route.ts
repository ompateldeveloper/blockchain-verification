import { NextResponse,type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/jwt'

const prisma = new PrismaClient()

export async function POST(request:NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find user by email
    const user = await prisma.adminUsers.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Generate JWT
    const token = signToken({ userId: user.id, isAdmin: true })

    // Set cookies
    const response = NextResponse.json({ message: 'Signin successful' })
    response.cookies.set('token', token, { httpOnly: true, secure: false })
    return response
  } catch (error) {
    console.error('Signin error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

