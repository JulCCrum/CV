"use client";

import { useEffect } from "react";
import Script from "next/script";

const cssContent = `
:root {
  --bg: #0a0a0a;
  --bg-grid: #141414;
  --text: #f0f0f0;
  --text-dim: #666;
  --text-muted: #444;
  --accent: #00e5ff;
  --grid-line: rgba(255,255,255,0.04);
  --grid-size: 16px;
  --mono: 'Space Mono', monospace;
  --display: 'Syne', sans-serif;
}
*,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }
html { overflow-x:hidden; }
body {
  background:var(--bg); color:var(--text);
  font-family:var(--mono); cursor:none;
  overflow-x:hidden; -webkit-font-smoothing:antialiased;
}
::selection { background:var(--accent); color:var(--bg); }
a { color:inherit; text-decoration:none; cursor:none; }

.cursor {
  position:fixed; top:0; left:0; width:20px; height:20px;
  pointer-events:none; z-index:10000; mix-blend-mode:difference;
}
.cursor::before,.cursor::after { content:''; position:absolute; background:#fff; }
.cursor::before { width:1px; height:20px; left:50%; transform:translateX(-50%); }
.cursor::after { width:20px; height:1px; top:50%; transform:translateY(-50%); }

.nav {
  position:fixed; top:0; left:0; width:100%;
  z-index:500; padding:24px 40px;
  display:flex; justify-content:space-between; align-items:flex-start;
  pointer-events:none; transition:color 0.6s;
}
.nav>* { pointer-events:auto; }
.nav-left, .nav-center, .nav-right {
  transition: transform 0.4s ease-out;
  will-change: transform;
}
.nav.convex .nav-left {
  transform-origin: right top;
  transform: perspective(300px) skew(-8deg, -8deg) rotateY(-8deg);
}
.nav.convex .nav-center {
  transform: perspective(300px) rotateX(3deg);
}
.nav.convex .nav-right {
  transform-origin: left top;
  transform: perspective(300px) skew(8deg, 8deg) rotateY(8deg);
}
.nav-left { display:flex; flex-direction:column; gap:6px; }
.nav-link {
  font-size:12px; letter-spacing:0.02em;
  display:flex; align-items:center; gap:10px;
  opacity:1; transition:opacity 0.3s;
}
.nav-link:hover { opacity:1; }
.nav-link .dot {
  width:6px; height:6px; border-radius:50%;
  background:currentColor; opacity:0.7; transition:all 0.3s;
}
.nav-link:hover .dot { opacity:1; background:var(--accent); }
.nav-center { font-family:var(--display); font-weight:800; font-size:16px; letter-spacing:0.05em; }
.nav-right { display:flex; align-items:center; gap:20px; font-size:12px; }
.nav-time { font-variant-numeric:tabular-nums; opacity:0.8; }
.nav.light { color:#333; }
.nav.dark { color:#fff; }

.section-monitor {
  position:relative; z-index:10;
  height:100vh; overflow:hidden;
  transition:background 0.6s ease;
}
.section-monitor.day {
  background:linear-gradient(180deg,#c8c8c8 0%,#a0a0a0 35%,#888 55%,#a0a0a0 100%);
}
.section-monitor.night {
  background:linear-gradient(180deg,#1a1a1a 0%,#0d0d0d 35%,#080808 55%,#111 100%);
}
.section-monitor.inside {
  background: transparent !important;
  transition: none !important;
}
.room-container {
  position:absolute; inset:0;
  display:flex; align-items:center; justify-content:center;
  will-change:transform; transform-origin:center center;
}
.monitor {
  position:relative; width:320px; height:270px;
  background:linear-gradient(145deg,#e8e4df,#ccc8c3);
  border-radius:22px 22px 10px 10px;
  box-shadow:0 20px 60px rgba(0,0,0,0.4);
  padding:22px 26px 55px; z-index:2;
}
.night .monitor { box-shadow:0 20px 80px rgba(0,0,0,0.7); }
.monitor-screen {
  width:100%; height:100%; background:var(--bg); border-radius:6px;
  overflow:hidden; position:relative;
  box-shadow:inset 0 0 30px rgba(0,0,0,0.5);
}
.screen-content {
  padding:14px; font-size:7px; line-height:1.7;
  color:var(--text); height:100%; position:relative; z-index:1;
}
.screen-content .mini-nav {
  display:flex; justify-content:space-between;
  font-size:5px; color:var(--text-dim); margin-bottom:12px;
}
.screen-content .mini-headline {
  font-family:var(--display); font-size:10px; font-weight:700; line-height:1.3; margin-bottom:6px;
}
.screen-content .mini-steps {
  position:absolute; right:14px; top:40px; font-size:5px; color:var(--text-dim);
}
.screen-content .mini-steps div { margin-bottom:10px; }
.screen-content .mini-steps div:nth-child(2) { margin-left:20px; }
.screen-content .mini-steps div:nth-child(3) { margin-left:40px; }
.screen-content .mini-accent { width:30px; height:4px; background:var(--accent); border-radius:1px; margin:8px 0; }
.screen-content .mini-body { font-size:5px; color:var(--text-dim); line-height:2; margin-top:8px; }
.screen-crt {
  position:absolute; inset:0;
  background:repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(0,229,255,0.015) 1px,rgba(0,229,255,0.015) 2px);
  pointer-events:none; z-index:2;
}
.screen-grid {
  position:absolute; inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
  background-size:16px 16px; pointer-events:none; z-index:1;
}
.monitor-bottom-hw {
  display:flex; align-items:center; justify-content:space-between;
  padding:0 26px; margin-top:-32px; position:relative; z-index:3;
}
.knobs { display:flex; gap:7px; }
.knob {
  width:14px; height:22px; background:linear-gradient(145deg,#d4d0cb,#b8b4af);
  border-radius:3px; box-shadow:0 2px 4px rgba(0,0,0,0.2);
}
.speaker {
  width:48px; height:28px;
  background:repeating-linear-gradient(90deg,#c8c4bf 0px,#c8c4bf 2px,#b8b4af 2px,#b8b4af 4px);
  border-radius:3px;
}
.power-dot { width:7px; height:7px; border-radius:50%; background:#333; margin:-14px 0 0 26px; }
.shelf {
  width:480px; height:14px; background:linear-gradient(180deg,#999,#777);
  border-radius:0 0 3px 3px; box-shadow:0 4px 20px rgba(0,0,0,0.3); margin:-1px auto 0;
}
.night .shelf { background:linear-gradient(180deg,#333,#222); }
.room-light {
  position:absolute; width:280px; height:280px; border-radius:50%;
  pointer-events:none; z-index:0; transition:left 0.12s ease-out,top 0.12s ease-out;
}
.day .room-light { background:radial-gradient(circle,rgba(255,255,255,0.3) 0%,transparent 70%); }
.night .room-light { background:radial-gradient(circle,rgba(0,229,255,0.08) 0%,transparent 70%); }
.toggle-wrap {
  position:absolute; bottom:100px; left:50%; transform:translateX(-50%);
  z-index:20; display:flex; align-items:center; gap:12px; cursor:none;
}
.toggle-circle { width:28px; height:28px; border-radius:50%; border:1px solid; transition:border-color 0.5s; }
.day .toggle-circle { border-color:rgba(0,0,0,0.3); }
.night .toggle-circle { border-color:rgba(255,255,255,0.2); }
.toggle-label { font-size:11px; transition:color 0.5s; }
.day .toggle-label { color:rgba(0,0,0,0.6); }
.night .toggle-label { color:rgba(255,255,255,0.5); }
.monitor-bar {
  position:absolute; bottom:0; left:0; width:100%; padding:20px 40px;
  display:flex; justify-content:space-between; align-items:flex-end;
  z-index:20; transition:color 0.5s;
}
.day .monitor-bar { color:rgba(0,0,0,0.5); }
.night .monitor-bar { color:rgba(255,255,255,0.4); }
.monitor-bar .tagline { font-size:10px; line-height:1.6; max-width:280px; }
.monitor-bar .tagline span { opacity:0.6; }
.monitor-bar .scroll-cue { font-size:10px; display:flex; align-items:center; gap:6px; }
.monitor-bar .scroll-cue .sq { width:8px; height:8px; background:currentColor; }

.terminal-layer {
  position:absolute; inset:0;
  z-index:30;
  padding:220px 100px 80px;
  display:flex; flex-direction:column; justify-content:center;
  opacity:0;
  pointer-events:none;
  transition: opacity 0.6s ease;
}
.terminal-layer.visible {
  opacity:1;
  pointer-events:auto;
}
.terminal-top { font-size:11px; color:var(--accent); margin-bottom:30px; }
.terminal-top::before { content:'\\25CF '; }
.hero-headline {
  font-family:var(--display);
  font-size:clamp(28px,4vw,56px);
  font-weight:800; line-height:1.15;
  max-width:65vw; margin-bottom:60px;
}
.cursor-blink {
  display:inline-block; width:3px; height:0.8em;
  background:var(--text); margin-left:4px;
  vertical-align:text-bottom; animation:blink 1s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.process-steps {
  position:absolute; right:60px; top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; gap:40px;
}
.process-step { font-size:12px; letter-spacing:0.05em; }
.process-step:nth-child(1) { margin-left:0; }
.process-step:nth-child(2) { margin-left:60px; }
.process-step:nth-child(3) { margin-left:120px; }
.process-step:nth-child(4) { margin-left:180px; }
.step-num { color:var(--text-muted); margin-right:8px; }
.mission-text {
  max-width:580px; font-size:12px; line-height:1.9;
  color:var(--text-dim); margin-top:auto;
}
.mission-text .indent { padding-left:60px; }
.terminal-bottom {
  display:flex; justify-content:space-between; align-items:flex-end;
  margin-top:60px; font-size:10px; color:var(--text-muted);
}

#staticCanvas {
  position:fixed; inset:0; width:100vw; height:100vh;
  z-index:250; pointer-events:none; opacity:0;
}

.crt-frame {
  position:fixed; inset:0; z-index:150;
  pointer-events:none; opacity:0; transition:opacity 0.6s;
}
.crt-frame.active { opacity:1; }
.crt-frame .vignette {
  position:absolute; inset:0;
  box-shadow:
    inset 0 0 80px 30px rgba(0,0,0,0.55),
    inset 0 0 200px 60px rgba(0,0,0,0.25),
    inset 80px 80px 120px -40px rgba(0,0,0,0.5),
    inset -80px 80px 120px -40px rgba(0,0,0,0.5),
    inset 80px -80px 120px -40px rgba(0,0,0,0.5),
    inset -80px -80px 120px -40px rgba(0,0,0,0.5);
  border-radius:14px;
}
.crt-frame .reflection {
  position:absolute; top:-5%; left:-5%; width:110%; height:40%;
  background:linear-gradient(180deg,rgba(255,255,255,0.015) 0%,transparent 100%);
  border-radius:40% 40% 0 0;
}
.crt-frame .scanlines {
  position:absolute; inset:0;
  background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.025) 2px,rgba(0,0,0,0.025) 4px);
}
.crt-frame .bezel {
  position:absolute; inset:4px; border:1.5px solid rgba(255,255,255,0.035); border-radius:12px;
}
.crt-frame .corner { position:absolute; font-size:6px; color:var(--text-muted); opacity:0.3; }
.crt-frame .corner.tl { top:14px; left:14px; }
.crt-frame .corner.tr { top:14px; right:14px; }
.crt-frame .corner.bl { bottom:14px; left:14px; }
.crt-frame .corner.br { bottom:14px; right:14px; }

.grid-bg {
  position:fixed; inset:0;
  background-image:
    linear-gradient(var(--grid-line) 1px,transparent 1px),
    linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);
  background-size:var(--grid-size) var(--grid-size);
  z-index:15; pointer-events:none; opacity:0; transition:opacity 0.8s;
}
.grid-bg.visible { opacity:1; }
#snakeCanvas {
  position:fixed; inset:0; width:100vw; height:100vh;
  z-index:16; pointer-events:none; opacity:0; transition:opacity 0.8s;
}
#snakeCanvas.visible { opacity:1; }

.inner-world { position:relative; z-index:5; }

.section-projects { position:relative; z-index:5; padding:100px 60px 60px; }
.projects-header { margin-bottom:20px; opacity:0; }
.projects-title {
  font-family:var(--display); font-size:clamp(32px,4vw,56px);
  font-weight:800; font-style:italic;
  background:linear-gradient(90deg,var(--text),var(--text-dim));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; display:inline-block;
  padding:10px 20px; border:1px solid var(--grid-line);
}
.projects-desc { font-size:11px; line-height:1.8; color:var(--text-dim); margin:16px 0 40px; opacity:0; }
.gallery-wrapper { overflow:hidden; width:100%; }
.gallery-track {
  display:flex; gap:24px; padding:20px 0; width:max-content;
  animation: marquee 30s linear infinite;
}
.gallery-wrapper:hover .gallery-track {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.project-card {
  width:280px; height:400px; background:var(--bg-grid);
  border:1px solid var(--grid-line); border-radius:4px;
  overflow:hidden; position:relative; flex-shrink:0;
  transition:transform 0.4s ease;
}
.project-card:hover { transform:scale(1.02) rotateY(-2deg); }
.project-card-image {
  width:100%; height:65%; display:flex; align-items:center; justify-content:center;
  position:relative; overflow:hidden;
}
.project-card-image::after {
  content:''; position:absolute; inset:0;
  background:repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(0,229,255,0.02) 2px,rgba(0,229,255,0.02) 4px);
}
.project-icon { font-size:36px; opacity:0.6; }
.project-card-info { padding:20px; }
.project-card-title { font-family:var(--display); font-size:18px; font-weight:700; margin-bottom:8px; }
.project-card-subtitle { font-size:10px; color:var(--text-dim); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px; }
.project-card-desc { font-size:10px; line-height:1.6; color:var(--text-muted); }
.project-card-tag {
  position:absolute; top:16px; right:16px; font-size:10px; padding:4px 10px;
  border:1px solid var(--accent); color:var(--accent); border-radius:2px; z-index:2;
}

.section-cta {
  position:relative; z-index:5; min-height:100vh;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  padding:80px 40px; overflow:hidden;
}
.cta-circle {
  position:absolute; width:500px; height:500px;
  border:1px solid rgba(255,255,255,0.06); border-radius:50%;
  top:50%; left:50%; transform:translate(-50%,-50%);
}
.cta-circle-dot {
  position:absolute; width:4px; height:4px; background:var(--text-muted);
  border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%);
}
.cta-headline {
  font-family:var(--display); font-size:clamp(40px,6vw,88px);
  font-weight:800; text-align:center; line-height:1.05;
  position:relative; z-index:2; opacity:0;
}
.cta-headline .word { display:inline-block; transition:transform 0.5s ease; }
.cta-sub-box {
  margin-top:60px; padding:30px 40px; border:1px solid var(--grid-line);
  max-width:520px; text-align:center; position:relative; z-index:2; opacity:0;
}
.cta-sub-box p { font-size:11px; line-height:1.8; color:var(--text-dim); }
.cta-button {
  display:inline-block; margin-top:40px; padding:14px 40px;
  border:1px solid var(--text); font-family:var(--mono); font-size:12px;
  color:var(--text); transition:all 0.3s; position:relative; z-index:2; opacity:0;
}
.cta-button:hover { background:var(--text); color:var(--bg); }
.side-label {
  position:absolute; left:20px; top:50%;
  transform:translateY(-50%) rotate(-90deg);
  font-size:9px; letter-spacing:0.15em; color:var(--text-muted);
  white-space:nowrap; padding:8px 12px; border:1px solid var(--grid-line);
}

.footer {
  position:relative; z-index:5; padding:30px 60px;
  display:flex; justify-content:space-between; align-items:center;
  font-size:10px; color:var(--text-muted); border-top:1px solid var(--grid-line);
}
.footer-links { display:flex; gap:24px; }
.footer-links a:hover { color:var(--text); }
.footer-center { font-family:var(--display); font-weight:800; font-size:12px; color:var(--text-dim); }

@media(max-width:768px) {
  .process-steps { position:relative; right:auto; top:auto; transform:none; margin-top:40px; gap:24px; }
  .process-step:nth-child(n) { margin-left:0; }
  .nav { padding:16px 20px; }
  .terminal-layer { padding:160px 24px 40px; }
  .section-projects { padding:60px 20px; }
  .project-card { width:240px; height:360px; }
  .cta-circle { width:300px; height:300px; }
  .monitor { width:260px; height:220px; }
  .shelf { width:380px; }
}
`;

