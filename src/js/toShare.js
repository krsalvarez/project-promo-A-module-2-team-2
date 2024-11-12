"use strict";
document.querySelector(".js-share").addEventListener("click", function () {
  // Gather details from the card
  const name = document.querySelector(".js-fillName").textContent;
  const surname = document.querySelector(".js-fillSurname").textContent;
  const date = document.querySelector(".js-fillDate").textContent;

  // Construct the message to share
  const message = `📩 Has recibido una invitación de ${name} en 📍 ${surname} el 🗓️ ${date}  🎉 A celebrar 🎉`;
  const url = ""; // Replace with your invitation link or URL
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    message
  )}&url=${encodeURIComponent(url)}`;

  // Open Twitter share link
  window.open(shareUrl, "_blank");
});
