import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

import { ENV } from "./env.js";

const aj = arcjet({
  key: ENV.ARCJET_KEY, 
  rules: [
    // Shield protects against common web attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
    // Block all automated clients — bots inflate AI costs
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE",
      ], // Block all bots. See https://arcjet.com/bot-list
    }),
    slidingWindow({
        mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
        max: 100, // Max 100 requests
        interval: 60, // Per 1 minute
    }),
  ],
});

export default aj;