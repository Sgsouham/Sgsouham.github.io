import type { ReactNode } from "react";

const KEYWORDS = new Set([
  "def",
  "class",
  "return",
  "import",
  "from",
  "self",
  "if",
  "else",
  "elif",
  "for",
  "while",
  "in",
  "not",
  "and",
  "or",
  "None",
  "True",
  "False",
  "pass",
  "lambda",
  "yield",
  "with",
  "as",
  "try",
  "except",
  "raise",
]);

// Simple tokenizer: comments, strings, numbers, keywords, functions, classes
function tokenizeLine(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let i = 0;
  const len = line.length;

  const push = (text: string, cls: string, key: number) => {
    if (!text) return;
    nodes.push(
      <span key={key} className={cls}>
        {text}
      </span>
    );
  };

  let key = 0;
  while (i < len) {
    const rest = line.slice(i);

    // comment
    if (rest.startsWith("#")) {
      push(rest, "tok-com", key++);
      break;
    }

    // string (single or double, incl. f/r prefixes)
    const strMatch = rest.match(/^([fFrRbBuU]{0,2})(["'])/);
    if (strMatch) {
      const quote = strMatch[2];
      const start = i + strMatch[0].length;
      const endRel = line.indexOf(quote, start);
      if (endRel === -1) {
        push(line.slice(i), "tok-str", key++);
        break;
      }
      push(line.slice(i, endRel + 1), "tok-str", key++);
      i = endRel + 1;
      continue;
    }

    // number
    const numMatch = rest.match(/^\d[\d_]*\.?\d*([eE][+-]?\d+)?/);
    if (numMatch) {
      push(numMatch[0], "tok-num", key++);
      i += numMatch[0].length;
      continue;
    }

    // identifier / keyword
    const idMatch = rest.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (idMatch) {
      const word = idMatch[0];
      if (KEYWORDS.has(word)) {
        push(word, "tok-kw", key++);
      } else {
        // function name if followed by "("
        const after = line.slice(i + word.length);
        if (/^\s*\(/.test(after)) push(word, "tok-fn", key++);
        else push(word, "tok-plain", key++);
      }
      i += word.length;
      continue;
    }

    // operator / punctuation
    const opMatch = rest.match(/^[^\w\s"']+/);
    if (opMatch) {
      push(opMatch[0], "tok-op", key++);
      i += opMatch[0].length;
      continue;
    }

    // whitespace
    const wsMatch = rest.match(/^\s+/);
    if (wsMatch) {
      push(wsMatch[0], "", key++);
      i += wsMatch[0].length;
      continue;
    }

    i++;
  }

  return nodes;
}

export default function CodeHighlight({ code }: { code: string }) {
  return (
    <>
      {code.split("\n").map((line, i) => (
        <div key={i} className="min-h-[1.4em] whitespace-pre">
          {tokenizeLine(line)}
        </div>
      ))}
    </>
  );
}
