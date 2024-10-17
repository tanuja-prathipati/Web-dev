document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(
    ".collapsible h2, .collapsible h3"
  );
  const toc = document.querySelector("#toc ul");

  // Create Table of Contents
  collapsibles.forEach((heading) => {
    const tocItem = document.createElement("li");
    tocItem.textContent = heading.textContent;
    toc.appendChild(tocItem);

    heading.addEventListener("click", () => {
      const content = heading.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
