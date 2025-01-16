"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "How do I start a new tax return?",
    answer:
      "Navigate to the Tax Returns section and click on 'New Return'. Follow the step-by-step guide to input your information and complete your return.",
  },
  {
    question: "What documents do I need for filing?",
    answer:
      "Common documents include W-2s, 1099s, mortgage statements, and charitable donation receipts. The exact requirements depend on your tax situation.",
  },
  {
    question: "How long does it take to process a return?",
    answer:
      "Processing times vary, but electronic returns typically take 3-4 weeks. You can check the status of your return in the dashboard.",
  },
];

export default function SupportPage() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground mt-2">
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Phone className="h-6 w-6 mx-auto text-teal-600" />
              <h3 className="mt-4 font-semibold">Phone Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Available Mon-Fri, 9am-5pm
              </p>
              <Button variant="secondary" className="mt-4 w-full">
                Call Us
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Mail className="h-6 w-6 mx-auto text-teal-600" />
              <h3 className="mt-4 font-semibold">Email Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Response within 24 hours
              </p>
              <Button variant="secondary" className="mt-4 w-full">
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <MessageSquare className="h-6 w-6 mx-auto text-teal-600" />
              <h3 className="mt-4 font-semibold">Live Chat</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Instant support available
              </p>
              <Button variant="secondary" className="mt-4 w-full">
                Start Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
                {index < faqs.length - 1 && <hr className="my-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
