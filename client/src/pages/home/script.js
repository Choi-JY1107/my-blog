const loadingText = document.getElementById("loading-screen");
let dotCount = 0;

if (loadingText) {
  const interval = setInterval(() => {
    dotCount = (dotCount % 3) + 1;
    loadingText.textContent = "로딩 중" + ".".repeat(dotCount);
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    if (loadingScreen) loadingScreen.style.display = "none";
    if (content) content.style.display = "block";
  }, 3000);
}
