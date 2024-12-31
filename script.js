// script.js
const cube = document.getElementById('cube');
let scale = 1; // 初始缩放比例

// 监听滚轮事件来放大或缩小立方体
window.addEventListener('wheel', (event) => {
  // 检查滚动方向，向上滚动为放大，向下滚动为缩小
  if (eventY < 0) {
    // 放大
    scale = Math.min(scale + 0.1, 3); // 最大放大到 3 倍
  } else {
    // 缩小
    scale = Math.max(scale - 0.1, 0.5); // 最小缩小到 0.5 倍
  }

  // 更新立方体的缩放
  cube.style.transform = `scale(${scale}) rotateX(-30deg) rotateY(-45deg)`;
});
