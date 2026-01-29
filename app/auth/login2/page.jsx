"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthContext } from "@/context/AppContext";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    
    try {
      await login({ email, password });
      toast.success("Login successful!");
      router.push("/");
    } catch (err) {
      console.error("Unexpected error:", err);
      const message = err?.message || "Invalid email or password";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Image src="/logottm.png" alt="The Talent Management Hub" width={250} height={150} className=" object-contain" />
          </Link>
        </div>

        <Card className="hover:shadow-xl transition-all duration-300 shadow-md shadow-black">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back To Better Businesses</CardTitle>
            <CardDescription>
              Sign in to your account to manage your business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} autoComplete="off">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gray-300 shadow-md shadow-black"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-gray-300 shadow-md shadow-black"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#2bb673] hover:bg-[#2bb673]/80 shadow-md shadow-black hover:scale-105 cursor-pointer px-8 py-4"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
              <div className="mt-6 text-center text-sm">
                <Link
                  href="#"
                  className="text-[#2bb673] hover:text-[#2bb673]/80 underline underline-offset-4"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/sign-up2"
                  className="text-[#2bb673] hover:text-[#2bb673]/80 underline underline-offset-4 font-medium"
                >
                  Create one now
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
