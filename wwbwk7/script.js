// 🎬 Part 2: Functions, Scope, Parameters & Return

// A simple reusable function
function multiply(a, b) {
    return a * b;
  }
  
  // Demonstrate scope
  let globalMessage = "I'm a global variable!";
  
  function scopeDemo() {
    let localMessage = "I'm local to scopeDemo!";
    return `${globalMessage} | ${localMessage}`;
  }
  
  // Display results in the page
  document.getElementById("functionOutput").textContent =
    `multiply(5, 3) = ${multiply(5, 3)} | Scope: ${scopeDemo()}`;
  
  
  // 🎨 Part 3: Combining JS + CSS Animations
  const box = document.getElementById("box");
  const animateBtn = document.getElementById("animateBtn");
  const resetBtn = document.getElementById("resetBtn");
  
  // Function to trigger animation
  function triggerAnimation(element, className) {
    element.classList.add(className);
  
    // Remove the class after animation ends so it can be retriggered
    element.addEventListener("animationend", () => {
      element.classList.remove(className);
    }, { once: true });
  }
  
  // On click, animate the box
  animateBtn.addEventListener("click", () => {
    triggerAnimation(box, "animate");
  });
  
  // Reset button (uses direct style change)
  resetBtn.addEventListener("click", () => {
    box.style.transform = "translateX(0) scale(1)";
    box.style.opacity = "1";
    box.style.background = "coral";
  });
  