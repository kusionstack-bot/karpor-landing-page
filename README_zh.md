# Karpor 着陆页

[English](./README.md) | [中文](./README_zh.md)

### 简介

这是 Karpor 的官方着陆页。Karpor 是一个专注于搜索、洞察和 AI 能力的 Kubernetes 资源管理器。使用 Next.js 和 Tailwind CSS 构建，提供现代化和响应式的用户界面，展示 Karpor 的特性。

### 特性

- 🎨 **现代化 UI/UX**：简洁直观的界面设计，流畅的过渡动画
- 📱 **响应式设计**：从移动端到桌面端的全设备优化适配
- ⚡ **性能优化**：资源优化和代码分割确保快速加载
- 📊 **数据分析**：内置 Google Analytics 支持

### 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

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

### 技术栈

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Google Analytics 4

### 许可证

Apache License 2.0
