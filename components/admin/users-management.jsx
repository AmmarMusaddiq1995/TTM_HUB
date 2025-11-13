"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";


export function UsersManagement() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from("user_data").select("*").order("created_at", { ascending: false });
    if (error) return console.error(error);

    setUsers(data);

  }

  

  return (
    <div className="p-6 space-y-6">
      {/* <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> */}

      {/* Stats Summary */}
     
<h1 className="text-2xl font-bold">Registered Users</h1>
      {/* Table */}
      <div className="overflow-x-auto mt-8">
        
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">User Name</th>
              <th className="p-2 border">User Email</th>
              <th className="p-2 border">User Created At</th>
              
              
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border text-center">{user.first_name} {user.last_name}</td>
                <td className="p-2 border text-center">{user.email}</td>
                <td className="p-2 border text-center">{new Date(user.created_at).toLocaleString()}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
