"use client";

import { NextPage } from "next";
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { apps } from "./manifest";
import { Button } from "@/components/ui/button";

const appText = new Map<string, string>([
  ["all", "All Apps"],
  ["connected", "Connected"],
  ["notConnected", "Not Connected"],
]);

const Page: NextPage = () => {
  const [sort, setSort] = useState("ascending");
  const [appType, setAppType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = useMemo(() => {
    return apps
      .sort((a, b) =>
        sort === "ascending"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
      .filter((app) =>
        appType === "connected"
          ? app.connected
          : appType === "notConnected"
          ? !app.connected
          : true
      )
      .filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [sort, appType, searchTerm]);

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">App Integrations</h2>
        <div className="hidden items-center space-x-2 md:flex"></div>
      </div>
      <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredApps.map((app) => (
          <li key={app.name} className="rounded-lg border p-4 hover:shadow-md">
            <div className="mb-8 flex items-center justify-between">
              <div
                className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
              >
                {app.logo}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleButtonClick(app.href)}
                className={`${
                  app.connected
                    ? "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
                    : ""
                }`}
              >
                {app.connected ? "Connected" : "Connect"}
              </Button>
            </div>
            <div>
              <h2 className="mb-1 font-semibold">{app.name}</h2>
              <p className="line-clamp-2 text-gray-500">{app.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
