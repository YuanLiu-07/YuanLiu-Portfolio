# Portfolio AI 项目介绍提纲

## 一、项目概述

- 项目名称与定位：个人作品集网站（Portfolio），集成 AI 聊天助手
- 技术栈：Next.js 16、React 19、TypeScript、Tailwind CSS、Framer Motion、OpenAI API
- 目标：展示个人背景与技能，并通过 AI 助手与访客互动、介绍本人信息

---

## 二、功能模块

### 2.1 个人主页展示

- **Hero 区**：全屏首屏，姓名、学校（Kean University）、方向（AI/NLP），辅以动效与渐变
- **实习经历（Experience）**：时间线式展示实习（如 Capgemini、Dify 工作流等）
- **技能与工具（Skills & Tools）**：分三类展示  
  - Technologies：Java, Python, R, JavaScript, TypeScript  
  - Software：VS Code, Visual Paradigm, IntelliJ, PyCharm, RStudio, LM Studio, Docker  
  - Operating Systems：Windows, macOS, Linux (Ubuntu, Fedora, Kali)

### 2.2 AI 聊天助手（ChatWidget）

- 右下角悬浮入口，点击展开聊天窗口
- 对接 OpenAI Chat Completions API（如 gpt-4o-mini）
- **系统角色设定**：AI 扮演“Yuan Liu 的个人助理”，依据预设个人信息回答访客问题（如“Who is Yuan Liu?”）
- 多轮对话、加载状态、自动滚动等基础交互

---

## 三、技术实现要点

### 3.1 前端

- App Router（`app/page.tsx`）组织首页与布局
- 组件化：Hero、Experience、Skills、ChatWidget 独立组件，便于维护与扩展
- 灰色主题（非纯黑），统一配色与边框（如 emerald 强调色）
- 动效：Framer Motion 用于入场动画与 Skills 区块的 stagger 效果

### 3.2 后端与 API

- **环境变量**：`OPENAI_API_KEY` 存放在 `.env.local`，不提交版本库
- **接口**：`POST /api/chat` 接收 `messages` 数组，拼接系统 prompt 后调用 OpenAI，返回 AI 回复
- **系统 Prompt**：在请求中注入“个人助理”人设及完整个人信息（教育、实习、技术、软件、系统），保证回答与页面一致

### 3.3 安全与配置

- API Key 仅服务端使用，前端不暴露
- `.gitignore` 覆盖 `.env*`，避免密钥泄露

---

## 四、项目结构（简要）

```
portfolio-ai/
├── app/
│   ├── page.tsx          # 首页，组装各区块
│   ├── layout.tsx        # 根布局与字体
│   ├── globals.css       # 全局样式与主题变量
│   └── api/chat/
│       └── route.ts      # 聊天 API，含系统 prompt
├── components/
│   ├── Hero.tsx          # 首屏介绍
│   ├── Experience.tsx    # 实习经历
│   ├── Skills.tsx        # 技能与工具
│   └── ChatWidget.tsx    # AI 聊天组件
├── .env.local            # OpenAI API Key（本地，不提交）
├── package.json          # 依赖（next, react, openai, framer-motion, tailwind 等）
└── PROJECT_OUTLINE.md    # 本提纲
```

---

## 五、可扩展方向

- 增加 Projects 区块，展示具体项目与链接
- 聊天支持流式输出（streaming），提升体验
- 多语言或主题切换（如亮色/暗色）
- 部署到 Vercel 等平台并配置生产环境变量

---

## 六、总结

本项目是一个集成了 OpenAI 的现代个人作品集网站：页面清晰展示教育、经历与技能，AI 助手在统一人设与信息下回答访客问题，技术上采用 Next.js 全栈、组件化与灰色主题，便于后续扩展与维护。
