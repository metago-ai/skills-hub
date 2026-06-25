import type { FormEvent } from 'react'

interface HeaderProps {
  query: string
  onQueryChange: (v: string) => void
}

const GITHUB_URL = 'https://github.com/metago-ai/metagolifeform'

export function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/80 bg-bg-deep/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_0_8px_rgba(16,217,133,0.5)]">
              <path d="M16 4 L27 10.5 V21.5 L16 28 L5 21.5 V10.5 Z" fill="none" stroke="#10d985" strokeWidth="1.4" />
              <path d="M16 10 L22 13.5 V20.5 L16 24 L10 20.5 V13.5 Z" fill="none" stroke="#10d985" strokeWidth="1" opacity="0.5" />
              <circle cx="16" cy="16" r="2.6" fill="#10d985" />
            </svg>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-base font-bold tracking-tight text-zinc-50">
              MetaGO<span className="text-accent-emerald"> Skills Hub</span>
            </span>
            <span className="mt-0.5 font-mono text-[10px] tracking-widest text-zinc-500">
              元构技能市场
            </span>
          </span>
        </a>

        {/* 搜索框（实时） */}
        <form
          className="relative mx-auto w-full max-w-md"
          role="search"
          onSubmit={(e: FormEvent) => e.preventDefault()}
        >
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="搜索技能名 / 描述 / 标签…"
            aria-label="搜索技能"
            className="input-base !pl-9 !pr-9"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              aria-label="清空搜索"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-zinc-500 hover:text-zinc-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </form>

        {/* GitHub */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !px-3 sm:!px-4"
          aria-label="GitHub 仓库"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  )
}
