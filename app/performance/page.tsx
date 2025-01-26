import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Shield, RefreshCw, Lock, Server } from "lucide-react"; // Added Lock, Server icons
import Image from "next/image";

export default function PerformancePage() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Performance</h1>
        <p className="text-teal-200/70">Built for reliability</p>
        <p className="text-lg">
          Process thousands of transactions with 99.9% uptime and real-time data synchronization across all your systems.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 text-teal-500" />
            <CardTitle>High Throughput</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Handle thousands of transactions simultaneously without compromising performance.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-teal-500" />
            <CardTitle>99.9% Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ensure your services are always available with our robust infrastructure.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center space-x-2">
            <RefreshCw className="w-6 h-6 text-teal-500" />
            <CardTitle>Real-time Synchronization</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Keep your data consistent across all platforms with instant updates.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Removed Bank Grade Protection Card */}
      </div>

      {/* New Bank Grade Protection Section */}
      <div className="mt-12 p-6 bg-zinc-900 rounded-md shadow-md flex flex-col items-start space-y-6"> {/* Changed to flex-col and updated background to zinc-700 */}
        <Lock className="w-12 h-12 text-teal-500" />
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Bank Grade Protection</h2>
          <div className="flex flex-col space-y-4"> {/* Changed to flex-col for vertical layout */}
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-teal-500" />
              <span>Advanced Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Server className="w-6 h-6 text-teal-500" />
              <span>Secure Servers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-6 h-6 text-teal-500" />
              <span>24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}