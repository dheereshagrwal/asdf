"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus, MoreHorizontal } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Robert Chen, MD",
    email: "robert.chen@healthcare.net",
    status: "Active",
    lastFiled: "2024-02-15",
    type: "Self-Employed Professional",
  },
  {
    id: 2,
    name: "Sarah Williams & Associates LLC",
    email: "swilliams@lawfirm.com",
    status: "Active",
    lastFiled: "2024-02-01",
    type: "S-Corporation",
  },
  {
    id: 3,
    name: "Green Valley Restaurant Group",
    email: "accounting@gvrestaurants.com",
    status: "Pending",
    lastFiled: "2024-12-20",
    type: "C-Corporation",
  },
  {
    id: 4,
    name: "Michael & Lisa Thompson",
    email: "thompson.family@gmail.com",
    status: "Active",
    lastFiled: "2024-01-28",
    type: "Joint Filing",
  },
  {
    id: 5,
    name: "Riverside Properties LLC",
    email: "admin@riversideproperties.com",
    status: "Active",
    lastFiled: "2024-02-10",
    type: "Partnership",
  },
  {
    id: 6,
    name: "Emily Rodriguez, DDS",
    email: "rodriguez@familydental.com",
    status: "Pending Review",
    lastFiled: "2024-01-15",
    type: "Professional Corporation",
  },
  {
    id: 7,
    name: "Tech Innovations Start-up Inc.",
    email: "finance@techinnovate.io",
    status: "New Client",
    lastFiled: "N/A",
    type: "Start-up C-Corp",
  },
  {
    id: 8,
    name: "David Kim's Auto Service",
    email: "david@kimsauto.com",
    status: "Active",
    lastFiled: "2024-02-05",
    type: "Sole Proprietorship",
  },
  {
    id: 9,
    name: "First Street Non-Profit Org",
    email: "director@firststreet.org",
    status: "Active",
    lastFiled: "2024-01-20",
    type: "501(c)(3)",
  },
];

export default function ClientsPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground mt-2">
            Manage your client relationships and tax filings
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Client
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Client List</CardTitle>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search clients..."
                  className="pl-10 pr-4 py-2 rounded bg-card border border-border"
                />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <div className="grid grid-cols-12 gap-4 p-4 bg-muted/50 text-sm font-medium">
              <div className="col-span-2">Name</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Last Filed</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            {clients.map((client) => (
              <div
                key={client.id}
                className="grid grid-cols-12 gap-4 p-4 border-t items-center text-sm"
              >
                <div className="col-span-2 font-medium truncate">
                  {client.name}
                </div>
                <div className="col-span-3 text-muted-foreground truncate">
                  {client.email}
                </div>
                <div className="col-span-2 truncate">{client.type}</div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === "Active"
                        ? "bg-teal-900/20 text-teal-600"
                        : "bg-yellow-900/20 text-yellow-600"
                    }`}
                  >
                    {client.status}
                  </span>
                </div>
                <div className="col-span-2 truncate">{client.lastFiled}</div>
                <div className="col-span-1 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
