"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalScheduler() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2bb673" },
          dark: { "cal-brand": "#2bb673" },
        },
        hideEventTypeDetails: false,
        layout: "week_view",
      });
    })();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-auto">
      <Cal
        namespace="30min"
        calLink="ammar-musaddaq-c3y5oi/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "week_view" }}
      />
    </div>
  );
}
