"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";

export default function TaxCalculatorPage() {
  const [selectedYear] = useState("2023");
  const [income] = useState({
    wages: 85000,
    selfEmployment: 25000,
    investments: {
      dividends: 3000,
      capitalGains: 8000,
      interest: 1000,
    },
    retirement: 12000,
    rental: 18000,
  });

  const [deductions] = useState({
    standard: 13850,
    itemized: {
      mortgage: 8000,
      charitable: 2500,
      stateTax: 10000,
      medical: 4000,
    },
  });

  const [credits] = useState({
    childTax: 2000,
    education: 1500,
    retirement: 500,
  });

  const totalIncome = Object.values(income).reduce(
    (acc, val) =>
      typeof val === "number"
        ? acc + val
        : acc +
          Object.values(val as { [key: string]: number }).reduce(
            (a, b) => a + b,
            0
          ),
    0
  );

  const itemizedTotal = Object.values(deductions.itemized).reduce(
    (a, b) => a + b,
    0
  );
  const effectiveDeduction = Math.max(deductions.standard, itemizedTotal);
  const totalCredits = Object.values(credits).reduce((a, b) => a + b, 0);

  const taxableIncome = totalIncome - effectiveDeduction;

  const calculateTax = (income: number): number => {
    if (income <= 11000) return income * 0.1;
    if (income <= 44725) return 1100 + (income - 11000) * 0.12;
    if (income <= 95375) return 5147 + (income - 44725) * 0.22;
    if (income <= 182100) return 16290 + (income - 95375) * 0.24;
    if (income <= 231250) return 37104 + (income - 182100) * 0.32;
    if (income <= 578125) return 52832 + (income - 231250) * 0.35;
    return 174238.25 + (income - 578125) * 0.37;
  };

  const [calculatedTax] = useState(() => calculateTax(taxableIncome));

  const [taxBracket] = useState(() => {
    if (taxableIncome <= 11000) return 10;
    if (taxableIncome <= 44725) return 12;
    if (taxableIncome <= 95375) return 22;
    if (taxableIncome <= 182100) return 24;
    if (taxableIncome <= 231250) return 32;
    if (taxableIncome <= 578125) return 35;
    return 37;
  });

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tax Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive tax estimation with detailed breakdown
        </p>
      </div>

      <Tabs defaultValue="income" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="income">Income Sources</TabsTrigger>
          <TabsTrigger value="deductions">Deductions</TabsTrigger>
          <TabsTrigger value="credits">Tax Credits</TabsTrigger>
          <TabsTrigger value="summary">Final Calculation</TabsTrigger>
        </TabsList>

        <TabsContent value="income" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employment & Business Income</CardTitle>
              <CardDescription>
                Primary sources of earned income
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium">
                    W-2 Wages & Salary
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={`$${income.wages.toLocaleString()}`}
                      className="w-full p-2 rounded bg-card border border-border"
                      readOnly
                    />
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium">
                    Self-Employment Income (Schedule C)
                  </label>
                  <input
                    type="text"
                    value={`$${income.selfEmployment.toLocaleString()}`}
                    className="w-full p-2 rounded bg-card border border-border"
                    readOnly
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investment & Passive Income</CardTitle>
              <CardDescription>
                Capital gains, dividends, and other investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Investment Income</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Qualified Dividends</span>
                        <span>
                          ${income.investments.dividends.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Capital Gains (Long-term)</span>
                        <span>
                          ${income.investments.capitalGains.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Interest Income</span>
                        <span>
                          ${income.investments.interest.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Other Income</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Retirement Distributions</span>
                        <span>${income.retirement.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rental Income (Schedule E)</span>
                        <span>${income.rental.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deductions" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Standard Deduction</CardTitle>
                <CardDescription>
                  Base deduction for tax year {selectedYear}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Standard Deduction Amount</span>
                    <span className="font-semibold">
                      ${deductions.standard.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>* Based on Single filing status</p>
                    <p>* Automatically compared with itemized deductions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Itemized Deductions</CardTitle>
                <CardDescription>Schedule A deductions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Mortgage Interest</span>
                    <span>
                      ${deductions.itemized.mortgage.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Charitable Contributions</span>
                    <span>
                      ${deductions.itemized.charitable.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>State & Local Taxes (SALT)</span>
                    <span>
                      ${deductions.itemized.stateTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Medical Expenses</span>
                    <span>${deductions.itemized.medical.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-medium">
                      <span>Total Itemized</span>
                      <span>${itemizedTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="credits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Tax Credits</CardTitle>
              <CardDescription>
                Direct reduction in tax liability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 rounded-lg bg-teal-900/20 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Child Tax Credit</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    $2,000 per qualifying child
                  </p>
                  <div className="text-xl font-semibold text-teal-600">
                    ${credits.childTax.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-teal-900/20 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Education Credits</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    American Opportunity Credit
                  </p>
                  <div className="text-xl font-semibold text-teal-600">
                    ${credits.education.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-teal-900/20 border border-teal-700/20">
                  <h4 className="font-medium mb-2">Retirement Savings</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Saver`&#39;`s Credit
                  </p>
                  <div className="text-xl font-semibold text-teal-600">
                    ${credits.retirement.toLocaleString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tax Calculation Summary</CardTitle>
                <CardDescription>Final tax liability breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Marginal Tax Bracket</span>
                    <span className="font-semibold">{taxBracket}%</span>
                  </div>
                  <Progress value={taxBracket} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Gross Income</span>
                    <span className="font-semibold">
                      ${totalIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adjustments & Deductions</span>
                    <span className="font-semibold text-teal-600">
                      -${effectiveDeduction.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxable Income</span>
                    <span className="font-semibold">
                      ${(totalIncome - effectiveDeduction).toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final Tax Liability</CardTitle>
                <CardDescription>After credits and adjustments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-card border">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Calculated Tax</span>
                      <span>${calculatedTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-teal-600">
                      <span>Total Credits</span>
                      <span>-${totalCredits.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t mt-2">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Final Tax Due</span>
                        <span className="text-teal-600">
                          ${(calculatedTax - totalCredits).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p>* Estimated tax liability based on current rates</p>
                  <p>* Consider quarterly estimated tax payments if needed</p>
                  <p>* Consult a tax professional for specific advice</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
