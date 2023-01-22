let c = document.getElementById("my-canvas");
let body = document.querySelector("body")

const ctx = c.getContext("2d");
ctx.imageSmoothingEnabled = true;

c.width = window.innerWidth
c.height = window.innerHeight

// Set the number of rows and columns
const rows = 20;
const columns = 20;

// Set the radius of the circles
let radius = 0;

// Set the distance between the circles
const padding = 10;

let start = performance.now();

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, c.width, c.height);

  // Draw the grid of circles
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Calculate the x and y coordinates of the center of the circle
      let x = (500 + j * (50 + padding));
      let y = (10 + i * (50 + padding));

      // Draw the circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  radius+=0.1

   // Repeat the animation if the radius is less than a certain value
    requestAnimationFrame(animate);
}

animate()