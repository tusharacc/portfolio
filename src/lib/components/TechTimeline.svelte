<script lang="ts">
  export interface YearEntry {
    year: number;
    langs: string[];
  }

  let { data }: { data: YearEntry[] } = $props();

  const COLS = 3;
  const entries = data.filter(e => e.langs.length > 0);

  const rows: YearEntry[][] = [];
  for (let i = 0; i < entries.length; i += COLS) {
    rows.push(entries.slice(i, i + COLS));
  }

  interface ChipColor {
    dkBg: string; dkFg: string;
    ltBg: string; ltFg: string;
  }

  const LANG_PALETTE: Record<string, ChipColor> = {
    Python:            { dkBg: '#0a1929', dkFg: '#60a5fa', ltBg: '#dbeafe', ltFg: '#1d4ed8' },
    JavaScript:        { dkBg: '#1a1400', dkFg: '#fbbf24', ltBg: '#fef3c7', ltFg: '#92400e' },
    TypeScript:        { dkBg: '#091225', dkFg: '#93c5fd', ltBg: '#dbeafe', ltFg: '#1e3a8a' },
    Ruby:              { dkBg: '#1a0505', dkFg: '#f87171', ltBg: '#fee2e2', ltFg: '#991b1b' },
    Shell:             { dkBg: '#011408', dkFg: '#34d399', ltBg: '#d1fae5', ltFg: '#065f46' },
    Swift:             { dkBg: '#1a0800', dkFg: '#fb923c', ltBg: '#ffedd5', ltFg: '#9a3412' },
    'C#':              { dkBg: '#100818', dkFg: '#c084fc', ltBg: '#ede9fe', ltFg: '#5b21b6' },
    CSS:               { dkBg: '#1a0311', dkFg: '#f472b6', ltBg: '#fce7f3', ltFg: '#9d174d' },
    HTML:              { dkBg: '#180c00', dkFg: '#fdba74', ltBg: '#fff7ed', ltFg: '#c2410c' },
    Go:                { dkBg: '#001a1f', dkFg: '#22d3ee', ltBg: '#cffafe', ltFg: '#155e75' },
    'C++':             { dkBg: '#0c0e14', dkFg: '#94a3b8', ltBg: '#f1f5f9', ltFg: '#334155' },
    Rust:              { dkBg: '#1a0c00', dkFg: '#fb923c', ltBg: '#fff7ed', ltFg: '#9a3412' },
    Java:              { dkBg: '#1a0800', dkFg: '#fca5a5', ltBg: '#fff1f2', ltFg: '#9f1239' },
    Kotlin:            { dkBg: '#100818', dkFg: '#c084fc', ltBg: '#f5f3ff', ltFg: '#6d28d9' },
    Dart:              { dkBg: '#001a1f', dkFg: '#22d3ee', ltBg: '#ecfeff', ltFg: '#0e7490' },
    Assembly:          { dkBg: '#0c0e14', dkFg: '#94a3b8', ltBg: '#f8fafc', ltFg: '#475569' },
    Svelte:            { dkBg: '#1a0600', dkFg: '#ff7043', ltBg: '#fff0ed', ltFg: '#c2410c' },
    AppleScript:       { dkBg: '#080818', dkFg: '#a5b4fc', ltBg: '#eef2ff', ltFg: '#4338ca' },
    'Jupyter Notebook':{ dkBg: '#140c00', dkFg: '#f59e0b', ltBg: '#fef3c7', ltFg: '#92400e' },
    AngularJS:         { dkBg: '#1a0000', dkFg: '#fca5a5', ltBg: '#fee2e2', ltFg: '#991b1b' },
    Claude:            { dkBg: '#1a1100', dkFg: '#f59e0b', ltBg: '#fefce8', ltFg: '#854d0e' },
    Copilot:           { dkBg: '#00101a', dkFg: '#38bdf8', ltBg: '#e0f2fe', ltFg: '#0369a1' },
  };

  const FALLBACK: ChipColor = { dkBg: '#0c0e14', dkFg: '#94a3b8', ltBg: '#f1f5f9', ltFg: '#334155' };

  function chipStyle(lang: string): string {
    const p = LANG_PALETTE[lang] ?? FALLBACK;
    return `--dk-bg:${p.dkBg};--dk-fg:${p.dkFg};--dk-border:${p.dkFg}40;--lt-bg:${p.ltBg};--lt-fg:${p.ltFg};--lt-border:${p.ltFg}50`;
  }

  function turnOnRight(ri: number): boolean {
    return ri % 2 === 0;
  }
