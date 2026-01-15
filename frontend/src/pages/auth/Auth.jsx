import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm">
        {isSignup ? <SignUp /> : <Login />}

        <div className="mt-6 flex justify-center text-sm text-muted-foreground">
          <span>
            {isSignup
              ? "Already have an account?"
              : "Don’t have an account?"}
          </span>
          <Button
            variant="link"
            className="ml-1 p-0 h-auto"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
