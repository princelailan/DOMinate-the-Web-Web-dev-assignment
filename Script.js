// Change text and styles
document.getElementById("changeTextBtn").addEventListener("click", () => {
  const heading = document.getElementById("main-heading");
  const subtext = document.getElementById("subtext");

  heading.textContent = "You just changed the DOM!";
  subtext.textContent = "JavaScript makes webpages interactive.";
  
  heading.style.color = "#e74c3c";
  subtext.style.color = "#8e44ad";
});

// Add or remove an element dynamically
document.getElementById("toggleElementBtn").addEventListener("click", () => {
  const container = document.getElementById("dynamicContent");
  const existing = document.getElementById("dynamicParagraph");

  if (existing) {
    existing.remove();
  } else {
    const para = document.createElement("p");
    para.id = "dynamicParagraph";
    para.textContent = "✨ This element was added dynamically!";
    container.appendChild(para);
  }
});
