import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SectionList } from "./section-list/SectionList";
import { EpisodeList } from "./episode-list/EpisodeList";
import { PersonList } from "./person-list/PersonList";
import { NewsList } from "./news-list/NewsList";
import { NewestEpisodeList } from "./newest-episode/NewestEpisode-1";
import { Form } from "./form/Form";
import reportWebVitals from "./reportWebVitals";

// sections

let sections = [
  {
    name: "jaunākā epizode",
  },
  {
    name: "jaunumi",
  },
  {
    name: "epizodes",
  },
  {
    name: "komanda",
    description:
      'Šeit apskatāmi cilvēki, kas šobrīd aktīvi iesaistās podkāsta izveides procesā un ir pastāvīgi "Torņa" komandas biedri, kā arī tie, kuri ir piedalījušies projekta izstrādē un pilnveidošanā.',
  },
  {
    name: "bazars",
    description:
      'Esi Talsu Valsts ģimnāzijas skolēns un vēlies piedalīties podkāsta "Tornis" rubrikā "Bazars"? Izlasi noteikumus, aizpildi anketu un gaidi atbildi no podkāsta komandas! Vairāk par rubriku "Bazars" vari lasīt šeit.',
    //       'Esi Talsu Valsts ģimnāzijas skolēns un vēlies piedalīties podkāsta "Tornis" rubrikā "Bazars"? Izlasi' <span class="rules underline">'noteikumus'</span>', aizpildi anketu un gaidi atbildi no podkāsta komandas! Vairāk par rubriku "Bazars" vari lasīt <span class="about-bazars underline">šeit</span>.</p>',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <SectionList sections={sections}></SectionList>
  </React.StrictMode>,
  document.querySelector("[data-container='root']")
);

//header

// news
let news = [
  {
    date: "01.05.2021",
    title: 'Podkāsts "Tornis" ir gaisā!',
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget gravida cum sociis natoque penatibus et. Accumsan sit amet nulla facilisi. Velit aliquet sagittis id consectetur purus ut faucibus. Placerat duis ultricies lacus sed turpis tincidunt. Faucibus et molestie ac feugiat. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fusce ut placerat orci nulla pellentesque dignissim. Nec nam aliquam sem et tortor consequat id porta nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Turpis massa sed elementum tempus egestas sed. Velit aliquet sagittis id consectetur. Tristique senectus et netus et. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Quam lacus suspendisse faucibus interdum. Ut enim blandit volutpat maecenas volutpat. Tellus in metus vulputate eu. Amet cursus sit amet dictum sit amet justo donec enim. Tortor pretium viverra suspendisse potenti nullam ac tortor. Turpis egestas maecenas",
    image: "images/news/1.jpg",
  },
  {
    date: "00.00.0000",
    title: "Test",
    text: "Test",
    image: "",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <NewsList news={news}></NewsList>
  </React.StrictMode>,
  document.querySelector('[data-container="jaunumi"]')
);

// episodes
let episodes = [
  {
    image: "images/rubrics/akvarijs.png",
    number: "00",
    title: "PILOTEPIZODE: Epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    spotify: "",
    youtube: "",
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
    extra: "",
  },
  {
    image: "images/rubrics/domatava.png",
    number: "01",
    title: "RUBRIKAS NOSAUKUMS: Epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    spotify: "",
    youtube: "",
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
    extra: "",
  },
  {
    image: "images/rubrics/bazars.png",
    number: "02",
    title: "RUBRIKAS NOSAUKUMS: Epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    spotify: "",
    youtube: "",
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
    extra: "",
  },
  {
    image: "images/rubrics/folijas-cepurites.png",
    number: "03",
    title: "RUBRIKAS NOSAUKUMS: Epizodes nosaukums",
    description:
      "Šis ir pēdējās epizodes apraksts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    spotify: "",
    youtube: "",
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
    extra: "",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <EpisodeList episodes={episodes}></EpisodeList>
  </React.StrictMode>,
  document.querySelector('[data-container="epizodes"]')
);

// newest episode
let newest = [
  {
    description: episodes[episodes.length - 1].description,
    embed: episodes[episodes.length - 1].embed,
    youtube: episodes[episodes.length - 1].youtube,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <NewestEpisodeList newest={newest}></NewestEpisodeList>
  </React.StrictMode>,
  document.querySelector('[data-container="jaunākā epizode"]')
);

// team
let team = [
  {
    image: "images/team/reinislozbers.jpg",
    name: "Reinis Lozbers",
    role: "Tehnika, skaņa, pēcapstrāde",
  },
  {
    image: "images/team/renatespirga.png",
    name: "Renāte Spirga",
    role: "Grafiskais dizains, mājaslapas izstrāde, pēcapstrāde, saturs",
  },
  {
    image: "images/team/livakristaucelniece.png",
    name: "Līva Krista Učelniece",
    role: "Sociālie tīkli, saturs, plānošana",
  },
  {
    image: "images/team/robertspicukans.png",
    name: "Roberts Pičukans",
    role: "Pēcapstrāde, saturs",
  },
  {
    image: "images/team/davisindriksons.jpg",
    name: "Dāvis Indriksons",
    role: "Sociālie tīkli, saturs",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <PersonList team={team}></PersonList>
  </React.StrictMode>,
  document.querySelector('[data-container="komanda"]')
);

// form
ReactDOM.render(
  <React.StrictMode>
    <Form></Form>
  </React.StrictMode>,
  document.querySelector('[data-container="bazars"]')
);

// contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