export default function WorkPage() {
  useEffect(() => {
    // Wait for GSAP to load
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        clearInterval(initInterval);
        initAll();
      }
    }, 100);

    function initAll() {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      /* ========== CURSOR ========== */
      const cursor = document.getElementById("cursor");
      let mX = 0, mY = 0, cX = 0, cY = 0;
      const onMouseMove = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY; };
      document.addEventListener("mousemove", onMouseMove);
      let cursorRaf: number;
      (function ac() {
        cX += (mX - cX) * 0.15;
        cY += (mY - cY) * 0.15;
        if (cursor) cursor.style.transform = `translate(${cX - 10}px,${cY - 10}px)`;
        cursorRaf = requestAnimationFrame(ac);
      })();

      /* ========== CLOCK ========== */
      function tick() {
        const n = new Date();
        let h = n.getHours();
        const m = String(n.getMinutes()).padStart(2, "0");
        const ap = h >= 12 ? "pm" : "am";
        h = h % 12 || 12;
        const el = document.getElementById("navTime");
        if (el) el.textContent = `${String(h).padStart(2, "0")} : ${m} ${ap}`;
      }
      tick();
      const clockInterval = setInterval(tick, 1000);

      /* ========== ROOM LIGHT ========== */
      const monSec = document.getElementById("monitorSection");
      const roomLight = document.getElementById("roomLight");
      const onMonMouseMove = (e: MouseEvent) => {
        if (!monSec || !roomLight) return;
        const r = monSec.getBoundingClientRect();
        roomLight.style.left = (e.clientX - r.left - 140) + "px";
        roomLight.style.top = (e.clientY - r.top - 140) + "px";
      };
      monSec?.addEventListener("mousemove", onMonMouseMove);

      /* ========== DAY/NIGHT ========== */
      let isNight = false;
      const navEl = document.getElementById("nav");
      let insideScreen = false;
      const toggleWrap = document.getElementById("toggleWrap");
      const onToggle = () => {
        if (!monSec || !navEl) return;
        isNight = !isNight;
        monSec.classList.toggle("day", !isNight);
        monSec.classList.toggle("night", isNight);
        if (!insideScreen) {
          navEl.classList.toggle("light", !isNight);
          navEl.classList.toggle("dark", isNight);
        }
      };
      toggleWrap?.addEventListener("click", onToggle);

      /* ========== TYPEWRITER ========== */
      const baseText = "Building at the intersection of skill and conviction across ";
      const endings = ["finance", "automation", "faith"];
      let twPhase = "base";
      let twCharIdx = 0, twEndIdx = 0;
      const typedEl = document.getElementById("typedText");
      let twTimeout: ReturnType<typeof setTimeout>;

      function tw() {
        if (!typedEl) return;
        let delay = 80;
        if (twPhase === "base") {
          twCharIdx++;
          typedEl.textContent = baseText.substring(0, twCharIdx);
          delay = 50 + Math.random() * 40;
          if (twCharIdx >= baseText.length) { twPhase = "ending"; twCharIdx = 0; }
        } else if (twPhase === "ending") {
          const word = endings[twEndIdx];
          twCharIdx++;
          typedEl.textContent = baseText + word.substring(0, twCharIdx);
          delay = 100 + Math.random() * 50;
          if (twCharIdx >= word.length) { twPhase = "pause"; delay = 2200; }
        } else if (twPhase === "pause") {
          twPhase = "deleting";
          delay = 80;
        } else if (twPhase === "deleting") {
          const word = endings[twEndIdx];
          twCharIdx--;
          typedEl.textContent = baseText + word.substring(0, twCharIdx);
          delay = 45;
          if (twCharIdx <= 0) {
            twEndIdx = (twEndIdx + 1) % endings.length;
            twPhase = "ending";
            twCharIdx = 0;
            delay = 350;
          }
        }
        twTimeout = setTimeout(tw, delay);
      }
      tw();

      /* ========== TV STATIC ========== */
      const staticCanvas = document.getElementById("staticCanvas") as HTMLCanvasElement | null;
      const sCtx = staticCanvas?.getContext("2d");
      let staticOpacity = 0, staticActive = false;
      function resizeStatic() {
        if (!staticCanvas) return;
        staticCanvas.width = innerWidth;
        staticCanvas.height = innerHeight;
      }
      resizeStatic();
      const onResizeStatic = () => resizeStatic();
      window.addEventListener("resize", onResizeStatic);

      let staticRaf: number;
      function drawStatic() {
        if (!staticCanvas || !sCtx) { staticRaf = requestAnimationFrame(drawStatic); return; }
        if (!staticActive && staticOpacity <= 0) {
          sCtx.clearRect(0, 0, staticCanvas.width, staticCanvas.height);
          staticRaf = requestAnimationFrame(drawStatic);
          return;
        }
        const w = staticCanvas.width, h = staticCanvas.height;
        const imgData = sCtx.createImageData(w, h);
        const data = imgData.data;
        const tearY = Math.random() * h, tearH = 2 + Math.random() * 8;
        const bandY = Math.random() * h, bandH = 20 + Math.random() * 80;
        for (let i = 0; i < data.length; i += 4) {
          const pi = i / 4, x = pi % w, y = (pi / w) | 0;
          let noise = Math.random() * 255;
          if (y > tearY && y < tearY + tearH) noise = 180 + Math.random() * 75;
          if (y > bandY && y < bandY + bandH) {
            noise *= (1 - Math.sin(((y - bandY) / bandH) * Math.PI) * 0.85);
          }
          let r = noise * (0.7 + Math.random() * 0.3);
          let g = noise * (0.7 + Math.random() * 0.3);
          let b = noise * (0.8 + Math.random() * 0.2);
          if (Math.random() < 0.001) { r = 0; g = 150 + Math.random() * 105; b = 200 + Math.random() * 55; }
          data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = 255;
        }
        sCtx.putImageData(imgData, 0, 0);
        if (staticOpacity > 0.4) {
          sCtx.save();
          sCtx.globalAlpha = 0.3 + Math.random() * 0.15;
          sCtx.font = `bold ${(w * 0.06) | 0}px Syne,sans-serif`;
          sCtx.fillStyle = "#fff";
          sCtx.textAlign = "center";
          sCtx.textBaseline = "middle";
          const jx = (Math.random() - 0.5) * 6, jy = (Math.random() - 0.5) * 4;
          sCtx.fillText("NO SIGNAL", w / 2 + jx, h / 2 + jy);
          sCtx.globalAlpha = 0.06;
          sCtx.fillText("NO SIGNAL", w / 2 + jx, h / 2 + jy + h * 0.35);
          sCtx.restore();
          sCtx.fillStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.1})`;
          sCtx.fillRect(0, (Date.now() * 0.3) % h, w, 2);
        }
        staticCanvas.style.opacity = String(staticOpacity);
        staticRaf = requestAnimationFrame(drawStatic);
      }
      drawStatic();

      /* ========== SNAKE ========== */
      const snakeCanvas = document.getElementById("snakeCanvas") as HTMLCanvasElement | null;
      const ctx = snakeCanvas?.getContext("2d");
      const gs = 16, snakeMaxLen = 40;
      let snake: { x: number; y: number }[] = [];
      let targetGX = 0, targetGY = 0, snakeOn = false, snakeInitialized = false;
      let snakeTickInterval: ReturnType<typeof setInterval> | null = null;
      let lastMouseMoveTime = 0, mouseIsStopped = false;
      let collapseInterval: ReturnType<typeof setInterval> | null = null;
      const SNAKE_TICK_MS = 35;

      function rcSnake() {
        if (!snakeCanvas) return;
        snakeCanvas.width = innerWidth;
        snakeCanvas.height = innerHeight;
      }
      rcSnake();
      const onResizeSnake = () => rcSnake();
      window.addEventListener("resize", onResizeSnake);

      const onSnakeMouseMove = (e: MouseEvent) => {
        targetGX = Math.floor(e.clientX / gs);
        targetGY = Math.floor(e.clientY / gs);
        lastMouseMoveTime = Date.now();
        mouseIsStopped = false;
        if (collapseInterval) { clearInterval(collapseInterval); collapseInterval = null; }
        if (snakeOn && !snakeInitialized) {
          snake = [];
          for (let i = 0; i < snakeMaxLen; i++) snake.push({ x: targetGX, y: targetGY });
          snakeInitialized = true;
        }
      };
      document.addEventListener("mousemove", onSnakeMouseMove);

      function startSnakeTick() {
        if (snakeTickInterval) return;
        snakeTickInterval = setInterval(snakeTick, SNAKE_TICK_MS);
      }
      function stopSnakeTick() {
        if (snakeTickInterval) { clearInterval(snakeTickInterval); snakeTickInterval = null; }
        if (collapseInterval) { clearInterval(collapseInterval); collapseInterval = null; }
      }

      function snakeTick() {
        if (!snakeOn || snake.length === 0) return;
        const head = snake[0];
        const dx = targetGX - head.x, dy = targetGY - head.y;
        if (Date.now() - lastMouseMoveTime > 300 && !mouseIsStopped) {
          mouseIsStopped = true;
          if (!collapseInterval) {
            collapseInterval = setInterval(() => {
              if (snake.length > 1) snake.pop();
              else { if (collapseInterval) clearInterval(collapseInterval); collapseInterval = null; }
            }, 35);
          }
        }
        if (dx !== 0 || dy !== 0) {
          let nx = head.x, ny = head.y;
          if (Math.abs(dx) >= Math.abs(dy)) nx += Math.sign(dx); else ny += Math.sign(dy);
          snake.unshift({ x: nx, y: ny });
          if (snake.length > snakeMaxLen) snake.pop();
        }
      }

      let snakeRaf: number;
      (function drawSnake() {
        if (!ctx || !snakeCanvas) { snakeRaf = requestAnimationFrame(drawSnake); return; }
        ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
        if (snake.length === 0) { snakeRaf = requestAnimationFrame(drawSnake); return; }
        const len = snake.length;
        for (let i = len - 1; i >= 0; i--) {
          const seg = snake[i];
          const progress = 1 - (i / len);
          const px = seg.x * gs, py = seg.y * gs, size = gs - 1;
          if (progress < 0.3) {
            const tailAlpha = progress / 0.3 * 0.15;
            ctx.fillStyle = `rgba(0,229,255,${tailAlpha})`;
            ctx.fillRect(px, py, size, size);
          } else if (progress < 0.7) {
            const midAlpha = 0.15 + (progress - 0.3) / 0.4 * 0.35;
            ctx.fillStyle = `rgba(0,229,255,${midAlpha})`;
            ctx.fillRect(px, py, size, size);
          } else {
            const headAlpha = 0.5 + (progress - 0.7) / 0.3 * 0.5;
            ctx.shadowColor = "rgba(0,229,255,0.6)";
            ctx.shadowBlur = 6 + (progress - 0.7) / 0.3 * 10;
            ctx.fillStyle = `rgba(0,229,255,${headAlpha})`;
            ctx.fillRect(px, py, size, size);
            ctx.shadowBlur = 0;
          }
          if (i === 0) {
            ctx.shadowColor = "rgba(0,229,255,0.9)";
            ctx.shadowBlur = 16;
            ctx.fillStyle = "rgba(0,229,255,1)";
            ctx.fillRect(px + 1, py + 1, size - 2, size - 2);
            ctx.shadowBlur = 0;
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.fillRect(px + 3, py + 3, size - 6, size - 6);
          }
        }
        snakeRaf = requestAnimationFrame(drawSnake);
      })();

      /* ========== CONVEX NAV ========== */
      function setConvex(on: boolean) {
        if (!navEl) return;
        if (on) navEl.classList.add("convex");
        else navEl.classList.remove("convex");
      }

      /* ========== GSAP SCROLL ANIMATIONS ========== */
      const gridBg = document.getElementById("gridBg");
      const crtFrame = document.getElementById("crtFrame");
      const roomContainer = document.getElementById("roomContainer");
      const monitorBar = document.getElementById("monitorBar");
      const terminalLayer = document.getElementById("terminalLayer");

      function getZoomScale() {
        const screen = document.getElementById("monitorScreen");
        if (!screen) return 5;
        const rect = screen.getBoundingClientRect();
        return Math.max(innerWidth / rect.width, innerHeight / rect.height) * 1.15;
      }

      let lastPhase = -1, flashFired = false;

      const st = ScrollTrigger.create({
        trigger: "#monitorSection",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.6,
        onUpdate: (self: any) => {
          const p = self.progress;
          const targetScale = getZoomScale();

          if (p < 0.45) {
            const zp = p / 0.45;
            if (roomContainer) { roomContainer.style.transform = `scale(${1 + zp * (targetScale - 1)})`; roomContainer.style.opacity = "1"; }
            if (roomLight) roomLight.style.opacity = "1";
            if (toggleWrap) toggleWrap.style.opacity = String(Math.max(0, 1 - zp * 3));
            if (monitorBar) monitorBar.style.opacity = String(Math.max(0, 1 - zp * 3));
            staticOpacity = 0; staticActive = false;
            if (staticCanvas) staticCanvas.style.opacity = "0";
            crtFrame?.classList.remove("active");
            gridBg?.classList.remove("visible");
            snakeCanvas?.classList.remove("visible");
            terminalLayer?.classList.remove("visible");
            monSec?.classList.remove("inside");
            snakeOn = false; snakeInitialized = false; snake = []; stopSnakeTick();
            setConvex(false);
            insideScreen = false;
            if (!isNight && navEl) { navEl.classList.add("light"); navEl.classList.remove("dark"); }
            lastPhase = 1; flashFired = false;
          } else if (p < 0.72) {
            const fp = (p - 0.45) / 0.27;
            if (roomContainer) { roomContainer.style.opacity = String(Math.max(0, 1 - fp * 3)); roomContainer.style.transform = `scale(${targetScale})`; }
            if (roomLight) roomLight.style.opacity = String(Math.max(0, 1 - fp * 3));
            if (toggleWrap) toggleWrap.style.opacity = "0";
            if (monitorBar) monitorBar.style.opacity = "0";
            staticActive = true;
            staticOpacity = fp < 0.5 ? fp * 2 : Math.max(0, (1 - fp) * 2);
            crtFrame?.classList.remove("active");
            terminalLayer?.classList.remove("visible");
            monSec?.classList.remove("inside");
            setConvex(false);
            if (!flashFired && staticCanvas) {
              flashFired = true;
              staticCanvas.style.filter = "brightness(3)";
              setTimeout(() => { if (staticCanvas) staticCanvas.style.filter = ""; }, 100);
            }
            lastPhase = 2;
          } else {
            const rp = (p - 0.72) / 0.28;
            if (roomContainer) roomContainer.style.opacity = "0";
            if (roomLight) roomLight.style.opacity = "0";
            staticOpacity = Math.max(0, 0.4 - rp * 2);
            if (rp > 0.3) { staticActive = false; staticOpacity = 0; }
            monSec?.classList.add("inside");
            crtFrame?.classList.add("active");
            gridBg?.classList.add("visible");
            snakeCanvas?.classList.add("visible");
            snakeOn = true; startSnakeTick();
            terminalLayer?.classList.add("visible");
            insideScreen = true;
            if (navEl) { navEl.classList.remove("light"); navEl.classList.add("dark"); }
            setConvex(true);
            if (toggleWrap) toggleWrap.style.opacity = "0";
            if (monitorBar) monitorBar.style.opacity = "0";
            lastPhase = 3;
          }
        },
        onLeaveBack: () => {
          if (roomContainer) { roomContainer.style.transform = "scale(1)"; roomContainer.style.opacity = "1"; }
          if (roomLight) roomLight.style.opacity = "1";
          if (toggleWrap) toggleWrap.style.opacity = "1";
          if (monitorBar) monitorBar.style.opacity = "1";
          staticOpacity = 0; staticActive = false;
          if (staticCanvas) staticCanvas.style.opacity = "0";
          crtFrame?.classList.remove("active");
          gridBg?.classList.remove("visible");
          snakeCanvas?.classList.remove("visible");
          terminalLayer?.classList.remove("visible");
          monSec?.classList.remove("inside");
          snakeOn = false; snakeInitialized = false; snake = []; stopSnakeTick();
          setConvex(false);
          insideScreen = false; lastPhase = -1; flashFired = false;
          if (!isNight && navEl) { navEl.classList.add("light"); navEl.classList.remove("dark"); }
        },
      });

      /* Projects + CTA animations */
      gsap.to("#projectsHeader", { opacity: 1, duration: 0.8, scrollTrigger: { trigger: "#projectsSection", start: "top 70%" } });
      gsap.to("#projectsDesc", { opacity: 1, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: "#projectsSection", start: "top 70%" } });
      gsap.to("#ctaHeadline", { opacity: 1, duration: 1, scrollTrigger: { trigger: "#ctaSection", start: "top 60%" } });
      gsap.to("#ctaSubBox", { opacity: 1, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: "#ctaSection", start: "top 50%" } });
      gsap.to("#ctaButton", { opacity: 1, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: "#ctaSection", start: "top 50%" } });
      gsap.to(".cta-headline .word", {
        scrollTrigger: { trigger: "#ctaSection", start: "top top", end: "bottom top", scrub: 1 },
        y: (i: number) => (i - 1.5) * 50,
        rotation: (i: number) => (i - 1.5) * 10,
        stagger: 0.05,
      });

      /* ========== CLEANUP ========== */
      return () => {
        cancelAnimationFrame(cursorRaf);
        cancelAnimationFrame(staticRaf);
        cancelAnimationFrame(snakeRaf);
        clearInterval(clockInterval);
        clearTimeout(twTimeout);
        stopSnakeTick();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mousemove", onSnakeMouseMove);
        monSec?.removeEventListener("mousemove", onMonMouseMove);
        toggleWrap?.removeEventListener("click", onToggle);
        window.removeEventListener("resize", onResizeStatic);
        window.removeEventListener("resize", onResizeSnake);
        st.kill();
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      };
    }

    return () => {
      clearInterval(initInterval);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssContent }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />

      <div className="cursor" id="cursor" />

      <div className="crt-frame" id="crtFrame">
        <div className="vignette" />
        <div className="reflection" />
        <div className="scanlines" />
        <div className="bezel" />
        <div className="corner tl">&#9679;</div>
        <div className="corner tr">&#9679;</div>
        <div className="corner bl">&#9679;</div>
        <div className="corner br">&#9679;</div>
      </div>

      <canvas id="staticCanvas" />
      <div className="grid-bg" id="gridBg" />
      <canvas id="snakeCanvas" />

      <nav className="nav light" id="nav">
        <div className="nav-left">
          <a href="#" className="nav-link"><span className="dot" /> About</a>
          <a href="#" className="nav-link"><span className="dot" /> Projects</a>
          <a href="#" className="nav-link"><span className="dot" /> Contact</a>
        </div>
        <div className="nav-center">JA</div>
        <div className="nav-right">
          <span className="nav-time" id="navTime">00 : 00 pm</span>
        </div>
      </nav>

      <section className="section-monitor day" id="monitorSection">
        <div className="room-light" id="roomLight" />

        <div className="room-container" id="roomContainer">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="monitor" id="theMonitor">
              <div className="monitor-screen" id="monitorScreen">
                <div className="screen-grid" />
                <div className="screen-crt" />
                <div className="screen-content">
                  <div className="mini-nav">
                    <span>About &nbsp; Projects &nbsp; Contact</span>
                    <span>JA</span>
                  </div>
                  <div className="mini-headline">
                    Building at the<br />intersection of skill<br />and conviction across<br />finance
                    <span className="cursor-blink" style={{ width: "2px", height: "0.7em" }} />
                  </div>
                  <div className="mini-steps">
                    <div>[1] Discover</div>
                    <div>[2] Build</div>
                    <div>[3] Automate</div>
                  </div>
                  <div className="mini-accent" />
                  <div className="mini-body">
                    Jackpot Automations creates<br />opportunities for the builders<br />and self-starters.
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-bottom-hw">
              <div className="knobs">
                <div className="knob" />
                <div className="knob" />
                <div className="knob" />
              </div>
              <div className="speaker" />
            </div>
            <div className="power-dot" />
            <div className="shelf" />
          </div>
        </div>

        <div className="terminal-layer" id="terminalLayer">
          <div className="terminal-top">Submit Your Vision</div>
          <h1 className="hero-headline">
            <span id="typedText" />
            <span className="cursor-blink" />
          </h1>
          <div className="process-steps">
            <div className="process-step"><span className="step-num">[1]</span> Discover</div>
            <div className="process-step"><span className="step-num">[2]</span> Build</div>
            <div className="process-step"><span className="step-num">[3]</span> Automate</div>
            <div className="process-step"><span className="step-num">[4]</span> Launch</div>
          </div>
          <div className="mission-text">
            Jackpot Automations creates opportunities for the builders, the dreamers,
            <span className="indent">and the self-starters who want to make money their own way.</span>
            <br />
            By building software, AI systems, and automations that solve real problems,
            <span className="indent">we turn skills into income and ideas into products.</span>
          </div>
          <div className="terminal-bottom">
            <span>1 place</span>
            <span>
              to turn your skills into<br />&nbsp;&nbsp;&nbsp;income and freedom
            </span>
            <span>Scroll Down</span>
          </div>
        </div>

        <div className="toggle-wrap" id="toggleWrap">
          <div className="toggle-circle" />
          <span className="toggle-label">{"Switch Day 'N' Night"}</span>
        </div>
        <div className="monitor-bar" id="monitorBar">
          <div className="tagline">
            <span>{"// "}</span>Building at the intersection of<br />finance and technology
          </div>
          <div className="scroll-cue">
            Scroll Down <span className="sq" />
          </div>
        </div>
      </section>

      <div className="inner-world" id="innerWorld">
        <section className="section-projects" id="projectsSection">
          <div className="projects-header" id="projectsHeader">
            <div className="projects-title">My projects</div>
          </div>
          <p className="projects-desc" id="projectsDesc">
            Building at the intersection of finance, AI, and automation. Each project is a step
            toward the mission: showing people they don&apos;t need permission to build wealth their
            way.
          </p>
          <div className="gallery-wrapper">
            <div className="gallery-track" id="galleryTrack">
              {[0, 1].map((setIdx) => (
                <div key={setIdx} style={{ display: "contents" }}>
                  <div className="project-card">
                    <div className="project-card-tag">In Development</div>
                    <div
                      className="project-card-image"
                      style={{ background: "linear-gradient(135deg,#0d1b2a,#1b263b 50%,#415a77)" }}
                    >
                      <span className="project-icon">📱</span>
                    </div>
                    <div className="project-card-info">
                      <div className="project-card-title">Moneym8</div>
                      <div className="project-card-subtitle">Finance Automation App</div>
                      <div className="project-card-desc">
                        Personal finance forecasting &amp; automation. 3 years in the making.
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-card-tag">Shipped</div>
                    <div
                      className="project-card-image"
                      style={{ background: "linear-gradient(135deg,#2d1b69,#11998e)" }}
                    >
                      <span className="project-icon">👔</span>
                    </div>
                    <div className="project-card-info">
                      <div className="project-card-title">Virtual Fitting Room</div>
                      <div className="project-card-subtitle">AI / Machine Learning</div>
                      <div className="project-card-desc">
                        AI-powered virtual try-on using computer vision and ML.
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div
                      className="project-card-image"
                      style={{ background: "linear-gradient(135deg,#1a1a2e,#e94560)" }}
                    >
                      <span className="project-icon">⚡</span>
                    </div>
                    <div className="project-card-info">
                      <div className="project-card-title">The Build</div>
                      <div className="project-card-subtitle">Custom Apps &amp; AI Systems</div>
                      <div className="project-card-desc">
                        High-ticket custom software, AI integrations, and automation workflows.
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div
                      className="project-card-image"
                      style={{ background: "linear-gradient(135deg,#0f0c29,#302b63 50%,#24243e)" }}
                    >
                      <span className="project-icon">🧰</span>
                    </div>
                    <div className="project-card-info">
                      <div className="project-card-title">The Toolkit</div>
                      <div className="project-card-subtitle">
                        Presentations &amp; Automations
                      </div>
                      <div className="project-card-desc">
                        Mid-ticket deliverables: decks, automations, engineering solutions.
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <div className="project-card-tag">Coming Soon</div>
                    <div
                      className="project-card-image"
                      style={{ background: "linear-gradient(135deg,#232526,#414345)" }}
                    >
                      <span className="project-icon">📖</span>
                    </div>
                    <div className="project-card-info">
                      <div className="project-card-title">The New Money Playbook</div>
                      <div className="project-card-subtitle">Lead Magnet / Guide</div>
                      <div className="project-card-desc">
                        Money fundamentals, skill monetization, and AI as a force multiplier.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cta" id="ctaSection">
          <div className="side-label">Jackpot Automations — Est. 2023</div>
          <div className="cta-circle" />
          <div className="cta-circle-dot" />
          <h2 className="cta-headline" id="ctaHeadline">
            <span className="word">You</span>{" "}
            <span className="word">don&apos;t</span>{" "}
            <span className="word">need</span>
            <br />
            <span className="word">permission</span>
          </h2>
          <div className="cta-sub-box" id="ctaSubBox">
            <p>
              Software engineer turned entrepreneur. Building finance
              <br />
              automation tools and AI systems. Helping people turn
              <br />
              their skills into income through technology.
            </p>
          </div>
          <a href="#" className="cta-button" id="ctaButton">
            Get In Touch
          </a>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
          </div>
          <div className="footer-center">JA</div>
          <div style={{ opacity: 0.5 }}>Built by Julian Crummedyo</div>
        </footer>
      </div>
    </>
  );
}
