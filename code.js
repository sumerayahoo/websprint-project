const card = document.getElementById("card");

document.addEventListener("click", () => {
  card.classList.toggle("flipped");
});
const grid = document.getElementById("grid");
const SIZE = 200;

function fillPage() {
  grid.innerHTML = "";

  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  const cols = Math.ceil(width / SIZE);
  const rows = Math.ceil(height / SIZE);

  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const box = document.createElement("div");
    box.className = "box";
    grid.appendChild(box);
  }
}
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const text = "STUDYSPRINT";
const fontSize = 180;

ctx.font = `bold ${fontSize}px Arial`;
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(text, canvas.width / 2, canvas.height / 2);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let y = 0; y < canvas.height; y += 6) {
  for (let x = 0; x < canvas.width; x += 6) {
    const i = (y * canvas.width + x) * 4;
    if (imageData[i + 3] > 150) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        tx: x,
        ty: y
      });
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFFFFF";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#F4F9FF";

  particles.forEach(p => {
    p.x += (p.tx - p.x) * 0.08;
    p.y += (p.ty - p.y) * 0.08;
    ctx.fillRect(p.x, p.y, 2, 2);
  });

  requestAnimationFrame(animate);
}

animate();
