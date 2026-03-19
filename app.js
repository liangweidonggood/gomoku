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

// 处理canvas点击
function handleCanvasClick(event) {
    // TODO: 实现点击落子逻辑
}

// 检查是否获胜
function checkWin(row, col) {
    // TODO: 实现胜负判断
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