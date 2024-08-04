import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from './../components/Sidebar';
import Image from 'next/image';
import { Github, Instagram, Linkedin, Mail, UserRoundPlus } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yashvanth",
  description: "Yashvanth Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sm:hidden flex">
          <div className="mobheader">
            <span style={{fontSize:28,color:'black',fontWeight:'bold'}}>Yashvanth</span>
            <Image src="/logo.jpg" height={2000} width={2000} className="collogo"/>
          </div>
        </div>
        <main>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
