const footer = document.querySelector("#footer");

// Add copyright tags to footer
const generateCopyright = () => {
  let html = "";
  let date = new Date();
  let year = date.getFullYear();

  html += `<p>Copyright &copy ${year}`;
  html += " | ";
  html += "<a href='https://donatron.github.io/portfolio' target='_blank' >";
  html += "Don Macarthur </a></p>";

  return html;
};

footer.innerHTML = generateCopyright();
