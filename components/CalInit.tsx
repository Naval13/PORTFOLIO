"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}
