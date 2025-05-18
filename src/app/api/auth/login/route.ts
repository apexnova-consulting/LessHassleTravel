import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { z } from 'zod'

// Validation schema for login data
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate the request body
    const { email, password } = loginSchema.parse(body)
    
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email }
    })
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }
    
    // In a production app, we would verify the password hash here
    // const isPasswordValid = await bcrypt.compare(password, user.password)
    
    // For this demo, we'll just compare directly
    const isPasswordValid = user.password === password
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }
    
    // Don't return the password in the response
    const { password: _, ...userWithoutPassword } = user
    
    // In a production app, we would generate a JWT token here
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' })
    
    // For this demo, we'll just return the user
    return NextResponse.json({
      user: userWithoutPassword,
      // token,
      message: 'Login successful'
    })
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