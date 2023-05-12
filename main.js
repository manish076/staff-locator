let currentIframe;

function embedWebpage(url) {
  // Remove the previous iframe container if it exists
  if (currentIframe) {
    currentIframe.parentNode.removeChild(currentIframe);
  }

  // Create a new iframe element
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";

  // Add the iframe element to the page
  const embedContainer = document.getElementById('embed-container');
  embedContainer.appendChild(iframe);

  // Keep track of the current iframe container
  currentIframe = iframe;
}
