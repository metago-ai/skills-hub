import type { ReactNode } from 'react'
import type { Skill, SkillCategory, SortKey } from '../types'
import { SkillCard } from './SkillCard'

interface SkillGridProps {
  skills: Skill[]
  query: string
  category: SkillCategory | 'all'
  sort: SortKey
  onCategoryChange: (c: SkillCategory | 'all') => void
  onSortChange: (s: SortKey) => void
  onOpen: (skill: Skill) => void
}

function FilterSelect({
  value,
  onChange,
  children,
}: {
  value: string
  onChange: (v: string) => void
  children: ReactNode
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="筛选"
        className="cursor-pointer appearance-none rounded-lg border border-border-default bg-bg-elevated py-2 pl-3 pr-9 text-sm text-zinc-200 transition-colors hover:border-border-default focus:border-accent-emerald/60 focus:outline-none"
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  )
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle py-20 text-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4 text-zinc-600"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6" />
      </svg>
      <p className="text-sm text-zinc-400">未找到匹配的技能</p>
      {query && (
        <p className="mt-1 font-mono text-xs text-zinc-600">关键词：{query}</p>
      )}
    </div>
  )
}

export function SkillGrid({
  skills,
  query,
  category,
  sort,
  onCategoryChange,
  onSortChange,
  onOpen,
}: SkillGridProps) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* 筛选栏 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <FilterSelect value={category} onChange={(v) => onCategoryChange(v as SkillCategory | 'all')}>
            <option value="all">分类：全部</option>
            <option value="core">分类：核心</option>
            <option value="devkit">分类：Dev Kit</option>
          </FilterSelect>
          <FilterSelect value={sort} onChange={(v) => onSortChange(v as SortKey)}>
            <option value="name">排序：按名称</option>
            <option value="category">排序：按分类</option>
          </FilterSelect>
        </div>
        <p className="text-sm text-zinc-500">
          找到 <span className="font-mono text-zinc-200">{skills.length}</span> 个技能
        </p>
      </div>

      {/* 卡片网格 */}
      {skills.length === 0 ? (
        <div className="mt-8">
          <EmptyState query={query} />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 animate-fade-in sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} onOpen={onOpen} />
          ))}
        </div>
      )}
    </section>
  )
}
