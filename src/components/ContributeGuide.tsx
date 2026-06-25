const SDK_NPM = 'https://www.npmjs.com/package/@metago-ai/skills-sdk'
const REPO_GITHUB = 'https://github.com/metago-ai/metagolifeform'
const REPO_GITEE = 'https://gitee.com/metago/metagolifeform'

interface StepProps {
  index: number
  title: string
  children: React.ReactNode
}

function Step({ index, title, children }: StepProps) {
  return (
    <div className="relative flex gap-4">
      {/* 序号 */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-emerald/30 bg-accent-emerald/10 font-mono text-sm font-semibold text-accent-emerald">
        {index}
      </div>
      <div className="min-w-0 flex-1 pb-2">
        <h4 className="text-base font-semibold text-zinc-100">{title}</h4>
        <div className="mt-1.5 text-sm leading-relaxed text-zinc-400">{children}</div>
      </div>
    </div>
  )
}

export function ContributeGuide() {
  return (
    <section id="contribute" className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* 分隔发光线 */}
      <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-accent-emerald/30 to-transparent" />

      <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-card/60 p-6 backdrop-blur-sm sm:p-10">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald">
            Contribute
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-zinc-50">如何贡献新技能</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            MetaGO 技能以标准 <code className="rounded bg-bg-deep px-1.5 py-0.5 font-mono text-xs text-accent-emerald">SKILL.md</code>{' '}
            格式定义（YAML frontmatter + Markdown 正文）。任何人都可以基于 Skills SDK
            编程化地定义、校验、打包并分发自己的元构技能。
          </p>

          {/* 3 步说明 */}
          <div className="mt-8 space-y-6">
            <Step index={1} title="安装 Skills SDK">
              使用官方 SDK 以编程方式定义技能，告别手写大量 Markdown：
              <pre className="code-block mt-2 overflow-x-auto rounded-lg border border-border-subtle bg-bg-deep/80 px-3 py-2 text-accent-emerald">
{`npm install @metago-ai/skills-sdk`}
              </pre>
            </Step>

            <Step index={2} title="创建 SKILL.md 文件">
              新建技能，<code className="mx-0.5 rounded bg-bg-deep px-1.5 py-0.5 font-mono text-xs text-accent-emerald">name</code>{' '}
              字段须以 <code className="mx-0.5 rounded bg-bg-deep px-1.5 py-0.5 font-mono text-xs text-accent-emerald">metago-</code>{' '}
              开头，并填写 <code className="mx-0.5 rounded bg-bg-deep px-1.5 py-0.5 font-mono text-xs text-accent-emerald">description</code>{' '}
              与正文（描述 / 触发条件 / 核心流程 / 输出格式 / 协同）：
              <pre className="code-block mt-2 overflow-x-auto rounded-lg border border-border-subtle bg-bg-deep/80 px-3 py-2 text-zinc-300">
{`---
name: "metago-your-skill"
description: "一句话描述技能的能力与边界。"
---

# 技能名（metago-your-skill）

## 描述
...
## 触发条件
...
## 核心流程
...
## 输出格式
...
## 与其他技能的协同
- 与 \`metago-xxx\` 协同：...`}
              </pre>
            </Step>

            <Step index={3} title="提交到仓库">
              将技能目录提交到 Gitee / GitHub 仓库，通过校验后即可纳入技能市场，供所有人发现与安装。
            </Step>
          </div>

          {/* 链接 */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SDK_NPM} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Skills SDK 文档
            </a>
            <a href={REPO_GITHUB} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              GitHub 仓库
            </a>
            <a href={REPO_GITEE} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Gitee 镜像
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
