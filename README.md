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
