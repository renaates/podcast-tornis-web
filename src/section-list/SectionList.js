import React from "react";
// import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Section } from "../section/Section";
import { EpisodeListWithData } from "../episode-list/EpisodeList";
import { PersonListWithData } from "../person-list/PersonList";
import { NewsListWithData } from "../news-list/NewsList";
import { Landing } from "../landing/Landing";
import { About } from "../about/About";
import { Bazars } from "../bazars/Bazars";
import { Form } from "../form/Form";

export const SectionList = () => (
  <div>
    <Section id="new">
      <Landing></Landing>
    </Section>
    <Section name="jaunumi" id="jaunumi">
      <NewsListWithData />
    </Section>
    <Section name="epizodes" id="epizodes">
      <EpisodeListWithData />
    </Section>
    <Section name="par projektu" id="par">
      <About />
    </Section>
    <Section
      id="komanda"
      description='Šeit redzami cilvēki, kas šobrīd aktīvi iesaistās podkāsta izveides procesā un ir pastāvīgi "Torņa" komandas biedri, kā arī tie, kuri ir piedalījušies projekta izstrādē un pilnveidošanā.'
    >
      <PersonListWithData />
    </Section>
    <Section name="bazars" id="bazars">
      <Form />
      <Bazars />
    </Section>
  </div>
);
