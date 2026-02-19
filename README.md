# Cortex Memory Official Website

官网静态HTML页面，展示Cortex Memory项目的核心功能和设计理念。

## 🎨 设计特点

本网站设计参考了[OpenViking](https://www.openviking.ai/)的设计风格，特别是**Design Philosophy**区域的设计，同时结合Cortex Memory基于Rust实现的特色进行了差异化设计。

### 核心设计元素

- **主题色调**：深黑背景 + Rust橙红色强调（区别于OpenViking的深蓝色调）
- **配色方案**：
  - 主色：`#ff6b35` (Rust橙) → `#f7931e` (Rust金)
  - 强调色：`#00d9ff` (青色)、`#9947eb` (紫色)、`#28ca5b` (绿色)
- **字体家族**：
  - 标题：Space Grotesk
  - 正文：Inter
  - 代码：JetBrains Mono

### 页面区域

1. **Navigation** - 固定顶部导航栏
2. **Hero Section** - 核心价值主张 + 粒子动画背景
3. **Why Cortex Memory** - 三大核心优势（Rust性能、生产就绪、易集成）
4. **Design Philosophy** - 四大设计哲学（重度借鉴OpenViking设计）
   - Context Organization as a File System
   - Layered Context Loading
   - Recursive Context Retrieval
   - Observable and Self-Evolving Context
5. **Performance Benchmark** - 性能对比图表
6. **Architecture Overview** - 系统架构可视化
7. **Quick Start** - 快速开始指南
8. **Ecosystem** - 生态系统组件展示
9. **Footer** - 资源链接和社交媒体

## 🚀 使用方式

### 本地预览

直接在浏览器中打开 `index.html` 文件即可预览：

```bash
# 使用Python启动简单HTTP服务器
cd cortex-mem-site
python3 -m http.server 8080

# 或使用Node.js的http-server
npx http-server -p 8080
```

然后访问 `http://localhost:8080`

### 部署

本网站是纯静态HTML页面，可以部署到任何静态网站托管服务：

#### GitHub Pages

```bash
# 1. 创建gh-pages分支
git checkout --orphan gh-pages

# 2. 复制网站文件到根目录
cp -r cortex-mem-site/* .

# 3. 提交并推送
git add .
git commit -m "Deploy website"
git push origin gh-pages
```

#### Vercel

```bash
# 在项目根目录创建vercel.json
{
  "public": "cortex-mem-site"
}

# 然后使用Vercel CLI部署
vercel
```

#### Netlify

直接将 `cortex-mem-site` 文件夹拖拽到Netlify的部署界面即可。

## 📂 文件结构

```
cortex-mem-site/
├── index.html          # 主HTML文件（包含所有CSS和JS）
├── assets/             # 资源文件夹（暂时为空，可添加图片等）
└── README.md           # 本说明文档
```

## 🎯 技术实现

- **纯HTML + CSS + Vanilla JavaScript** - 无框架依赖
- **响应式设计** - 支持移动端和桌面端
- **动画效果**：
  - 粒子背景流动动画
  - 滚动触发的渐入动画
  - 卡片悬停交互效果
  - 图表数据动画展示
- **外部依赖**（通过CDN加载）：
  - Google Fonts（Inter、Space Grotesk、JetBrains Mono）
  - Font Awesome 6（图标库）

## 🔧 自定义修改

### 修改配色

在 `<style>` 标签的 `:root` 部分修改CSS变量：

```css
:root {
    --rust-orange: #ff6b35;  /* 主色 */
    --cyan: #00d9ff;         /* 强调色 */
    /* ... 其他颜色 */
}
```

### 修改内容

直接编辑 `index.html` 中的文本内容即可。

### 添加新区域

在现有section之间插入新的 `<section class="section">` 块。

## 📊 性能优化

- 使用CSS渐变和动画替代GIF/视频
- 延迟加载字体和图标
- 最小化外部依赖
- 使用Intersection Observer实现滚动动画，性能优异

## 📝 许可证

本网站代码遵循MIT许可证，与Cortex Memory项目保持一致。

## 🙏 致谢

设计灵感来源于[OpenViking](https://www.openviking.ai/)官网，特别感谢其优秀的Design Philosophy区域设计。
