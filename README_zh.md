# Karpor 着陆页

[English](./README.md) | [中文](./README_zh.md)

### 简介

这是 Karpor 的官方着陆页。Karpor 是一个专注于搜索、洞察和 AI 能力的 Kubernetes 资源管理器。使用 Next.js 和 Tailwind CSS 构建，提供现代化和响应式的用户界面，展示 Karpor 的特性。

### 快速开始

1. **初始化**
   ```bash
   # 克隆仓库
   git clone https://github.com/KusionStack/karpor-landing-page.git
   cd karpor-landing-page

   # 安装依赖
   npm install
   ```

2. **配置**
   ```bash
   # 创建 .env.local 并添加 GA ID
   echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" > .env.local
   ```

3. **开发**
   ```bash
   # 启动开发服务器
   npm run dev
   ```

4. **生产**
   ```bash
   # 构建并启动
   npm run build
   npm start
   ```

5. **部署 (Vercel)**
   - 推送到 GitHub
   - 导入到 Vercel
   - 在项目设置中添加 `NEXT_PUBLIC_GA_ID`

### 特性

- 🎨 **现代化 UI/UX**：简洁直观的界面设计，流畅的过渡动画
- 📱 **响应式设计**：从移动端到桌面端的全设备优化适配
- ⚡ **性能优化**：资源优化和代码分割确保快速加载
- 📊 **数据分析**：内置 Google Analytics 支持

### 环境变量

在根目录创建 `.env.local` 文件：

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # 你的 Google Analytics 测量 ID
```

Vercel 生产环境部署配置：
1. 进入项目设置
2. 找到环境变量设置
3. 添加 `NEXT_PUBLIC_GA_ID` 并填入你的 GA 测量 ID
4. 选择需要应用的环境（生产/预览/开发）

### Google Analytics 事件追踪

以下是在 Google Analytics 中追踪的事件：

### 导航事件
- 类别: `Navigation`
  - Logo 点击 (`label: 'Logo'`)
  - 导航链接点击 (`label: [链接名称]`)
  - 开始使用按钮点击 (`label: 'Get Started'`)

### Hero 区域事件
- 类别: `Hero`
  - GitHub 按钮点击 (`label: 'GitHub Button'`)
  - 在线演示按钮点击 (`label: 'Live Demo Button'`)
  - Product Hunt 按钮点击 (`label: 'Product Hunt Button'`)

### CTA 区域事件
- 类别: `CTA`
  - 复制命令点击 (`label: 'Copy Command'`)
  - 高级安装链接点击 (`label: 'Advanced Installation'`)

所有事件包含以下属性：
- `action: 'click'`
- `category: ['Navigation', 'Hero', 'CTA']`
- `label: [具体按钮/链接名称]`
- `value: 1`

你可以在 Google Analytics 的以下位置查看这些事件：
- 行为 > 事件 > 概览
- 行为 > 事件 > 主要事件

### 技术栈

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Google Analytics 4

### 社区

- ⭐ 在 [GitHub](https://github.com/KusionStack/karpor) 上为我们点星
- 🏆 在 [Product Hunt](https://www.producthunt.com/posts/karpor) 上支持我们

### 许可证

Apache License 2.0
