# 五子棋游戏实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现一个基于 HTML Canvas 的双人五子棋游戏，支持轮流落子、自动判断胜负和重新开始游戏。

**Architecture:** 采用简单的三文件分离结构，HTML 负责页面结构，CSS 负责样式布局，JavaScript 负责游戏逻辑。不需要构建工具和依赖，直接在浏览器运行。

**Tech Stack:** 原生 HTML5 + CSS3 + JavaScript，Canvas API 绘图。

---

### Task 1: 创建 index.html 入口文件

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建 HTML 文件**

创建基本 HTML 结构，包含 canvas 元素、状态提示和重新开始按钮。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>五子棋 - Gomoku</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>五子棋</h1>
        <div id="status" class="status">黑方先行</div>
        <canvas id="board"></canvas>
        <div class="controls">
            <button id="restartBtn">重新开始</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: create index.html entry file"
```

---

### Task 2: 创建 style.css 样式文件

**Files:**
- Create: `style.css`

- [ ] **Step 1: 创建样式文件**

添加居中布局、简洁浅色风格样式。

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 16px;
}

.status {
    font-size: 18px;
    color: #555;
    margin-bottom: 16px;
    font-weight: 500;
}

.status.win {
    color: #2ecc71;
    font-size: 20px;
}

canvas {
    background-color: #d4a574;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.controls {
    margin-top: 20px;
}

button {
    padding: 10px 24px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #2980b9;
}
```

- [ ] **Step 2: Commit**

```bash
git add style.css
git commit -m "feat: create style.css with basic layout"
```

---

### Task 3: 创建 app.js 基础游戏框架

**Files:**
- Create: `app.js`

- [ ] **Step 1: 创建基础游戏结构**

定义常量、游戏状态和初始化函数。

```javascript
// 游戏常量
const BOARD_SIZE = 15;           // 15×15 棋盘
const GRID_SIZE = 30;            // 每个格子像素大小
const PIECE_RADIUS = 13;         // 棋子半径
const CANVAS_SIZE = BOARD_SIZE * GRID_SIZE;

// 棋子颜色
const COLORS = {
    1: '#000000',  // 黑棋
    2: '#ffffff'   // 白棋
};

// 游戏状态
let canvas, ctx;
let board = [];
let currentPlayer = 1;  // 1=黑, 2=白
let gameOver = false;
let statusElement;

// 初始化游戏
function initGame() {
    // 初始化棋盘二维数组，0表示空位
    board = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(0));
    currentPlayer = 1;
    gameOver = false;
    updateStatus();
    drawBoard();
}

// 更新状态提示
function updateStatus(message) {
    if (gameOver) {
        const winner = currentPlayer === 1 ? '黑方' : '白方';
        statusElement.textContent = `${winner}获胜！`;
        statusElement.classList.add('win');
    } else {
        const turn = currentPlayer === 1 ? '黑方' : '白方';
        statusElement.textContent = message || `${turn}回合`;
        statusElement.classList.remove('win');
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');
    statusElement = document.getElementById('status');
    const restartBtn = document.getElementById('restartBtn');

    // 设置canvas尺寸
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    // 绑定点击事件
    canvas.addEventListener('click', handleCanvasClick);
    restartBtn.addEventListener('click', initGame);

    // 开始游戏
    initGame();
});
```

- [ ] **Step 2: 占位绘制棋盘和点击处理函数**

在文件末尾添加：

