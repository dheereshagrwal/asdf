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
import Image from "next/image";
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
                  <Image
                  src="/logo.svg"
                  alt="TaxHoa Logo"
                  width={150}
                  height={40}
                  priority
                  />
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
