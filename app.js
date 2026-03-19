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