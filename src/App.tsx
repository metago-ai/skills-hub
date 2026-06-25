import { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { SkillGrid } from './components/SkillGrid'
import { SkillDetail } from './components/SkillDetail'
import { ContributeGuide } from './components/ContributeGuide'
import { SKILLS, TOTAL_COUNT, CORE_COUNT, DEVKIT_COUNT } from './data/skills'
import type { Skill, SkillCategory, SortKey } from './types'

interface StatPillProps {
  value: number
  label: string
  accent: string
}

function StatPill({ value, label, accent }: StatPillProps) {
  return (
    <div className="flex items-baseline gap-1.5 rounded-lg border border-border-subtle bg-bg-card/60 px-3 py-2">
      <span className={`font-mono text-xl font-bold ${accent}`}>{value}</span>
      <span className="text-xs text-zinc-500">{label}</span>
    </div>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<SkillCategory | 'all'>('all')
  const [sort, setSort] = useState<SortKey>('name')
  const [selected, setSelected] = useState<Skill | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = SKILLS.filter((s) => {
      const matchCat = category === 'all' || s.category === category
      const matchQuery =
        !q ||
        s.id.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.detail.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
    return list.sort((a, b) => {
      if (sort === 'category') {
        if (a.category !== b.category) return a.category === 'core' ? -1 : 1
      }
      return a.name.localeCompare(b.name, 'zh-CN')
    })
  }, [query, category, sort])

  return (
    <div id="top" className="bg-atmosphere grain relative min-h-screen">
      <div className="relative z-10">
        <Header query={query} onQueryChange={setQuery} />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden">
            {/* 发光氛围球 */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-float-slow absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent-emerald/10 blur-3xl" />
              <div className="animate-pulse-glow absolute right-0 top-10 h-64 w-64 rounded-full bg-accent-teal/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-emerald/20 bg-accent-emerald/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-emerald">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-emerald" />
                Skills Marketplace
              </span>
              <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                发现与获取
                <span className="bg-gradient-to-r from-accent-emerald via-accent-teal to-accent-blue bg-clip-text text-transparent">
                  {' '}MetaGO 技能
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                26 个元构技能（22 核心 + 4 Dev Kit），一站式浏览、搜索与获取。
                一键复制 SKILL.md，让 AI 助手升级为元构超级智能生命体。
              </p>

              {/* 统计 */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                <StatPill value={TOTAL_COUNT} label="个技能" accent="text-accent-emerald" />
                <StatPill value={CORE_COUNT} label="核心" accent="text-emerald-300" />
                <StatPill value={DEVKIT_COUNT} label="Dev Kit" accent="text-sky-300" />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#skills" className="btn-primary">
                  浏览全部技能
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </a>
                <a href="#contribute" className="btn-secondary">贡献新技能</a>
              </div>
            </div>
          </section>

          {/* 技能网格 */}
          <SkillGrid
            skills={filtered}
            query={query}
            category={category}
            sort={sort}
            onCategoryChange={setCategory}
            onSortChange={setSort}
            onOpen={setSelected}
          />

          {/* 贡献指南 */}
          <ContributeGuide />
        </main>

        {/* 页脚 */}
        <footer className="border-t border-border-subtle/60">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p className="text-sm text-zinc-500">
              <span className="font-display font-semibold text-zinc-300">MetaGO Skills Hub</span>
              {' · '}元构技能市场 MVP
            </p>
            <p className="font-mono text-xs text-zinc-600">
              符合 agentskills.io 开放标准 · MIT License
            </p>
          </div>
        </footer>
      </div>

      {/* 详情模态框 */}
      <SkillDetail skill={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
