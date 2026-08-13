// ─────────────────────────────────────────────────────────────
// Code-based content: editor tabs + interactive benchmark data
// ─────────────────────────────────────────────────────────────

export type EditorTab = {
  file: string;
  icon: string;
  code: string;
};

export const editorTabs: EditorTab[] = [
  {
    file: "profile.py",
    icon: "🐍",
    code: `# profile.py — Souham Ghosh
# AI Engineering Lead · model optimization · on-device AI

from experience import Multicoreware, Rebrewed, Cognizant
from projects import TritonOpSwap, SpeculativeDecoding, GRPO


class SouhamGhosh(AIEngineeringLead):
    """I make models production-ready on constrained hardware."""

    def __init__(self) -> None:
        self.role = "AI Engineering Lead"
        self.years_shipping = 5
        self.team_size = 10
        self.on_device_models = 20
        self.location = "Chennai, India"
        # BEVFormer flagship: 800 ms -> 50 ms end-to-end
        self.latency_reduction = "16×"

    def specialize(self) -> list[str]:
        return [
            "quantization (PTQ/QAT, W8A8/W4A8)",
            "custom Triton / CUDA kernels",
            "LLM post-training (SFT/DPO/GRPO)",
            "on-device NPU enablement",
        ]

    def lead(self) -> str:
        return "roadmaps, code-review standards, mentoring"`,
  },
  {
    file: "skills.py",
    icon: "⚙️",
    code: `# skills.py — in production use or backed by a repo

skills = {
    "model_optimization": [
        "PTQ & QAT", "W8A8 / W4A8", "FP16 / INT8",
        "knowledge distillation", "ONNX export constraints",
    ],
    "kernels_and_compilers": [
        "OpenAI Triton", "CUDA C++", "TVM / MLIR",
        "NCU / NSYS profiling", "roofline analysis",
    ],
    "llm_post_training": [
        "SFT", "DPO", "GRPO", "verifiable rewards",
    ],
    "leadership": [
        "technical roadmaps", "code-review standards",
        "mentoring", "cross-team delivery",
    ],
}

languages = ["Python", "PyTorch", "TensorFlow",
             "C++", "Git / CI"]`,
  },
  {
    file: "experience.py",
    icon: "📈",
    code: `# experience.py — growth within one company, then beyond

experience = [
    Role(
        company="Multicoreware Inc.",
        title="Lead Associate — On-device AI",
        period="Jun 2022 - Present",
        highlights=[
            "20+ CV / NLP / LLM models enabled on-device",
            "12 enablement reports shipped to production",
            "10-person engineering team led",
        ],
    ),
    Role(
        company="Rebrewed Technologies",
        title="Data Scientist (Part-Time)",
        period="Oct 2021 - Apr 2022",
        highlights=[
            "5,260+ product images automated",
            "83% OCR auto-fill accuracy",
        ],
    ),
    Role(
        company="Cognizant Technology Solutions",
        title="Programmer Analyst",
        period="2020 - May 2022",
    ),
    Role(
        company="NCFlexe, IIT Kanpur",
        title="Research Intern",
        period="Aug 2020 - Nov 2020",
    ),
]`,
  },
];

// ─── Interactive benchmarks ───────────────────────────────────

export type Benchmark = {
  id: string;
  command: string;
  lines: string[];
  verdict: "win" | "loss" | "parity";
};

export const benchmarks: Benchmark[] = [
  {
    id: "rope",
    command: "python benchmarks/benchmark_op_swap.py --op rope",
    lines: [
      "loading Qwen/Qwen2.5-1.5B-Instruct (fp16, RTX 3060) ...",
      "warmup: 10 iters  |  reps: 100  |  median  |  seq_len=4096",
      "",
      "  eager   1.082 ms",
      "  triton  0.161 ms",
      "",
      "speedup  6.71x   [in-kernel trig + frequency]",
      "result   ✓ win  — fuses RoPE, removes HBM round-trips",
    ],
    verdict: "win",
  },
  {
    id: "rmsnorm",
    command: "python benchmarks/benchmark_op_swap.py --op rmsnorm",
    lines: [
      "loading Qwen/Qwen2.5-1.5B-Instruct (fp16, RTX 3060) ...",
      "warmup: 10 iters  |  reps: 100  |  median  |  hidden=1536",
      "",
      "  eager   0.599 ms",
      "  triton  0.155 ms",
      "",
      "speedup  3.85x   [one-pass reduction]",
      "result   ✓ win  — single HBM read/write",
    ],
    verdict: "win",
  },
  {
    id: "silu",
    command: "python benchmarks/benchmark_op_swap.py --op silu_mul",
    lines: [
      "loading Qwen/Qwen2.5-1.5B-Instruct (fp16, RTX 3060) ...",
      "warmup: 10 iters  |  reps: 100  |  median  |  inter=8960",
      "",
      "  eager   2.249 ms",
      "  triton  1.380 ms",
      "",
      "speedup  1.63x   [fused silu(gate) * up]",
      "result   ✓ win  — no intermediate tensor",
    ],
    verdict: "win",
  },
  {
    id: "attention",
    command: "python benchmarks/benchmark_op_swap.py --op attention",
    lines: [
      "loading Qwen/Qwen2.5-1.5B-Instruct (fp16, RTX 3060) ...",
      "warmup: 10 iters  |  reps: 100  |  median  |  GQA 12/2",
      "",
      "  SDPA (cuBLAS FA2)  0.84x",
      "  triton (GQA)       1.00x",
      "",
      "verdict  loss — cuBLAS FA2 wins",
      "note     cuBLAS FA2 wins on GEMM-capped hardware",
    ],
    verdict: "loss",
  },
  {
    id: "e2e",
    command: "python benchmarks/benchmark_end_to_end.py --seq 512",
    lines: [
      "loading Qwen/Qwen2.5-1.5B-Instruct (fp16, RTX 3060) ...",
      "prefill sweep: 512 / 1024 / 2048 / 4096",
      "",
      "  eager   87.1 ms",
      "  swapped 79.0 ms",
      "",
      "speedup  1.10x  — wins at every seq_len",
      "result   ✓ win  — GEMM-capped, as roofline predicts",
    ],
    verdict: "win",
  },
  {
    id: "decode",
    command: "python runs/compare_versions.py --versions 0 4 5 --gif",
    lines: [
      "ladder run on real model.generate() — 48 tokens, greedy",
      "",
      "  v0 baseline   34.98 tok/s",
      "  v4 +rmsnorm   38.03 tok/s",
      "  v5 all-four   36.86 tok/s",
      "",
      "output  byte-identical across all six versions",
      "verdict net win  +5.4% decode, -8.6% TTFT, VRAM parity",
    ],
    verdict: "win",
  },
];
