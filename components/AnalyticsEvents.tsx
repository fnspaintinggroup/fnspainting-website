"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
  }
}

function sendAnalyticsEvent(eventName: string, parameters: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (!target) {
        return;
      }

      const href = target.getAttribute("href") || "";
      const label = target.textContent?.replace(/\s+/g, " ").trim() || href;

      if (href.startsWith("tel:")) {
        sendAnalyticsEvent("phone_click", {
          link_url: href,
          link_text: label,
        });
        return;
      }

      if (href.includes("/contact#quote-name")) {
        sendAnalyticsEvent("quote_click", {
          link_url: href,
          link_text: label,
        });
      }
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target instanceof HTMLFormElement ? event.target : null;

      if (form?.id !== "quote-form") {
        return;
      }

      sendAnalyticsEvent("quote_form_submit", {
        form_id: form.id,
        form_name: "free_quote_request",
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}