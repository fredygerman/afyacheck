import HomeHeader from "@/components/navigation/home/home-header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeHeader />
      <div className="grid bg-muted/40  p-8 min-h-screen w-full ">
        {children}
      </div>
    </>
  );
}
