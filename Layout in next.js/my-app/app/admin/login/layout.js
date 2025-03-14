import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I am new layout bro don't get confused with previous glogal one ...Facebook - Connect with friends and the world around you",
  description: "Facebook is aa social uility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

export default function AdminLayout({ children }) {
  return (
<>
      <span>Admin navbar</span>
        {children}
</>
  );
}
