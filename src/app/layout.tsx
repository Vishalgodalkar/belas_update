// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Bela's Creation",
//   description:
//     "NextJS Bela's Creation ad agency Website with TailwindCSS and Typescript",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="relative w-full flex items-center justify-center">
//             <Navbar />
//           </div>
//           {children}
//           <ThemeToggle />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bela's Creation",
  description:
    "NextJS Bela's Creation ad agency Website with TailwindCSS and Typescript",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-black"}>
        <AnimatedCursor
          innerSize={10}
          outerSize={35}
          color="255, 90, 0" // vibrant orange for ad-agency branding
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={2.8}
          showSystemCursor={false}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "exclusion", // creates a striking visual over light/dark
            backgroundColor: "rgba(255, 90, 0, 0.3)", // soft orange glow
          }}
          innerStyle={{
            backgroundColor: "rgb(255, 90, 0)",
            border: "2px solid white",
          }}
          clickables={[
            "a",
            "input",
            "textarea",
            "button",
            "select",
            ".link",
            '[role="button"]',
            '[data-cursor="true"]',
          ]}
        />
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
