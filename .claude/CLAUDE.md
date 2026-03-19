# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Pure HTML/CSS/JavaScript Gomoku (Five in a Row) game using Canvas API. No build tools, no dependencies, just static files.

## Commands

No build required. Run locally with:

```bash
# Direct open
open index.html

# Or start local server
python -m http.server 8000
# Then visit http://localhost:8000
```

JavaScript syntax check:

```bash
node -c app.js
```

## Architecture

- **`index.html`** - Entry point, contains canvas element, status display, and restart button
- **`style.css`** - Styling, centers game on page, modern clean design
- **`app.js`** - Full game logic:
  - Constants: `BOARD_SIZE = 15`, `GRID_SIZE = 30px` per cell
  - State: `board[][]` (0=empty, 1=black, 2=white), `currentPlayer`, `gameOver`
  - `initGame()` - Reset game state
  - `drawBoard()` - Clear canvas and draw grid + pieces
  - `drawPiece()` - Draw single piece with 3D shading effect
  - `handleCanvasClick()` - Convert click coordinates to grid, validate move, place piece, check win, switch player
  - `checkWin(row, col)` - Check four directions (horizontal, vertical, two diagonals) for 5+ consecutive pieces - returns true if win
  - `updateStatus()` - Update status text display

## Key Algorithms

Win detection starts from the last placed piece and counts consecutive matching pieces in both directions for each of the four possible winning lines. This is more efficient than scanning the entire board.

## Game Rules

- 15×15 standard board
- Black plays first
- Players alternate turns clicking to place pieces
- First player with five consecutive pieces in a line (horizontal, vertical, or diagonal) wins
- Click "重新开始" to restart the game at any time
