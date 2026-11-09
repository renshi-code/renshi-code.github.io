---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="hero-intro" style="margin-bottom: 2.25rem;">
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
    <span class="kanji-pill">初めまして</span>
    <span class="badge badge-matcha">Ph.D. Researcher</span>
    <a href="https://www.arch.cs.titech.ac.jp" target="_blank" rel="noopener noreferrer" class="badge badge-emerald" style="text-decoration: none;">ArchLab (吉瀬研) • 東京科学大学 &rarr;</a>
  </div>
  <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-top: 0.35rem; margin-bottom: 0.85rem; letter-spacing: -0.025em;">
    Accelerating Digital Hardware Simulation & RISC-V Microarchitecture
  </h1>
  <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; max-width: 840px; margin-bottom: 1.25rem;">
    I am a Computer Engineering Ph.D. student at <strong>Institute of Science Tokyo</strong> (東京科学大学, formerly Tokyo Tech) in the <strong><a href="https://www.arch.cs.titech.ac.jp" target="_blank" rel="noopener noreferrer">Architecture Laboratory (ArchLab / 吉瀬研究室)</a></strong>. My research investigates novel compiler infrastructure for high-speed RTL simulation acceleration, cycle-accurate RISC-V CPU modeling, and FPGA hardware verification.
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
    <a href="/portfolio/" class="btn-modern-primary"><i class="fas fa-microchip"></i> Explore Portfolio &rarr;</a>
    <a href="/publications/" class="btn-modern-outline"><i class="fas fa-file-alt"></i> Publications</a>
    <a href="/cv/" class="btn-modern-outline"><i class="fas fa-graduation-cap"></i> Curriculum Vitae</a>
  </div>
</div>

<!-- ================= BENTO GRID SHOWCASE ================= -->
<div class="bento-grid">

  <!-- Bento 1: VCC Compiler (Full Width across grid) -->
  <div class="bento-card bento-card-full">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="badge badge-matcha">Featured Research • 論文</span>
        <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">IEICE Jan 2026</span>
      </div>
      <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.35rem;">
        <a href="/portfolio/portfolio-vcc/">VCC: Verilog HDL Compiler for Accelerated RTL Simulation</a>
      </h3>
      <p style="color: var(--text-muted); font-size: 0.9375rem; line-height: 1.65; margin-bottom: 1rem;">
        A specialized hardware description language compiler developed at <a href="https://www.arch.cs.titech.ac.jp" target="_blank" rel="noopener noreferrer">ArchLab (吉瀬研究室)</a> that translates Verilog HDL circuits directly into optimized simulation code to eliminate traditional RTL simulation bottlenecks in digital hardware design.
      </p>
      <div class="tag-list">
        <span class="tag-item">Verilog HDL</span>
        <span class="tag-item">RTL Simulation</span>
        <span class="tag-item">Compiler Acceleration</span>
        <span class="tag-item">IEICE RECONF/VLD</span>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <a href="https://www.ieice.org/publications/search/summary.php?id=141053&tbl=ken&lang=en" target="_blank" rel="noopener noreferrer" class="btn-modern-primary">
        <i class="fas fa-file-alt"></i> IEICE Summary (#141053) &rarr;
      </a>
      <a href="https://ken.ieice.org/ken/paper/20260127ocqa/" target="_blank" rel="noopener noreferrer" class="btn-modern-outline">
        <i class="fas fa-download"></i> Paper Report (ken.ieice.org)
      </a>
    </div>
  </div>

  <!-- Bento 2: Upcoming IEEE MCSoC Milestone (1 Column) -->
  <div class="bento-card" style="border-left: 3px solid var(--sakura);">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="badge badge-sakura">🌸 Upcoming • 注目</span>
        <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--sakura); font-weight: 700;">Dec 2026</span>
      </div>
      <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.25rem;">
        IEEE MCSoC 2026 Conference Paper
      </h3>
      <p style="color: var(--text-muted); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1rem;">
        Cycle-accuracy and behavioral parity between synthesizable RVProc Verilog RTL in Verilator and SimRV's 5-stage coroutine pipeline model with Custom Function Units (CFU).
      </p>
    </div>
    <div style="padding: 0.75rem 0.85rem; border-radius: 0.75rem; background: var(--badge-sakura-bg); border: 1px solid var(--badge-sakura-border); font-size: 0.8125rem; color: var(--sakura);">
      <strong>IEEE International Symposium on Embedded Multicore SoCs</strong><br>
      Presentation & Proceedings (December 2026)
    </div>
  </div>

  <!-- Bento 3: SimRV CPU Simulator (1 Column) -->
  <div class="bento-card">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="badge badge-emerald">ArchLab Open Source</span>
        <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">Active since 2018</span>
      </div>
      <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.25rem;">
        <a href="/portfolio/portfolio-simrv/">SimCore / RISC-V (SimRV)</a>
      </h3>
      <p style="color: var(--text-muted); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1rem;">
        High-performance modular RISC-V CPU simulator written in C++ at <a href="https://www.arch.cs.titech.ac.jp" target="_blank" rel="noopener noreferrer">ArchLab (吉瀬研究室)</a>. Built for computer architecture research, cycle-accurate instruction trace validation, and hardware co-verification.
      </p>
      <div class="tag-list">
        <span class="tag-item">RISC-V</span>
        <span class="tag-item">C++20</span>
        <span class="tag-item">Pipeline Simulation</span>
        <span class="tag-item">CFU Extensions</span>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
      <a href="https://github.com/archlab-sciencetokyo/SimRV" target="_blank" rel="noopener noreferrer" class="btn-modern-outline" style="width: 100%; justify-content: center;">
        <i class="fab fa-github"></i> archlab-sciencetokyo/SimRV &rarr;
      </a>
    </div>
  </div>

  <!-- Bento 4: Affiliation & Roots (Full Width across grid) -->
  <div class="bento-card bento-card-full">
    <div>
      <div style="margin-bottom: 0.75rem;">
        <span class="badge badge-matcha">Academic Path • 経歴</span>
      </div>
      <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.25rem;">
        Affiliations & Education
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        <div style="padding: 0.85rem 1rem; border-radius: 0.85rem; background: var(--bg-subtle); border: 1px solid var(--border-color);">
          <strong style="color: var(--text-primary); font-size: 0.95rem;">Institute of Science Tokyo</strong> (東京科学大学)<br>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Ph.D. Student in Computer Science at <a href="https://www.arch.cs.titech.ac.jp" target="_blank" rel="noopener noreferrer">ArchLab (吉瀬研究室)</a></span><br>
          <span style="font-size: 0.75rem; color: var(--accent); font-weight: 600;">2025 – Present</span>
        </div>
        <div style="padding: 0.85rem 1rem; border-radius: 0.85rem; background: var(--bg-subtle); border: 1px solid var(--border-color);">
          <strong style="color: var(--text-primary); font-size: 0.95rem;">Tokyo Institute of Technology</strong> (東京工業大学)<br>
          <span style="font-size: 0.85rem; color: var(--text-muted);">YSEP Research Exchange Program</span><br>
          <span style="font-size: 0.75rem; color: var(--accent); font-weight: 600;">Oct 2023 – Aug 2024</span>
        </div>
        <div style="padding: 0.85rem 1rem; border-radius: 0.85rem; background: var(--bg-subtle); border: 1px solid var(--border-color);">
          <strong style="color: var(--text-primary); font-size: 0.95rem;">Leibniz Universität Hannover</strong><br>
          <span style="font-size: 0.85rem; color: var(--text-muted);">M.Sc. & B.Sc. in Computer Engineering</span><br>
          <span style="font-size: 0.75rem; color: var(--accent); font-weight: 600;">2018 – 2025</span>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- ================= RESEARCH AREAS & SKILLS ================= -->
