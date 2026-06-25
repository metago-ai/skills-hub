import { useEffect, useState } from 'react'
import type { Skill } from '../types'
import { CATEGORY_LABEL } from '../data/skills'

interface SkillDetailProps {
  skill: Skill | null
  onClose: () => void
}

const CATEGORY_BADGE = {
  core: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  devkit: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
} as const

/** 复制文本到剪贴板（含降级方案） */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.top = '-9999px'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/** 下载 SKILL.md */
function downloadSkillMd(skill: Skill) {
  const blob = new Blob([skill.skillMd], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'SKILL.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function SkillDetail({ skill, onClose }: SkillDetailProps) {
  const [copied, setCopied] = useState(false)

  // Esc 关闭 + 锁定背景滚动
  useEffect(() => {
    if (!skill) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [skill, onClose])

  // 切换技能时重置复制状态
  useEffect(() => {
    setCopied(false)
  }, [skill?.id])

  if (!skill) return null

  const handleCopy = async () => {
    const ok = await copyText(skill.skillMd)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${skill.name} 详情`}
    >
      {/* 遮罩 */}
      <div
        className="absolute inset-0 animate-fade-in bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 面板 */}
      <div className="relative flex max-h-[92vh] w-full max-w-3xl animate-scale-in flex-col overflow-hidden rounded-t-2xl border border-border-default bg-bg-card shadow-card sm:rounded-2xl">
        {/* 头部 */}
        <div className="flex items-start justify-between gap-4 border-b border-border-subtle p-5 sm:p-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">{skill.id}</span>
              <span className={`badge border ${CATEGORY_BADGE[skill.category]}`}>
                {CATEGORY_LABEL[skill.category]}
              </span>
            </div>
            <h2 className="mt-1.5 font-display text-2xl font-bold text-zinc-50">{skill.name}</h2>
            <p className="mt-1 text-sm text-zinc-400">{skill.detail}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭"
            className="shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-bg-hover hover:text-zinc-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 主体 */}
        <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
          {/* 标签 */}
          <div className="flex flex-wrap gap-1.5">
            {skill.tags.map((t) => (
              <span key={t} className="rounded-md bg-bg-elevated px-2 py-0.5 text-xs text-zinc-400">
                #{t}
              </span>
            ))}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={handleCopy} className={copied ? 'btn-primary' : 'btn-secondary'}>
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  已复制
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  复制 SKILL.md
                </>
              )}
            </button>
            <button type="button" onClick={() => downloadSkillMd(skill)} className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              下载 SKILL.md
            </button>
          </div>

          {/* SKILL.md 预览 */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">SKILL.md 预览</h3>
              <span className="font-mono text-[10px] text-zinc-600">{skill.skillMd.length} 字符</span>
            </div>
            <pre className="code-block max-h-80 overflow-auto rounded-lg border border-border-subtle bg-bg-deep/80 p-4 text-zinc-300">
              {skill.skillMd}
            </pre>
          </div>

          {/* 安装说明 */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">安装说明</h3>
            <div className="mt-2 space-y-3 rounded-lg border border-border-subtle bg-bg-elevated/40 p-4 text-sm text-zinc-300">
              <div>
                <p className="font-medium text-zinc-200">方式一：手动安装</p>
                <ol className="mt-1.5 list-decimal space-y-1 pl-5 text-zinc-400">
                  <li>点击上方「复制 SKILL.md」或「下载 SKILL.md」</li>
                  <li>
                    在 MetaGO 技能目录下创建文件夹：
                    <code className="mx-1 rounded bg-bg-deep px-1.5 py-0.5 font-mono text-xs text-accent-emerald">
                      {skill.id}/
                    </code>
                  </li>
                  <li>将内容保存为 <code className="rounded bg-bg-deep px-1 py-0.5 font-mono text-xs text-accent-emerald">SKILL.md</code></li>
                  <li>重启 MetaGO Agent 即可加载该技能</li>
                </ol>
              </div>
              <div>
                <p className="font-medium text-zinc-200">方式二：通过 Skills SDK</p>
                <pre className="code-block mt-1.5 overflow-x-auto rounded bg-bg-deep px-3 py-2 text-accent-emerald">
{`npx @metago-ai/skills-sdk add ${skill.id}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
