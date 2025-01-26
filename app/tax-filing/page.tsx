"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TaxFilingPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Tax Filling</h1>
        <p className="text-teal-200/70">
          Tax Year 2024 • Form 1040 and Schedules
        </p>
      </div>

      <Tabs defaultValue="income" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="income">Income Sources</TabsTrigger>
          <TabsTrigger value="deductions">Deductions</TabsTrigger>
          <TabsTrigger value="credits">Tax Credits</TabsTrigger>
          <TabsTrigger value="business">Business Income</TabsTrigger>
          <TabsTrigger value="review">Review & File</TabsTrigger>
        </TabsList>

        <TabsContent value="income" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employment Income (W-2)</CardTitle>
              <CardDescription>
                Report wages, salaries, and tips from all employers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm">Employer EIN</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Wages & Compensation</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Federal Tax Withheld</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investment Income</CardTitle>
              <CardDescription>
                Dividends, capital gains, and interest income
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Dividend Income (1099-DIV)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Qualified Dividends</span>
                      <span className="text-teal-500">Schedule B</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Ordinary Dividends</span>
                      <span className="text-teal-500">Schedule B</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Capital Gains (1099-B)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Short-term Gains/Losses</span>
                      <span className="text-teal-500">Schedule D</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Long-term Gains/Losses</span>
                      <span className="text-teal-500">Schedule D</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deductions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Itemized Deductions</CardTitle>
              <CardDescription>
                Schedule A deductions that may exceed standard deduction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Medical Expenses</h4>
                  <p className="text-sm text-zinc-400">
                    Deductible if exceeding 7.5% of AGI
                  </p>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">State & Local Taxes (SALT)</h4>
                  <p className="text-sm text-zinc-400">
                    Limited to $10,000 cap
                  </p>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Mortgage Interest</h4>
                  <p className="text-sm text-zinc-400">Form 1098 required</p>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Charitable Contributions</h4>
                  <p className="text-sm text-zinc-400">
                    Cash and non-cash donations
                  </p>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Tax Credits</CardTitle>
              <CardDescription>
                Dollar-for-dollar reduction in tax liability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-teal-700/10 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Child Tax Credit</h4>
                  <p className="text-sm text-zinc-400 mb-4">
                    Up to $2,000 per qualifying child
                  </p>
                  <button className="text-sm text-teal-500 hover:text-teal-400">
                    Check Eligibility →
                  </button>
                </div>
                <div className="p-4 rounded-lg bg-teal-700/10 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Earned Income Credit</h4>
                  <p className="text-sm text-zinc-400 mb-4">
                    Income-based refundable credit
                  </p>
                  <button className="text-sm text-teal-500 hover:text-teal-400">
                    Calculate EIC →
                  </button>
                </div>
                <div className="p-4 rounded-lg bg-teal-700/10 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Education Credits</h4>
                  <p className="text-sm text-zinc-400 mb-4">
                    American Opportunity & Lifetime Learning
                  </p>
                  <button className="text-sm text-teal-500 hover:text-teal-400">
                    View Forms →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Schedule C - Business Income</CardTitle>
              <CardDescription>
                Self-employment and business income reporting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">Business Name</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Business Code</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Income Categories</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm">Gross Receipts</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Returns & Allowances</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Other Income</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Final Review</CardTitle>
              <CardDescription>
                Verify information before submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="p-4 rounded-lg bg-zinc-800/50">
                    <h4 className="font-medium mb-2">Total Income</h4>
                    <p className="text-2xl font-semibold text-teal-500">
                      $2,730,000.00
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/50">
                    <h4 className="font-medium mb-2">Estimated Tax Due</h4>
                    <p className="text-2xl font-semibold text-rose-500">
                      $365,220.00
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/50">
                    <h4 className="font-medium mb-2">Total Deductions</h4>
                    <p className="text-2xl font-semibold text-teal-500">
                      $546,000.00
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/50">
                    <h4 className="font-medium mb-2">Total Credits</h4>
                    <p className="text-2xl font-semibold text-teal-500">
                      $136,500.00
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 rounded bg-teal-700 hover:bg-teal-600">
                    Submit Return
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
