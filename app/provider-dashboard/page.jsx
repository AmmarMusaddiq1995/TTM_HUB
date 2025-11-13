"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProviderLayout } from "@/components/provider/provider-layout";
import { ProviderOverview } from "@/components/provider/provider-overview";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuthContext } from "@/context/AppContext";

export default function ProviderPage() {
  const router = useRouter();
  const { user, loading, isProvider } = useAuthContext(); // ensure `isProvider` is added in your AppContext

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push("/auth/login2");
      return;
    }
    if (!isProvider) {
      router.push("/dashboard");
      return;
    }
  }, [loading, user, isProvider, router]);

  if (loading) return <LoadingSpinner />;
  if (!user || !isProvider) return null;

  return (
    <ProviderLayout>
      <ProviderOverview />
    </ProviderLayout>
  );
}
