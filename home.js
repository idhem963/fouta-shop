document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollBtn");
  const storeSection = document.getElementById("store");

  if (scrollBtn && storeSection) {
    scrollBtn.addEventListener("click", () => {
      storeSection.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    console.warn("⚠️ scrollBtn or store section not found in the DOM.");
  }
});