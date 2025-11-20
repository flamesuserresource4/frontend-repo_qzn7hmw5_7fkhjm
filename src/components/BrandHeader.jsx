import React from "react";

function BrandHeader() {
  return (
    <header className="relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-600/30 ring-1 ring-white/10 flex items-center justify-center">
              <span className="text-white font-black text-lg">p</span>
            </div>
            <div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">ppp</h1>
              <p className="text-xs text-white/60 -mt-0.5">Distraction‑free YouTube viewer</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-white/60">
            <span className="px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">Ad‑free UI</span>
            <span className="px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">Privacy‑enhanced</span>
            <span className="px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">No sign‑in</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BrandHeader;
