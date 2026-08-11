"use client";

import { useState } from "react";
import { editorTabs } from "@/lib/codeContent";
import CodeHighlight from "@/components/CodeHighlight";

export default function CodeEditor() {
  const [active, setActive] = useState(0);
  const tab = editorTabs[active];
  const lineCount = tab.code.split("\n").length;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0c0c12] shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-ink-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-dim">
          sgsouham — {tab.file}
        </span>
        <span className="ml-auto font-mono text-[10px] text-dim/60">UTF-8 · Python</span>
      </div>

      {/* File tabs */}
      <div
        role="tablist"
        aria-label="Code files"
        className="flex items-end gap-0.5 overflow-x-auto border-b border-line bg-ink-2/40 px-2 pt-2"
      >
        {editorTabs.map((t, i) => (
          <button
            key={t.file}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-1.5 rounded-t-md px-3 py-2 font-mono text-[11px] transition-colors ${
              active === i
                ? "border border-b-0 border-line bg-[#0c0c12] text-ivory"
                : "border border-transparent text-dim hover:text-stone"
            }`}
          >
            <span className="text-[12px] leading-none">{t.icon}</span>
            {t.file}
            {active === i ? <span className="ml-1 h-1 w-1 rounded-full bg-gold" /> : null}
          </button>
        ))}
      </div>

      {/* Editor body */}
      <div className="flex">
        {/* line numbers */}
        <div
          aria-hidden="true"
          className="select-none border-r border-line/60 px-3 py-4 text-right font-mono text-[12px] leading-[1.7] text-dim/50"
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* code */}
        <div role="tabpanel" className="flex-1 overflow-x-auto p-4 font-mono text-[12px] leading-[1.7]">
          <CodeHighlight code={tab.code} />
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-line bg-ink-2/80 px-4 py-1.5 font-mono text-[10px] text-dim">
        <span>main*</span>
        <span className="flex items-center gap-3">
          <span>Ln {lineCount}, Col 1</span>
          <span className="text-gold/80">Spaces: 4</span>
        </span>
      </div>
    </div>
  );
}