<div style="margin-top: 2.5rem;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
    <h2 style="font-size: 1.45rem; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
      <span>Research Pillars & Competencies</span>
      <span class="kanji-pill">研究分野</span>
    </h2>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
    <div class="modern-card" style="margin-bottom: 0;">
      <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚡</div>
      <h4 style="margin: 0 0 0.5rem 0;">RTL Simulation Acceleration</h4>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">
        Developing compiler techniques and optimizations that transform Verilog HDL designs into accelerated executable simulation kernels.
      </p>
    </div>
    <div class="modern-card" style="margin-bottom: 0;">
      <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🖥️</div>
      <h4 style="margin: 0 0 0.5rem 0;">RISC-V Microarchitecture</h4>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">
        Open-source instruction set processor simulation, pipeline modeling, instruction tracing, and Custom Function Unit (CFU) integration.
      </p>
    </div>
    <div class="modern-card" style="margin-bottom: 0;">
      <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚙️</div>
      <h4 style="margin: 0 0 0.5rem 0;">FPGA & Hardware Prototyping</h4>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">
        Hardware/software co-design, synthesizable Verilog implementation, and formal trace co-verification against software models.
      </p>
    </div>
  </div>

  <div class="modern-card">
    <h3 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
      <span>Technical Skills & Spoken Languages</span>
      <span class="kanji-pill">技術と語学</span>
    </h3>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
      <div>
        <h5 style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.5rem;">Hardware & EDA</h5>
        <div class="tag-list">
          <span class="tag-item">Verilog HDL</span>
          <span class="tag-item">SystemVerilog</span>
          <span class="tag-item">VHDL</span>
          <span class="tag-item">FPGA</span>
          <span class="tag-item">Verilator</span>
        </div>
      </div>
      <div>
        <h5 style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.5rem;">Software & Systems</h5>
        <div class="tag-list">
          <span class="tag-item">C / C++ (C++20)</span>
          <span class="tag-item">LLVM & Clang</span>
          <span class="tag-item">CMake / Ninja</span>
          <span class="tag-item">Java</span>
          <span class="tag-item">TypeScript</span>
          <span class="tag-item">Linux</span>
        </div>
      </div>
      <div>
        <h5 style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.5rem;">Languages (語学)</h5>
        <div class="tag-list">
          <span class="tag-item" style="background: var(--accent-light); color: var(--accent); border-color: var(--accent-border);">German (母国語)</span>
          <span class="tag-item" style="background: var(--accent-light); color: var(--accent); border-color: var(--accent-border);">English (Fluent)</span>
          <span class="tag-item" style="background: var(--badge-sakura-bg); color: var(--sakura); border-color: var(--badge-sakura-border);">Japanese (日本語学習中 🌸)</span>
        </div>
      </div>
    </div>
  </div>
</div>
