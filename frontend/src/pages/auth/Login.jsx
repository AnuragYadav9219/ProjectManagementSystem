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

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Project Management System
          </CardTitle>
          <CardDescription>
            Login to manage your projects
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
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

            <Button className="w-full">
              Login
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <span className="cursor-pointer text-primary hover:underline">
                Register
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
