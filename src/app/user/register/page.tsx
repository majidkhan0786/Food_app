import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Components
import GoogleSignInButton from "@/app/_components/shared/GoogleSignInButton";
import loginImage from "../../../../public/assets/signup-image.jpg";
import RegisterForm from "./registerForm";
export const metadata: Metadata = {
  title: "Register with your account | MJFood store",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">
            Register in to your account
          </h1>
          <div className="space-y-5">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <RegisterForm />
            <Link
              href="/user/login"
              className="block text-center hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
