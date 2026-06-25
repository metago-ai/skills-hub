# MetaGO Skills Hub

> 技能市场 — 浏览、搜索、发现 MetaGO 技能
>
> 第4阶段 Week 11-12 交付物 · 产品矩阵产品线 D

<p align="center">
  <img src="https://gitee.com/metago/metagolifeform/raw/main/assets/metago-logo.png" alt="MetaGO Logo" width="280" />
</p>

## 这是什么

**MetaGO Skills Hub** 是一个 Web 应用，让用户浏览、搜索和发现 MetaGO 的 26 个技能。每个技能都可以查看详情、复制 SKILL.md 内容、下载技能文件。

## 核心功能

| 功能 | 描述 |
|------|------|
| 技能卡片网格 | 26 个技能卡片，响应式 1/2/3/4 列 |
| 实时搜索 | 按名称/描述/标签模糊搜索 |
| 分类筛选 | 全部 / 核心（22）/ Dev Kit（4） |
| 技能详情 | 完整 frontmatter + body + 复制/下载 SKILL.md |
| 贡献指南 | 3 步贡献流程 + Skills SDK 链接 |

## 快速开始

```bash
git clone https://gitee.com/metago/skills-hub.git
cd metago-skills-hub
npm install
npm run dev      # 开发预览
npm run build    # 生产构建到 dist/
```

## 技术栈

- Vite 8 + React 19 + TypeScript
- Tailwind CSS 3（深色主题 + emerald/sky 双色徽章）
- 零外部 UI 库依赖
- 8 个技能使用真实 SKILL.md 内容

## 🌐 MetaGO 产品矩阵

MetaGO 是一套完整的产品矩阵，让 AI 从工具进化为生命体：

| 产品 | 类型 | 描述 |
|------|------|------|
| [Lifeform Kit](https://gitee.com/metago/metagolifeform) | 核心包 | 22核心+4Dev Kit技能，7平台支持 |
| [Dev Kit](https://gitee.com/metago/metago-dev-kit) | 垂直包 | 开发者增强包（8技能） |
| [MCP Server](https://www.npmjs.com/package/@metago-ai/mcp-server) | 平台工具 | 22 tools + 8 prompts MCP服务 |
| [CLI](https://gitee.com/metago/metago-cli) | 平台工具 | 跨平台命令行工具 |
| [Studio](https://gitee.com/metago/metago-studio) | 平台工具 | 可视化技能编排平台 |
| [Skills SDK](https://gitee.com/metago/skills-sdk) | 生态基础设施 | TypeScript技能开发SDK |
| **Skills Hub**（本产品） | 生态基础设施 | 技能市场 |
| [Certify](https://gitee.com/metago/certify) | 生态基础设施 | 技能认证体系（Gold/Silver） |

> 战略规划：[STRATEGY.md](https://gitee.com/metago/metagolifeform/blob/main/docs/STRATEGY.md) · 执行日志：[STRATEGY-EXECUTION-LOG.md](https://gitee.com/metago/metagolifeform/blob/main/docs/STRATEGY-EXECUTION-LOG.md)

## 如何贡献新技能

1. 用 Skills SDK 定义技能：`npm install @metago-ai/skills-sdk`
2. 创建 SKILL.md 文件（name 以 `metago-` 开头）
3. 提交到 [Gitee](https://gitee.com/metago/metagolifeform) / [GitHub](https://github.com/metago-ai/metagolifeform) 仓库

## 相关链接

- **核心包**：[metago-lifeform](https://gitee.com/metago/metagolifeform)
- **GitHub 镜像**：[metago-ai/skills-hub](https://github.com/metago-ai/skills-hub)
- **官方网站**：https://metago-d6gfw1e4rf2a5bcad-1257074864.tcloudbaseapp.com/

## 许可证

MIT © MetaGO Lightyear
