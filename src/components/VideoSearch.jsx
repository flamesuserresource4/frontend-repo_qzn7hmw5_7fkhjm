import React, { useState } from "react";

const YT_EMBED_BASE = "https://www.youtube.com/embed/";

function extractVideoId(input) {
  if (!input) return "";
  // If full URL, try to parse v param or youtu.be/ID
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1);
    }
    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }
    // /shorts/ID or /live/ID
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length >= 2 && (parts[0] === "shorts" || parts[0] === "live")) {
      return parts[1];
    }
  } catch (e) {
    // Not a URL, maybe a raw id or search query
    if (/^[a-zA-Z0-9_-]{8,15}$/.test(input)) return input;
  }
  return input; // fallback: let embed try
}

function VideoSearch() {
  const [query, setQuery] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = extractVideoId(query.trim());
    setVideoId(id);
  };

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Paste a YouTube link or ID…"
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900/60 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-fuchsia-500 transition"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold shadow-lg shadow-fuchsia-600/30 hover:brightness-110 transition"
          >
            Play
          </button>
        </form>
        <p className="text-xs text-white/50 mt-3">
          Uses the official YouTube embed. This app focuses on a clean, distraction‑free UI and does not circumvent ads.
        </p>
      </div>

      {videoId && (
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <iframe
            className="w-full h-full"
            src={`${YT_EMBED_BASE}${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&color=white`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}
    </section>
  );
}

export default VideoSearch;
