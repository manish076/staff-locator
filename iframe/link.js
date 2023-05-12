function openLinksInNewTab() {
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var url = event.target.href;
        window.open(url, "_blank");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    openLinksInNewTab();
  });