"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";


export function AdminOverview3() {
  const [stats, setStats] = useState({
    totalForms: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
    totalProviderShare: 0,
    totalOwnerCommission: 0,
    paidShare: 0,
    unpaidShare: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    const { data, error } = await supabase.from("form_submissions").select("*");
    if (error) return console.error(error);

    const pending = data.filter(f => f.status === "pending").length;
    const inProgress = data.filter(f => f.status === "in-progress").length;
    const completed = data.filter(f => f.status === "completed").length;
    const totalProviderShare = data.reduce((a, b) => a + Number(b.provider_share || 0), 0);
    const totalOwnerCommission = data.reduce((a, b) => a + Number(b.owner_commission || 0), 0);
    const paidShare = data
      .filter(f => f.provider_paid === true)
      .reduce((a, b) => a + Number(b.provider_share || 0), 0);
    const unpaidShare = data
      .filter(f => f.provider_paid === false && f.status === "completed")
      .reduce((a, b) => a + Number(b.provider_share || 0), 0);

    setStats({
      totalForms: data.length,
      pending,
      inProgress,
      completed,
      totalProviderShare,
      totalOwnerCommission,
      paidShare,
      unpaidShare,
    });
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Header */}
      <div className="col-span-3 mb-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Summary Cards */}
      <Card><CardHeader><CardTitle>Total Forms</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">{stats.totalForms}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Pending</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">{stats.pending}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>In Progress</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">{stats.inProgress}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Completed</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">{stats.completed}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Total Provider Share</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">${stats.totalProviderShare.toFixed(2)}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Total Owner Commission</CardTitle></CardHeader>
      <CardContent><p className="text-2xl">${stats.totalOwnerCommission.toFixed(2)}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Paid Provider Share</CardTitle></CardHeader>
      <CardContent><p className="text-2xl text-green-600">${stats.paidShare.toFixed(2)}</p></CardContent></Card>

      <Card><CardHeader><CardTitle>Unpaid Provider Share</CardTitle></CardHeader>
      <CardContent><p className="text-2xl text-red-500">${stats.unpaidShare.toFixed(2)}</p></CardContent></Card>

      {/* Refresh */}
      <div className="col-span-3 mt-6 flex justify-center">
        <Button onClick={fetchStats}>Refresh Data</Button>
      </div>
    </div>
  );
}
