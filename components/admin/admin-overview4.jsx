"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";


export function AdminOverview4() {
  const [forms, setForms] = useState([]);
  const [stats, setStats] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchForms();
  }, []);

  async function fetchForms() {
    const { data, error } = await supabase.from("form_submissions").select("*").order("created_at", { ascending: false });
    if (error) return console.error(error);

    setForms(data);

    const pending = data.filter(f => f.status === "pending").length;
    const inProgress = data.filter(f => f.status === "in-progress").length;
    const completed = data.filter(f => f.status === "completed").length;
    const totalProviderShare = data.reduce((a, b) => a + Number(b.provider_share || 0), 0);
    const totalOwnerCommission = data.reduce((a, b) => a + Number(b.owner_commission || 0), 0);
    const paidShare = data.filter(f => f.provider_paid === true).reduce((a, b) => a + Number(b.provider_share || 0), 0);
    const unpaidShare = data.filter(f => f.provider_paid === false && f.status === "completed").reduce((a, b) => a + Number(b.provider_share || 0), 0);

    setStats({ totalForms: data.length, pending, inProgress, completed, totalProviderShare, totalOwnerCommission, paidShare, unpaidShare });
  }

  async function markAsPaid(id, file) {
    try {
      setUploading(true);
      let fileUrl = null;

      if (file) {
        const fileName = `${id}-${Date.now()}.jpg`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("payment_screenshots")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: publicUrl } = supabase.storage
          .from("payment_screenshots")
          .getPublicUrl(fileName);

        fileUrl = publicUrl.publicUrl;
      }

      const { error } = await supabase
        .from("form_submissions")
        .update({ provider_paid: true, payment_screenshot_url: fileUrl , paid_on: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;
      fetchForms();
      alert("Marked as paid successfully!");
    } catch (err) {
      console.error(err);
      alert("Error marking as paid");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> */}

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardHeader><CardTitle>Total Forms</CardTitle></CardHeader><CardContent><p className="text-2xl">{stats.totalForms}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Pending</CardTitle></CardHeader><CardContent><p className="text-2xl">{stats.pending}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>In Progress</CardTitle></CardHeader><CardContent><p className="text-2xl">{stats.inProgress}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Completed</CardTitle></CardHeader><CardContent><p className="text-2xl">{stats.completed}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Total Provider Share</CardTitle></CardHeader><CardContent><p className="text-2xl">${Math.ceil(stats.totalProviderShare)}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Total Owner Commission</CardTitle></CardHeader><CardContent><p className="text-2xl">${Math.ceil(stats.totalOwnerCommission)}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Paid Provider Share</CardTitle></CardHeader><CardContent><p className="text-2xl text-green-600">${Math.ceil(stats.paidShare)}</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Unpaid Provider Share</CardTitle></CardHeader><CardContent><p className="text-2xl text-red-500">${Math.ceil(stats.unpaidShare)}</p></CardContent></Card>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Service</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Provider Share</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Paid</th>
              <th className="p-2 border">Payment Screenshot</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((f) => (
              <tr key={f.id} className="text-center">
                <td className="p-2 border">{f.service_name}</td>
                <td className="p-2 border">${Math.ceil(f.amount)}</td>
                <td className="p-2 border">${Math.ceil(f.provider_share)}</td>
                <td className="p-2 border">{f.status}</td>
                <td className="p-2 border">{f.provider_paid ? "✅" : "❌"}</td>
                <td className="p-2 border">
                  {f.payment_screenshot_url ? (
                    <a href={f.payment_screenshot_url} target="_blank" className="text-blue-600 underline">View</a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-2 border">
                  {!f.provider_paid && (
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        id={`file-${f.id}`}
                        className="text-xs"
                        onChange={(e) => markAsPaid(f.id, e.target.files[0])}
                        disabled={uploading}
                       
                      />
                     
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
