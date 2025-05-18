import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { z } from 'zod'

// Validation schema for registration data
const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate the request body
    const { name, email, password } = registerSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }
    
    // In a production app, we would hash the password here
    // const hashedPassword = await bcrypt.hash(password, 10)
    
    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password // In production: hashedPassword
      }
    })
    
    // Don't return the password in the response
    const { password: _, ...userWithoutPassword } = user
    
    return NextResponse.json(
      { user: userWithoutPassword, message: 'User registered successfully' },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      )
    }
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    )
  }
} 