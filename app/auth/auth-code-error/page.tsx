import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Authentication Error</CardTitle>
          <CardDescription>
            There was a problem with your authentication link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            This link may have expired or already been used. Please try logging in again or request a new confirmation email.
          </p>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
