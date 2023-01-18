// Get the element with the ID "read-more"
let readMore = document.getElementById("read-more");

// Get the element with the ID "article-body"
let articleBody = document.getElementById("article-body");

// Add a click event listener to the "read-more" button
readMore.addEventListener("click", function() {
  // Toggle the class "expanded" on the "article-body" element
  articleBody.classList.toggle("expanded");

  // Change the text of the "read-more" button
  if (articleBody.classList.contains("expanded")) {
    readMore.textContent = "Read Less";
  } else {
    readMore.textContent = "Read More";
  }
});
