import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-500 via-cyan-500 to-emerald-500">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Create an Account
          </CardTitle>
          <CardDescription>
            Start managing your projects efficiently
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <Button className="w-full">
              Register
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <span className="cursor-pointer text-primary hover:underline">
                Login
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
