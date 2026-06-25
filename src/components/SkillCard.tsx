import type { Skill } from '../types'
import { CATEGORY_LABEL } from '../data/skills'

interface SkillCardProps {
  skill: Skill
  onOpen: (skill: Skill) => void
}

/** 分类配色：核心 = emerald，Dev Kit = sky/blue */
const CATEGORY_STYLES = {
  core: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    glow: 'hover:border-emerald-500/40 hover:shadow-glow',
    accent: 'bg-emerald-400',
    hoverText: 'group-hover:text-emerald-300',
  },
  devkit: {
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    glow: 'hover:border-sky-500/40 hover:shadow-glow-blue',
    accent: 'bg-sky-400',
    hoverText: 'group-hover:text-sky-300',
  },
} as const

export function SkillCard({ skill, onOpen }: SkillCardProps) {
  const s = CATEGORY_STYLES[skill.category]
  return (
    <button
      type="button"
      onClick={() => onOpen(skill)}
      className={`card-base group flex flex-col p-5 text-left ${s.glow} hover:-translate-y-0.5`}
    >
      {/* 技能 ID + 分类标签 */}
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] text-zinc-500 transition-colors group-hover:text-zinc-300">
          {skill.id}
        </span>
        <span className={`badge border ${s.badge}`}>{CATEGORY_LABEL[skill.category]}</span>
      </div>

      {/* 分类强调线 */}
      <div className={`mt-4 h-px w-full ${s.accent} opacity-20 transition-opacity group-hover:opacity-70`} />

      {/* 标题 + 简述 */}
      <h3 className="mt-3 text-lg font-semibold text-zinc-100">{skill.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
        {skill.detail}
      </p>

      {/* 标签 */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-bg-elevated px-2 py-0.5 text-[11px] text-zinc-400"
          >
            #{t}
          </span>
        ))}
      </div>

      {/* 查看详情 */}
      <div
        className={`mt-4 flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors ${s.hoverText}`}
      >
        查看详情
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}
