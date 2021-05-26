import React from "react";
import { Section } from "../section/Section";
import { EpisodeList } from "../episode-list/EpisodeList";
import { PersonList } from "../person-list/PersonList";
import { NewsListWithData } from "../news-list/NewsList";
import { Landing } from "../landing/Landing";
import { About } from "../about/About";
import { Form } from "../form/Form";

// episodes
let episodes = [
  {
    image: "images/rubrics/general.png",
    number: "00",
    rubric: "Tornis",
    title: "Pilotepizode",
    description:
      'Tehniski vissarežģītākā projekta izstrādes daļa visbeidzot ir noslēgusies, tādēļ podkāsts "Tornis" uzsāk savu darbību! Klausies pilotepizodi un uzzini par projektu, tā pirmsākumiem, nākotnes plāniem un par iespēju arī Tev piedalīties nākotnes raidījumu veidošanā!',
    spotify: "",
    youtube: "",
    extra: "",
  },
  {
    image: "images/rubrics/domatava.png",
    number: "01",
    rubric: "Domātava",
    title: "Diezgan garš epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    spotify: "",
    youtube: "",
    extra: "",
  },
  {
    image: "images/rubrics/bazars.png",
    number: "02",
    rubric: "Bazars",
    title: "Epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    spotify: "",
    youtube: "",
    extra: "",
  },
  {
    image: "images/rubrics/akvarijs.png",
    number: "03",
    rubric: "Akvārijs",
    title: "Epizodes nosaukums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    spotify: "",
    youtube: "",
    extra: "",
  },
  {
    image: "images/rubrics/folijas-cepurites.png",
    number: "04",
    rubric: "Folijas cepurītes",
    title: "Epizodes nosaukums",
    description:
      "Šis ir pēdējās epizodes apraksts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    spotify:
      "https://open.spotify.com/episode/0oaGXdf3VGOXr3AvEfsQEW?si=JmFLSzauQNm4usyx7u8-Yw",
    youtube: "",
    extra: "",
  },
];

// newest episode spotify
let newest = episodes[episodes.length - 1].spotify;

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

export const SectionList = () => (
  <div>
    <Section id="new">
      <Landing spotify={newest}></Landing>
    </Section>
    <Section name="jaunumi" id="jaunumi">
      <NewsListWithData />
    </Section>
    <Section name="epizodes" id="epizodes">
      <EpisodeList episodes={episodes}></EpisodeList>
    </Section>
    <Section name="par projektu" id="par">
      <About></About>
    </Section>
    <Section
      id="komanda"
      description='Šeit redzami cilvēki, kas šobrīd aktīvi iesaistās podkāsta izveides procesā un ir pastāvīgi "Torņa" komandas biedri, kā arī tie, kuri ir piedalījušies projekta izstrādē un pilnveidošanā.'
    >
      <PersonList team={team}></PersonList>
    </Section>
    <Section
      name="bazars"
      id="bazars"
      description='Esi Talsu Valsts ģimnāzijas skolēns un vēlies piedalīties podkāsta "Tornis" rubrikā "Bazars"? Izlasi noteikumus, aizpildi anketu un gaidi atbildi no podkāsta komandas! Vairāk par rubriku "Bazars" vari lasīt šeit.'
    >
      <Form></Form>
    </Section>
  </div>
);
