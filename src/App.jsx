import React from "react";
import BrandHeader from "./components/BrandHeader";
import VideoSearch from "./components/VideoSearch";
import BrandPack from "./components/BrandPack";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-40 opacity-40 blur-3xl bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/10 to-blue-500/10"/>
      </div>

      <BrandHeader />

      <main className="relative z-10 space-y-8 md:space-y-10 pb-16">
        <VideoSearch />
        <BrandPack />
      </main>

      <footer className="relative z-10 py-10 text-center text-white/50 text-xs">
        Built for a calm, ad‑free UI experience. Uses official YouTube embeds.
      </footer>
    </div>
  );
}

export default App;
