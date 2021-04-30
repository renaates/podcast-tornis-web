import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Episode} from './episode/Episode';
import {Person} from './person/Person';
import reportWebVitals from './reportWebVitals';

// episodes

let episodesFromBE = [
  {
  image: "images/rubrics/folijas-cepurites.png",
  number:"04",
  title:"RUBRIKAS NOSAUKUMS: Ceturtās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
  image:"images/rubrics/bazars.png",
  number:"03",
  title:"RUBRIKAS NOSAUKUMS: Trešās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
  image:"images/rubrics/domatava.png",
  number:"02",
  title:"RUBRIKAS NOSAUKUMS: Otrās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
  image:"images/rubrics/akvarijs.png",
  number:"01",
  title:"PILOTEPIZODE: Pirmās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  }
]

let episodes = episodesFromBE.map(({image, number, title, description}) => ({
  imageSrc: image,
  episodeNr: number,
  episodeTitle: title,
  description: description
}))

ReactDOM.render(
  <React.StrictMode>
    <div>
      {episodes.map((episode) => <Episode {...episode} key={episode.episodeName}></Episode>)}
    </div>
  </React.StrictMode>,
  document.querySelector(".episode-container")
);

let teamFromBE = [
  {
  image: "images/team/reinislozbers.jpg",
  name:"Reinis Lozbers",
  role: "Tehnika, skaņa, pēcapstrāde",
  },
  {
  image:"images/team/renatespirga.png",
  name:"Renāte Spirga",
  role: "Grafiskais dizains, mājaslapas izstrāde, pēcapstrāde, saturs",
  },
  {
  image:"images/team/livakristaucelniece.png",
  name:"Līva Krista Učelniece",
  role: "Sociālie tīkli, saturs, plānošana",
  },
  {
  image:"images/team/robertspicukans.png",
  name:"Roberts Pičukans",
  role: "Pēcapstrāde, saturs",
  },
  {
  image:"images/team/davisindriksons.jpg",
  name:"Dāvis Indriksons",
  role: "Sociālie tīkli, saturs",
  }
]

let team = teamFromBE.map(({image, name, role}) => ({
  imageSrc: image,
  personName: name,
  personRole: role
}))

ReactDOM.render(
  <React.StrictMode>
    <div>
      {team.map((person) => <Person {...person} key={person.personName}></Person>)}
    </div>
  </React.StrictMode>,
  document.querySelector(".person-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
