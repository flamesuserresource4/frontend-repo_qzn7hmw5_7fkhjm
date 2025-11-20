import React from "react";

function BrandPack() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 mt-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-white font-bold text-lg">Name & Tagline</h3>
          <p className="text-white/70 mt-2">ppp — Play. Pause. Peace.</p>
          <ul className="mt-4 text-sm text-white/60 list-disc list-inside space-y-1">
            <li>Distraction‑free YouTube viewer</li>
            <li>Minimal, calm, and quick</li>
            <li>Privacy‑enhanced experience</li>
          </ul>
        </div>
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-white font-bold text-lg">Colors</h3>
          <div className="mt-4 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500"/>
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500"/>
            <div className="w-10 h-10 rounded-xl bg-purple-600"/>
            <div className="w-10 h-10 rounded-xl bg-slate-900 ring-1 ring-white/10"/>
          </div>
          <p className="text-xs text-white/60 mt-3">Primary gradient with deep slate background</p>
        </div>
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-white font-bold text-lg">Voice & Copy</h3>
          <p className="text-white/70 mt-2">Short, calm, matter‑of‑fact. No hype. Focus on clarity and comfort.</p>
          <div className="mt-3 text-sm text-white/70">
            <p className="font-semibold">About</p>
            <p className="text-white/60">ppp is a clean viewer for YouTube content. It keeps the focus on the video with a minimal UI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandPack;
