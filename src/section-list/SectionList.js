import React from "react";
import { Section } from "../section/Section";
import { EpisodeList } from "../episode-list/EpisodeList";
import { PersonList } from "../person-list/PersonList";
import { NewsList } from "../news-list/NewsList";
import { NewestEpisodeList } from "../newest-episode/NewestEpisode-1";
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
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
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
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
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
    embed:
      "https://open.spotify.com/embed-podcast/episode/0oaGXdf3VGOXr3AvEfsQEW",
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
    embed: "https://open.spotify.com/embed/show/3s4gxp3CKEi7TDAd0w21S6",
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
    embed: "https://open.spotify.com/embed/show/3s4gxp3CKEi7TDAd0w21S6",
    extra: "",
  },
];

// newest episode
let newest = [
  {
    description: episodes[episodes.length - 1].description,
    embed: episodes[episodes.length - 1].embed,
    youtube: episodes[episodes.length - 1].youtube,
  },
];

// news
let news = [
  {
    date: "02.04.2021",
    title: "Aparatūra un pilotepizodes ierakstīšana",
    text:
      'Šodien, 2021. gada 2. aprīlī, ievērojot drošības pasākumus, Talsu Valsts ģimnāzijas stadionā norisinājās jau no pagājušā gada rūpīgi lolotā projekta "Podkāsts Tornis" pilotepizodes ierakstīšana kopā ar visu "Torņa" komandu - Renāti Spirgu, Līvu Kristu Učelnieci, Reini Lozberu, Robertu Pičukanu un Dāvi Indriksonu. Pavisam nesen tika saņemta lielākā daļa aparatūras, kas projekta attīstību jau veicinājusi lielā mērā. Uz drīzu sadzirdēšanos!',
    image: "images/news/001.jpg",
  },
  {
    date: "28.05.2021",
    title: 'Podkāsts "Tornis" ir gaisā!',
    text:
      "Piemērs tam, kā būtu, ja teksts ļoti garš. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget gravida cum sociis natoque penatibus et. Accumsan sit amet nulla facilisi. Velit aliquet sagittis id consectetur purus ut faucibus. Placerat duis ultricies lacus sed turpis tincidunt. Faucibus et molestie ac feugiat. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fusce ut placerat orci nulla pellentesque dignissim. Nec nam aliquam sem et tortor consequat id porta nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Turpis massa sed elementum tempus egestas sed. Velit aliquet sagittis id consectetur. Tristique senectus et netus et. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Quam lacus suspendisse faucibus interdum. Ut enim blandit volutpat maecenas volutpat. Tellus in metus vulputate eu. Amet cursus sit amet dictum sit amet justo donec enim. Tortor pretium viverra suspendisse potenti nullam ac tortor. Turpis egestas maecenas.",
    image: "images/news/002.jpg",
  },
];

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
    <Section name="jaunākā epizode" id="new">
      <NewestEpisodeList newest={newest}></NewestEpisodeList>
    </Section>
    <Section name="jaunumi" id="jaunumi">
      <NewsList news={news}></NewsList>
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
