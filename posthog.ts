import posthog from "posthog-js";

const POSTHOG_KEY = "phc_m4uqaQfNrnhf6LYbKqbJSeJYyVT5ihXYs3Ff4EGsTfiP";
const POSTHOG_HOST = "https://eu.i.posthog.com";

let initialized = false;

export function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false, // we capture manually on route change
    capture_pageleave: true,
  });
  initialized = true;
}

export function capturePageview(url: string) {
  if (typeof window === "undefined" || !initialized) return;
  posthog.capture("$pageview", { $current_url: url });
}

export { posthog };
