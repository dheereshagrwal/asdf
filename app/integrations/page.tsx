import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Check, ArrowRight, Database, CreditCard, Users, FileText, Server, Bell } from "lucide-react";
import Image from "next/image";

const integrations = [
  {
    name: "QuickBooks",
    description: "Connect with QuickBooks Online or Desktop to sync financial data automatically.",
    features: ["Automatic transaction sync", "Real-time balance updates", "Invoice tracking"],
    connected: true,
  },
  {
    name: "Xero",
    description: "Import your Xero accounting data for seamless tax preparation and filing.",
    features: ["Bank reconciliation", "Multi-currency support", "Custom mapping"],
    connected: false,
  },
  {
    name: "Sage",
    description: "Integrate with Sage 50cloud or Sage Intacct for comprehensive financial management.",
    features: ["Automated journal entries", "Document management", "Custom reporting"],
    connected: false,
  },
];

const apiExamples = [
  {
    title: "REST API",
    description: "Connect using our RESTful API endpoints with comprehensive documentation.",
    endpoint: "/api/v1",
    icon: Server,
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications for automated workflows.",
    endpoint: "/webhooks",
    icon: Bell,
  },
];

const additionalCategories = [
  {
    title: "ERP Systems",
    count: "15+ Integrations",
    description: "Enterprise resource planning software connections",
    icon: Database,
  },
  {
    title: "Payment Processors",
    count: "10+ Integrations",
    description: "Payment and billing system integrations",
    icon: CreditCard,
  },
  {
    title: "Payroll Systems",
    count: "8+ Integrations",
    description: "Employee payroll and HR software connections",
    icon: Users,
  },
  {
    title: "Document Management",
    count: "12+ Integrations",
    description: "Document storage and management solutions",
    icon: FileText,
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <div className="relative w-full">
        <div className="px-6 py-12 md:py-24 lg:py-32 relative z-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Connect Your Business Stack
            </h1>
            <p className="text-xl text-muted-foreground">
              Seamlessly integrate with your favorite tools and services
            </p>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-8 flex-wrap">
            {['Quickbooks', 'Xero', 'Sage', 'Freshbooks'].map((logo) => (
              <div 
                key={logo} 
                className="relative h-24 w-60 hover:grayscale-0 hover:opacity-70 transition-all"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg" />
                <Image
                  src={`/${logo.toLowerCase()}.svg`}
                  alt={`${logo} logo`}
                  fill
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className="p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground">
            Connect your existing accounting software and financial systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card key={integration.name}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {integration.name}
                  {integration.connected && (
                    <span className="text-sm bg-teal-500/10 text-teal-500 px-2 py-1 rounded-full flex items-center">
                      <Check className="w-4 h-4 mr-1" /> Connected
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{integration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="w-4 h-4 mr-2 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={integration.connected ? "outline" : "default"}
                    className="w-full"
                  >
                    {integration.connected ? "Manage Connection" : "Connect"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">API Integration</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {apiExamples.map((api) => (
              <Card key={api.title}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <api.icon className="w-6 h-6 text-teal-500" />
                    <div>
                      <CardTitle>{api.title}</CardTitle>
                      <CardDescription>{api.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <code className="block p-4 bg-muted rounded-md text-sm">
                    {api.endpoint}
                  </code>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight">More Integrations</h2>
            <Button variant="outline">
              Browse Integration Directory
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {additionalCategories.map((category) => (
              <Card key={category.title} className="hover:border-teal-500/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <category.icon className="w-6 h-6 text-teal-500" />
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <CardTitle className="mt-4">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg border bg-card/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Need a custom integration?</h3>
                <p className="text-sm text-muted-foreground">
                  Our API supports custom integrations with any financial system
                </p>
              </div>
              <Button>
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
