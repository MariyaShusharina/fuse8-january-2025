
let val = "";
let query = "";
const url = "https://rickandmortyapi.com/api/character";

const main = document.createElement("main");
document.body.appendChild(main);

const root = ReactDOM.createRoot(main);

const search = async (event) => {
  val = event.target.value;

  if (val.length > 2) {
    query = `${url}/?name=${val}`;

    console.log(val);

    const result = await fetch(query);
    const data = await result.json();

    console.log(data);

    showResults(data);
  }
}

const searchBox = React.createElement(
  "input",
  {
    placeholder: "Search characters...",
    autoFocus: true,
    onInput: search
  });

const content = React.createElement("div", {className: "content"});

const gitLink = React.createElement(
  "a",
  {
    href: "https://github.com/MariyaShusharina/",
    target: "_blank"
  },
  "Site made by MariyaShusharina"
);
const fuseLink = React.createElement(
  "a",
  {
    href: "https://hr.fuse8.ru/",
    target: "_blank"
  },
  "fuse8"
);
const fuseSpan = React.createElement("span", {}, "(as a test task for ", fuseLink, ")");
const iconLink = React.createElement(
  "a",
  {
    href: "https://www.freepik.com/icon/magnifying-glass_10975953#fromView=keyword&page=2&position=17&uuid=d3c2bb33-fdb4-4cac-8dee-3396979ef3dd",
    target: "_blank"
  },
  "Icon for favicon by Fathema Khanom"
);
const credits = React.createElement("div", {className: "credits"}, gitLink, fuseSpan, iconLink);

const renderDiv = React.createElement("div", {className: "rendered"}, searchBox, content, credits);

root.render(renderDiv);

function showResults(data) {
  // code here
}