</script>

<section class="py-14 px-4">
  <div class="mb-8 flex items-center gap-3 max-w-[600px] mx-auto">
    <span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">01</span>
    <span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Tech Evolution</span>
    <span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span>
  </div>

  <div class="max-w-[600px] mx-auto">
    {#each rows as row, ri}
      {@const rev = ri % 2 === 1}

      <div class="row" class:row-rev={rev}>
        {#each row as entry, ci}
          {#if ci > 0}
            <div class="trace-h" aria-hidden="true"></div>
          {/if}

          <div class="node">
            <div class="yr">{entry.year}</div>
            <div class="chips">
              {#each entry.langs as lang}
                <span class="chip" style={chipStyle(lang)}>{lang}</span>
              {/each}
            </div>
          </div>
        {/each}

        {#if row.length < COLS}
          {#each Array(COLS - row.length) as _}
            <div class="trace-h" aria-hidden="true"></div>
            <div class="node node-phantom" aria-hidden="true"></div>
          {/each}
        {/if}
      </div>

      {#if ri < rows.length - 1}
        <div class="turn-row" aria-hidden="true">
          {#each row as _, ci}
            <div class="turn-slot">
              {#if (turnOnRight(ri) && ci === COLS - 1) || (!turnOnRight(ri) && ci === 0)}
                <div class="turn-line">
                  <span class="turn-arrow">▾</span>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .row {
    display: flex;
    align-items: stretch;
    flex-direction: row;
  }

  .row-rev {
    flex-direction: row-reverse;
  }

  .node {
    flex: 1;
    min-width: 0;
    margin: 2px;
    padding: 10px 10px 12px;
    border-radius: 8px;
    border: 1px solid rgba(245, 158, 11, 0.15);
    background: rgba(2, 6, 23, 0.7);
    transition: border-color 200ms, box-shadow 200ms;
  }

  :global(html:not(.dark)) .node {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(245, 158, 11, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .node:hover {
    border-color: rgba(245, 158, 11, 0.45);
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.06);
  }

  .node-phantom {
    visibility: hidden;
    pointer-events: none;
  }

  .yr {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.05rem;
    font-weight: 700;
    color: #f59e0b;
    line-height: 1;
    margin-bottom: 7px;
    letter-spacing: -0.02em;
  }

  :global(html:not(.dark)) .yr {
    color: #d97706;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }

  .chip {
    font-size: 9px;
    line-height: 1;
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.01em;
    white-space: nowrap;
    background: var(--dk-bg);
    color: var(--dk-fg);
    border-color: var(--dk-border);
  }

  :global(html:not(.dark)) .chip {
    background: var(--lt-bg);
    color: var(--lt-fg);
    border-color: var(--lt-border);
  }

  /* Horizontal trace between adjacent nodes */
  .trace-h {
    flex-shrink: 0;
    align-self: flex-start;
    width: 10px;
    margin-top: 18px;
    height: 2px;
    border-top: 2.5px dashed rgba(245, 158, 11, 0.75);
  }

  /* Vertical connector between rows, aligned to the same column as the
     card it links so the path visually continues rather than floating. */
  .turn-row {
    display: flex;
    height: 32px;
  }

  .turn-slot {
    flex: 1;
    min-width: 0;
    display: flex;
    justify-content: center;
  }

  .turn-line {
    position: relative;
    width: 0;
    height: 100%;
    border-left: 3px dashed rgba(245, 158, 11, 0.9);
  }

  .turn-arrow {
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    color: #f59e0b;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.5));
  }

  /* Mobile: single vertical column */
  @media (max-width: 480px) {
    .row, .row-rev {
      flex-direction: column;
      align-items: stretch;
    }

    .node {
      flex: none;
      margin: 1px 0;
    }

    .trace-h {
      width: 2px;
      height: 10px;
      border-top: none;
      border-left: 2.5px dashed rgba(245, 158, 11, 0.75);
      margin-top: 0;
      margin-left: 12px;
      align-self: flex-start;
    }

    .turn-row {
      display: none;
    }
  }
</style>