```javascript
// 绘制棋盘
function drawBoard() {
    // TODO: 实现绘制棋盘网格
}

// 绘制单个棋子
function drawPiece(row, col, player) {
    // TODO: 实现绘制棋子
}

// 处理canvas点击
function handleCanvasClick(event) {
    // TODO: 实现点击落子逻辑
}

// 检查是否获胜
function checkWin(row, col) {
    // TODO: 实现胜负判断
}
```

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: create app.js basic game framework"
```

---

### Task 4: 实现绘制棋盘和棋子函数

**Files:**
- Modify: `app.js`

- [ ] **Step 1: 实现 drawBoard 函数**

替换 `drawBoard` 函数：

```javascript
// 绘制棋盘
function drawBoard() {
    // 清空画布
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // 绘制网格线
    ctx.strokeStyle = '#8b4513';
    ctx.lineWidth = 1;

    for (let i = 0; i < BOARD_SIZE; i++) {
        // 横线
        ctx.beginPath();
        ctx.moveTo(GRID_SIZE/2, GRID_SIZE/2 + i * GRID_SIZE);
        ctx.lineTo(CANVAS_SIZE - GRID_SIZE/2, GRID_SIZE/2 + i * GRID_SIZE);
        ctx.stroke();

        // 竖线
        ctx.beginPath();
        ctx.moveTo(GRID_SIZE/2 + i * GRID_SIZE, GRID_SIZE/2);
        ctx.lineTo(GRID_SIZE/2 + i * GRID_SIZE, CANVAS_SIZE - GRID_SIZE/2);
        ctx.stroke();
    }

    // 绘制已经落下的棋子
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (board[row][col] !== 0) {
                drawPiece(row, col, board[row][col]);
            }
        }
    }
}
```

- [ ] **Step 2: 实现 drawPiece 函数**

替换 `drawPiece` 函数：

```javascript
// 绘制单个棋子
function drawPiece(row, col, player) {
    const x = col * GRID_SIZE + GRID_SIZE/2;
    const y = row * GRID_SIZE + GRID_SIZE/2;

    ctx.beginPath();
    ctx.arc(x, y, PIECE_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = COLORS[player];
    ctx.fill();

    // 添加边框阴影让棋子更立体
    ctx.strokeStyle = player === 1 ? '#333' : '#ccc';
    ctx.lineWidth = 1;
    ctx.stroke();
}
```

- [ ] **Step 3: 测试验证**

在浏览器打开 `index.html` 应该能看到棋盘网格。

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: implement drawBoard and drawPiece functions"
```

---

### Task 5: 实现点击落子逻辑

**Files:**
- Modify: `app.js`

- [ ] **Step 1: 实现 handleCanvasClick 函数**

替换 `handleCanvasClick` 函数：

```javascript
// 处理canvas点击
function handleCanvasClick(event) {
    if (gameOver) return;

    // 获取鼠标相对于canvas的坐标
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 转换为棋盘行列坐标
    const col = Math.round((x - GRID_SIZE/2) / GRID_SIZE);
    const row = Math.round((y - GRID_SIZE/2) / GRID_SIZE);

    // 检查是否在合法范围内
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
        return;
    }

    // 检查位置是否已经有棋子
    if (board[row][col] !== 0) {
        return;
    }

    // 落子
    board[row][col] = currentPlayer;
    drawPiece(row, col, currentPlayer);

    // 检查是否获胜
    if (checkWin(row, col)) {
        gameOver = true;
        updateStatus();
        return;
    }

    // 切换玩家
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateStatus();
}
```

- [ ] **Step 2: 测试**

打开浏览器，应该可以点击落子，轮流切换黑白棋。

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: implement handleCanvasClick click-to-place logic"
```

---

### Task 6: 实现胜负判断算法

**Files:**
- Modify: `app.js`

- [ ] **Step 1: 实现 checkWin 函数**

替换 `checkWin` 函数：

```javascript
// 检查是否获胜，四个方向检查
function checkWin(row, col) {
    const player = board[row][col];
    const directions = [
        [[0, 1], [0, -1]],    // 水平方向
        [[1, 0], [-1, 0]],    // 垂直方向
        [[1, 1], [-1, -1]],   // 对角线 \
        [[1, -1], [-1, 1]]    // 对角线 /
    ];

    // 检查每个方向
    for (const [dir1, dir2] of directions) {
        let count = 1;  // 当前位置已经有一个

        // 向第一个方向数
        let r = row + dir1[0];
        let c = col + dir1[1];
        while (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE && board[r][c] === player) {
            count++;
            r += dir1[0];
            c += dir1[1];
        }

        // 向相反方向数
        r = row + dir2[0];
        c = col + dir2[1];
        while (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE && board[r][c] === player) {
            count++;
            r += dir2[0];
            c += dir2[1];
        }

        // 达到五个就连线获胜
        if (count >= 5) {
            return true;
        }
    }

    return false;
}
```

- [ ] **Step 2: 测试胜负判断**

在浏览器中连成五子，应该能正确提示获胜，并且无法继续落子。

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: implement checkWin victory detection"
```

---

### Task 7: 添加 README 和 .gitignore

**Files:**
- Create: `README.md`
- Create: `.gitignore`

- [ ] **Step 1: 创建 README.md**

```markdown
# 五子棋 Gomoku

一个基于 HTML Canvas 的纯 JavaScript 五子棋双人对战游戏。

## 功能

- 15×15 标准棋盘
- 双人轮流落子（黑先白后）
- 自动判断胜负
- 重新开始游戏
- 纯原生实现，无依赖

## 运行方式

直接用浏览器打开 `index.html` 即可开始游戏。

```
open index.html
```

或者使用本地服务器：

```bash
# Python 3
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 玩法

两位玩家在同一设备上轮流点击棋盘落子，先连成五子一线的一方获胜。点击重新开始按钮可以随时重新游戏。
```

- [ ] **Step 2: 创建 .gitignore**

```
# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
*~
```

- [ ] **Step 3: Commit**

```bash
git add README.md .gitignore
git commit -m "docs: add README and .gitignore"
```

---

### Task 8: 整体功能验证

- [ ] **Step 1: 验证所有功能**

  - 验证黑先白后轮流落子正确
  - 验证四个方向五子连线都能正确判断胜负
  - 验证游戏结束后无法继续落子
  - 验证重新开始按钮正确重置游戏

- [ ] **Step 2: Commit 如有修改**

```bash
git add .
git commit -m "test: complete full function verification"
```

---

### Task 9: 使用 gh 创建 GitHub 仓库并推送

**Files:**
- 这一步需要 GitHub CLI 已经认证

- [ ] **Step 1: 初始化本地 git 仓库**

```bash
git init
git add .
git commit -m "Initial commit: complete gomoku game"
```

- [ ] **Step 2: 创建 GitHub 远程仓库并推送**

```bash
gh repo create gomoku --public --source . --push
```
