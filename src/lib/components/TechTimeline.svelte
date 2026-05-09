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

  const LANG_PALETTE: Record<string, { bg: string; fg: string }> = {
    Python:      { bg: '#0a1929', fg: '#60a5fa' },
    JavaScript:  { bg: '#1a1400', fg: '#fbbf24' },
    TypeScript:  { bg: '#091225', fg: '#93c5fd' },
    Ruby:        { bg: '#1a0505', fg: '#f87171' },
    Shell:       { bg: '#011408', fg: '#34d399' },
    Swift:       { bg: '#1a0800', fg: '#fb923c' },
    'C#':        { bg: '#100818', fg: '#c084fc' },
    CSS:         { bg: '#1a0311', fg: '#f472b6' },
    HTML:        { bg: '#180c00', fg: '#fdba74' },
    Go:          { bg: '#001a1f', fg: '#22d3ee' },
    'C++':       { bg: '#0c0e14', fg: '#94a3b8' },
    Svelte:      { bg: '#1a0600', fg: '#ff7043' },
    AppleScript: { bg: '#080818', fg: '#a5b4fc' },
    Jupyter:     { bg: '#140c00', fg: '#f59e0b' },
    AngularJS:   { bg: '#1a0000', fg: '#fca5a5' },
  };

  function chipStyle(lang: string): string {
    const p = LANG_PALETTE[lang] ?? { bg: '#0c0e14', fg: '#94a3b8' };
    return `background:${p.bg};color:${p.fg};border-color:${p.fg}40`;
  }

  function turnStyle(ri: number): string {
    const onRight = ri % 2 === 0;
    const base = 'height:24px;width:calc(33.333% + 8px);border-bottom:1px dashed rgba(245,158,11,0.3);';
    return onRight
      ? base + 'margin-left:auto;border-right:1px dashed rgba(245,158,11,0.3);border-bottom-right-radius:10px;'
      : base + 'margin-right:auto;border-left:1px dashed rgba(245,158,11,0.3);border-bottom-left-radius:10px;';
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

      <div class="flex items-start" style="flex-direction: {rev ? 'row-reverse' : 'row'}">
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
        <div style={turnStyle(ri)} aria-hidden="true"></div>
      {/if}
    {/each}
  </div>
</section>

<style>
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
  }

  /* Horizontal trace between adjacent nodes in a row */
  .trace-h {
    flex-shrink: 0;
    width: 10px;
    /* top padding (10px) + half of yr line-height (~8px) = 18px */
    margin-top: 18px;
    align-self: flex-start;
    height: 1px;
    border-top: 1px dashed rgba(245, 158, 11, 0.3);
  }

  /* Mobile: single vertical trace */
  @media (max-width: 480px) {
    .node { margin: 1px 0; }

    .trace-h {
      width: 1px;
      height: 10px;
      border-top: none;
      border-left: 1px dashed rgba(245, 158, 11, 0.3);
      margin-top: 0;
      margin-left: 18px;
    }
  }
</style>
