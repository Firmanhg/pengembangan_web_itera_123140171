document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("cursor-follower");
  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
