const openbtn = document.getElementById("open-popup")
const closebtn = document.getElementById("closebtn")
const hidden = document.querySelector(".hidden")

openbtn.addEventListener("click", () =>{
  hidden.classList.add('active');
});

closebtn.addEventListener("click", () =>{
  hidden.classList.remove('active');
});

 document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("moreTips").style.display = "none";
  document.getElementById("moreBtn").textContent = "Show More";
});

document.addEventListener("DOMContentLoaded", function () {
  const moreTips = document.getElementById("moreTips");
  const moreBtn = document.getElementById("moreBtn");

  // Force initial state
  if (moreTips) moreTips.style.display = "none";
  if (moreBtn) {
    moreBtn.style.display = "inline-block";
    moreBtn.textContent = "Show More";
  }
});

// Show popup and reset tips
document.getElementById("openbtn").addEventListener("click", function () {
  resetTips(); // reset state before showing popup
  document.getElementById("overlay").classList.remove("hidden");
});

// Close popup
document.getElementById("closebtn").addEventListener("click", function () {
  document.getElementById("overlay").classList.add("hidden");
});

// Toggle Show More / Show Less
function toggleTips() {
  const moreTips = document.getElementById("moreTips");
  const moreBtn = document.getElementById("moreBtn");

  if (moreTips.style.display === "none") {
    moreTips.style.display = "block";
    moreBtn.textContent = "Less...";
  } else {
    moreTips.style.display = "none";
    moreBtn.textContent = "More...";
  }
}

// Reset state when popup opens
function resetTips() {
  const moreTips = document.getElementById("moreTips");
  const moreBtn = document.getElementById("moreBtn");

  if (moreTips) moreTips.style.display = "none";
  if (moreBtn) moreBtn.textContent = "More...";
}




