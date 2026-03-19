# CLAUDE.md

本文件为 Claude Code 在此仓库工作时提供指引。

## 项目概述

纯 HTML/CSS/JavaScript 五子棋，使用 Canvas API。无需构建工具，无第三方依赖，仅静态文件。

## 常用命令

无需构建，本地运行方式：

```bash
# 直接打开
open index.html

# 或者启动本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

JavaScript 语法检查：

```bash
node -c app.js
```

## 架构

- **`index.html`** - 入口文件，包含 canvas 元素、状态显示和按钮
- **`style.css`** - 样式，居中游戏，现代简洁设计
- **`app.js`** - 完整游戏逻辑：
  - 常量：`BOARD_SIZE = 15`, 每个格子 `GRID_SIZE = 30px`
  - 状态：`board[][]` (0=空, 1=黑棋, 2=白棋), `currentPlayer`, `gameOver`, `lastMove` (最后一步)
  - `initGame()` - 重置游戏状态
  - `drawBoard()` - 清空画布，绘制网格和棋子
  - `drawPiece()` - 绘制单个棋子，带立体阴影效果
  - `handleCanvasClick()` - 点击坐标转棋盘坐标，验证移动，落子，检查胜负，切换玩家
  - `checkWin(row, col)` - 检查四个方向（横、竖、两个对角线）是否有5个以上连续棋子 - 获胜返回 true
  - `undoLastMove()` - 悔棋，撤销最后一步
  - `updateStatus()` - 更新状态文本显示

## 核心算法

胜负检测从最后落子位置开始，在四个可能获胜方向分别向两边计数连续相同棋子。这种方法比扫描整个棋盘更高效。

## 游戏规则

- 15×15 标准棋盘
- 黑方先行
- 玩家轮流点击棋盘落子
- 先在一条直线（横、竖、斜）连成五子者获胜
- 点击「重新开始」可随时重新游戏
- 点击「悔棋」可撤销最后一步
