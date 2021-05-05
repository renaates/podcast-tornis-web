import React from "react";
import { Section } from "../section/Section";

export const SectionList = ({ sections }) => (
  <div>
    {sections.map((section, index) => (
      <Section {...section} key={index}></Section>
    ))}
  </div>
);
