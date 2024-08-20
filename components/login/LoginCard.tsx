"use client";

import { AdminLoginButton } from "@/components/login/LoginButton";
import { GreenLoader } from "@/components/loaders/Loader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import cryptohubLogo from "@/public/logo.svg"
import Image from "next/image";

export const LoginCard = () => {
  const { loading } = useAuth();
  const currentYear = new Date().getFullYear();
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <GreenLoader />
      </div>
    );
  } else {
    return (
      <>
        <Card className="w-96 flex flex-col items-center justify-center ">
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <Image
              src={cryptohubLogo}
              width={100}
              alt="CryptoHub Logo"
              priority
            />
            <CardTitle className="text-center">CryptoHub</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <AdminLoginButton />
          </CardContent>
          <CardFooter>
            <p className="m-auto text-center text-gray-500">
              © {currentYear} Made with Nextjs @Shreyash
             </p>
          </CardFooter>
        </Card>
      </>
    );
  }
};
