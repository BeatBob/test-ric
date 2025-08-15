(function () {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll(".grid img").forEach((img) => {
    img.addEventListener("click", () => {
      // use full-resolution source when available; fallback to current src
      modalImg.src = img.dataset.full || img.src;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modalImg.src = "";
  }

  // Close when clicking outside the image or on the close button
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === closeBtn) closeModal();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
})();
