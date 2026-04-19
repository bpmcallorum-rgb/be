const express = require('express');
const app = express();
const PORT = 8091;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solas</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'EB Garamond', serif;
      background: #08080c;
      color: #c8a96e;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .stars {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #c8a96e;
      border-radius: 50%;
      animation: twinkle 3s infinite;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    .container {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 1000px;
      padding: 40px;
    }

    .line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      font-size: 24px;
      letter-spacing: 2px;
      margin: 20px 0;
      animation: fadeIn 1.5s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .braces {
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 4px;
    }

    .name {
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 8px;
      text-transform: uppercase;
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(200, 169, 110, 0.3);
      }
      50% {
        text-shadow: 0 0 20px rgba(200, 169, 110, 0.6);
      }
    }

    .port {
      font-family: 'Fira Code', monospace;
      font-size: 18px;
      letter-spacing: 1px;
      color: #c8a96e;
    }
  </style>
</head>
<body>
  <div class="stars" id="stars"></div>
  <div class="container">
    <div class="line">
      <span class="braces">{{{{{{{</span>
      <span class="braces">IRISH</span>
      <span class="braces">}}}}}}}</span>
    </div>

    <div class="name">SOLAS</div>

    <div class="line">
      <span class="port">localhost: 8091</span>
    </div>

    <div class="line">
      <span class="braces">{{{{{{{</span>
      <span class="braces">LIGHT</span>
      <span class="braces">}}}}}}}</span>
    </div>
  </div>

  <script>
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }
  </script>
</body>
</html>`;

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Solas dev server running at http://localhost:${PORT}`);
});
