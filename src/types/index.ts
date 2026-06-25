/**
 * MetaGO Skills Hub 类型定义
 */

/** 技能分类：core = 核心技能，devkit = Dev Kit 技能 */
export type SkillCategory = 'core' | 'devkit'

/** 排序方式 */
export type SortKey = 'name' | 'category'

/** 技能数据结构 */
export interface Skill {
  /** 技能唯一标识，如 metago-critique */
  id: string
  /** 技能中文名，如 批判性分析 */
  name: string
  /** 一句话简短描述（卡片用），如 L1-L5分级质疑 */
  description: string
  /** 完整描述（详情用） */
  detail: string
  /** 分类 */
  category: SkillCategory
  /** 标签 */
  tags: string[]
  /** 完整 SKILL.md 内容（frontmatter + body），用于复制 / 下载 */
  skillMd: string
}

/** 筛选器状态 */
export interface FilterState {
  query: string
  category: SkillCategory | 'all'
  sort: SortKey
}
