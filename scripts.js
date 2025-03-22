
const main = document.createElement("main");
document.body.appendChild(main);

const root = ReactDOM.createRoot(main);

const searchBox = React.createElement("input", {placeholder: "Search characters..."});


const gitLink = React.createElement(
  "a",
  {
    href: "https://github.com/MariyaShusharina/",
    target: "_blank"
  },
  "Site made by MariyaShusharina"
);
const iconLink = React.createElement(
  "a",
  {
    href: "https://www.freepik.com/icon/magnifying-glass_10975953#fromView=keyword&page=2&position=17&uuid=d3c2bb33-fdb4-4cac-8dee-3396979ef3dd",
    target: "_blank"
  },
  "Icon for favicon by Fathema Khanom"
);
const credits = React.createElement("div", {className: "credits"}, gitLink, iconLink);

const renderDiv = React.createElement("div", {className: "rendered"}, searchBox, credits);

root.render(renderDiv);
