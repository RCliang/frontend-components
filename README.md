# 组件词典

这个站点解释组件库在讨论的词。词和库各有一页。点进一个词，例子已经打开。

## 本地查看

安装依赖，再启动开发服务器。

```bash
npm install
npm run dev
```

## 加一个词

1. 在 `TermId` 里加上这个 id。`DemoId` 和它是同一组 id。
2. 在 `src/content/terms.ts` 里写这个词。
3. 在词和库两边互相写上对方。
4. 在 `src/demos` 里加上例子，并登记到 `src/demos/registry.tsx`。
5. 运行 `npm test`。测试会检查词和库是否互相指向，以及搜索是否认得出这些词。

## 发布

把分支推到 `main`。GitHub Actions 会跑 `.github/workflows/pages.yml`。仓库设置里的 Pages 来源要选 GitHub Actions。

公开地址是 https://rcliang.github.io/frontend-components/ 。

Vite 的 `base` 来自 `BASE_PATH`。本地不设置它，地址是 `/`。工作流把 `BASE_PATH` 设为 `/frontend-components/`。
