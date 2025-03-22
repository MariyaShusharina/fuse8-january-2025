
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
  "GitHub"
);
const credits = React.createElement("div", {}, gitLink);

const renderDiv = React.createElement("div", {}, searchBox, credits);

root.render(renderDiv);
