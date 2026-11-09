---
title: "SimCore/RISC-V (SimRV) — Modular RISC-V CPU Simulator"
excerpt: "Open-source RISC-V processor simulator developed at ArchLab, Science Tokyo. Features cycle-accurate modeling, pipeline simulation, custom function units (CFU), and upcoming IEEE MCSoC 2026 paper."
collection: portfolio
github: 'https://github.com/archlab-sciencetokyo/SimRV'
---

## SimCore/RISC-V (SimRV)

[SimRV](https://github.com/archlab-sciencetokyo/SimRV) is an open-source RISC-V CPU simulator developed and maintained at the [Architecture Laboratory (ArchLab / 吉瀬研究室)](https://www.arch.cs.titech.ac.jp), Department of Computer Science, Institute of Science Tokyo. Active since 2018, it serves as a core research platform for processor microarchitecture, hardware/software co-design, and execution verification.

### Core Architecture & Capabilities

- **Modular RISC-V ISA Simulation:** Supports 32-bit and 64-bit integer instructions (RV32I / RV64I) along with standard extensions.
- **Cycle-Accurate Coroutine Pipeline:** Features a 5-stage pipeline model accurately capturing instruction hazards, branch penalties, and forwarding paths.
- **Custom Function Unit (CFU) Acceleration:** Enables rapid exploration and evaluation of application-specific hardware accelerators and custom instruction extensions.
- **RTL Parity & Co-Verification:** Provides instruction and trace logs for automated validation against synthesizable Verilog processor designs simulated in Verilator.
- **High Performance in C++:** Designed for fast turnaround in software development and architectural parameter sweeps.

### Upcoming Conference Publication

- **Venue:** IEEE International Symposium on Embedded Multicore/Many-core Systems-on-Chip (MCSoC 2026)
- **Date:** December 2026
- **Focus:** Cycle-accuracy verification and behavioral parity between synthesizable RVProc Verilog RTL and SimRV's 5-stage pipeline with CFU proving-ground accelerators.

### Links

- **GitHub Repository:** [archlab-sciencetokyo/SimRV](https://github.com/archlab-sciencetokyo/SimRV)
- **Lab Website:** [ArchLab (Kise Laboratory), Science Tokyo](https://www.arch.cs.titech.ac.jp/)
