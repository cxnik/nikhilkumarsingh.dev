import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { cn } from "cn";

import "./globals.css";

import { SITE } from "@/constants/site";
import { AUTHOR } from "@/constants/author";

const inter = Inter_Tight({
    display: "swap",
    variable: "--font-inter-tight",
    subsets: ["latin"],
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: { template: `%s - ${SITE.title}`, default: `${AUTHOR.displayName} - ${AUTHOR.currentDesignation}` },
    description: SITE.description,
    keywords: SITE.keywords,
    authors: [{ name: AUTHOR.displayName, url: SITE.url }],
    creator: AUTHOR.displayName,
    openGraph: {
        siteName: SITE.title,
        url: "/",
        type: "profile",
        firstName: AUTHOR.firstName,
        lastName: AUTHOR.lastName,
        gender: AUTHOR.gender
    },
    twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#FFFFFF"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={cn(inter.variable, "h-full antialiased")}>
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
