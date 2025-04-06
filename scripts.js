
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

const searchDiv = React.createElement("div", {}, searchBox);

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

const renderDiv = React.createElement("div", {className: "rendered"}, searchDiv, credits);

root.render(renderDiv);

function showResults(data) {
  
  let elements = [];

  let lastIndex = 8;

  if (data.results.length < 8) {
    lastIndex = data.results.length;
  }

  let amount = 0;

  if (!isNaN(data.results.length)) {
    amount = data.results.length;
  }

  const foundSpan = React.createElement("span", {}, `Found characters: ${amount}`);
  const foundDiv = React.createElement("div", {className: "found"}, foundSpan);

  if (lastIndex > 0) {
    for (let i = 0; i < lastIndex; i += 1) {
      const name = data.results[i].name;
      const status = data.results[i].status;
      const charUrl = data.results[i].url;
      const created = new Date(Date.parse(data.results[i].created));

      const day = created.getDate();
      const month = created.getMonth();
      const year = created.getFullYear();

      const title = React.createElement("h3", {}, name);

      const statusText = React.createElement("span", {}, "Status: ");
      let statusBool;
      switch(status) {
        case "Alive":
          statusBool = React.createElement("span", {className: "status-alive"}, status);
          break;
        case "Dead":
          statusBool = React.createElement("span", {className: "status-dead"}, status);
          break;
        default:
          statusBool = React.createElement("span", {}, status);
          break;
        }
      const statusDiv = React.createElement("div", {}, statusText, statusBool);

      const dateSpan = React.createElement("span", {}, `Created: ${day}.${month}.${year}`);
      const dateDiv = React.createElement("div", {className: "date-div"}, dateSpan);

      const propsDiv = React.createElement("div", {className: "props-div"}, statusDiv, dateDiv);

      const charDiv = React.createElement("div", {className: "card"}, title, propsDiv);

      const urlElement = React.createElement(
        "a",
        {
          key: i,
          href: charUrl,
          target: "_blank"
        },
        charDiv);

      elements.push(urlElement);
    }
  }

  const updatedSearchDiv = React.createElement("div", {}, searchBox, foundDiv);

  const content = React.createElement("div", {className: "content"}, elements);

  const newRenderDiv = React.createElement("div", {className: "rendered"}, updatedSearchDiv, content, credits);

  root.render(newRenderDiv);
}
