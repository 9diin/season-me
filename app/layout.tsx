import "./globals.css"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarInset, SidebarProvider } from "@/components/ui"
import { AppHeader, AppSidebar } from "@/components/common"
import { cn } from "@/lib/utils"

const presentationFont = localFont({
    src: [
        { path: "../public/fonts/Freesentation-1Thin.woff2", weight: "100", style: "normal" },
        { path: "../public/fonts/Freesentation-2ExtraLight.woff2", weight: "200", style: "normal" },
        { path: "../public/fonts/Freesentation-3Light.woff2", weight: "300", style: "normal" },
        { path: "../public/fonts/Freesentation-4Regular.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/Freesentation-5Medium.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/Freesentation-6SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../public/fonts/Freesentation-7Bold.woff2", weight: "700", style: "normal" },
        { path: "../public/fonts/Freesentation-8ExtraBold.woff2", weight: "800", style: "normal" },
        { path: "../public/fonts/Freesentation-9Black.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-presentation",
    display: "swap",
    fallback: ["Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
    adjustFontFallback: false,
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning className={cn("antialiased", presentationFont.variable)}>
            <body>
                <ThemeProvider>
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarInset className="flex-1 items-center">
                            <AppHeader />
                            <main className="h-full w-full max-w-6xl py-4 pt-0">{children}</main>
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
