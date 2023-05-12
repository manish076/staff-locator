const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementsByClassName("search");
const content = document.getElementById("content");
const iframes = document.querySelectorAll("iframe");

searchButton.addEventListener("click", function() {
  const query = searchInput.value.toLowerCase();
  let results = [];

  iframes.forEach(function(iframe) {
    const iframeContent = iframe.contentWindow.document.body.innerHTML;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = iframeContent;

    const elements = tempDiv.querySelectorAll(".grid-container .grid-item .group9-text4");

    elements.forEach(function(element) {
      if (element.innerText.toLowerCase().includes(query)) {
        results.push(element);
      }
    });
  });

  if (results.length > 0) {
    content.innerHTML = "";
    results.forEach(function(result) {
      const clone = result.cloneNode(true);
      content.appendChild(clone);
    });
  } else {
    content.innerHTML = "No results found.";
  }
});