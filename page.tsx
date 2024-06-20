import Image from "next/image";
import ThemeToggle from "@/components/custom/theme-toogle";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-white dark:bg-gray-800 bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-4">
            Welcome to your dashboard, {session?.user?.name}!
          </p>
        </div>
        <Button className="mt-4 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          <Link href="/api/auth/signout">Sign Out</Link>
        </Button>
        <ThemeToggle />
      </div>
    </>
  );
}
