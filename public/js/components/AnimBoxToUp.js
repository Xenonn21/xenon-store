const container = document.getElementById("bg-anim");

const sizes = [16, 24, 32, 40];
const speeds = [8, 10, 12];
const radiuses = ["10%", "20%", "30%"];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createBox() {
  const box = document.createElement("div");
  box.className = "box";

  const duration = rand(speeds);

  box.style.setProperty("--size", rand(sizes) + "px");
  box.style.setProperty("--duration", duration + "s");

  box.style.left = Math.random() * 100 + "vw";

  // 🔥 arah belok (2 titik biar kayak curve)
  const x1 = (Math.random() - 0.5) * 100;
  const x2 = x1 + (Math.random() - 0.5) * 100;

  box.style.setProperty("--moveX1", x1 + "px");
  box.style.setProperty("--moveX2", x2 + "px");

  // rotate halus
  box.style.setProperty("--rotate", (Math.random() * 360 + 180) + "deg");

  box.style.setProperty("--opacity", Math.random() * 0.2 + 0.15);
  box.style.setProperty("--radius", rand(radiuses));

  // glow ringan
  if (Math.random() > 0.75) {
    box.style.boxShadow = "0 0 10px rgba(139,92,246,0.25)";
  }

  container.appendChild(box);

  setTimeout(() => box.remove(), duration * 1000);
}

// 🔥 spawn santai (tidak rame)
let last = 0;

function loop(t) {
  if (t - last > 1000) {
    if (container.childElementCount < 10) {
      createBox();
    }
    last = t;
  }
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);