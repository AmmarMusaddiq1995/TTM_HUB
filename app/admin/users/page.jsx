import { redirect } from "next/navigation"
import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersManagement } from "@/components/admin/users-management"
import { AdminOverview4 } from "@/components/admin/admin-overview4"
import { supabase } from "@/lib/supabaseClient"

export default async function AdminUsersPage() {
 

 const { data: { user } } = await supabase.auth.getUser();


  // Check if user is admin
  // const { data: profile } = await supabase.from("user_data").select("role").eq("auth_user_id", user.id).single()

  // if (!profile || profile.role !== "admin") {
  //   redirect("/dashboard")
  // }

  return (
    <AdminLayout>
       <UsersManagement />
    </AdminLayout>
  )
}