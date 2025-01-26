"use client";

import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Calculator,
  Users,
  Settings,
  HelpCircle,
  Menu,
  Box,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/ui/ToggleTheme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: FileText, label: "Tax Filing", href: "/tax-filing" },
  { icon: Calculator, label: "Tax Calculator", href: "/tax-calculator" },
  { icon: Users, label: "Clients", href: "/clients" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Box, label: "Integrations", href: "/integrations" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden bg-background text-foreground">
            {/* Sidebar */}
            <aside
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto bg-card transition-all duration-300 ease-in-out lg:relative lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2 mt-[60px]">
                  <div className="relative size-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 1v22M17 5h-4.5m0 0H8m4.5 0V3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 9h10M7 13h10M7 17h10"
                        strokeLinecap="round"
                      />
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-white">
                    Tax
                    <span className="text-teal-400">Hoa</span>
                  </h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
              <nav className="mt-[100px]">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium",
                      pathname === item.href
                        ? "bg-teal-900/20 text-teal-600"
                        : "text-muted-foreground hover:bg-teal-900/10 hover:text-teal-600"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* Top navbar */}
              <header className="flex h-16 items-center justify-between border-b bg-card px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    Notifications
                  </Button>
                  <Button variant="outline" size="sm">
                    Profile
                  </Button>
                </div>
                <ToggleTheme />
              </header>

              {/* Page content */}
              <main className="flex-1 overflow-y-auto bg-background p-4">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
