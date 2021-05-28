import React, { useState } from "react";
import "./Bazars.css";

export const Bazars = () => {
  const [isColoredHowTo, setColoredHowTo] = useState(true);
  const toggle = () => {
    setColoredHowTo(!isColoredHowTo);
    setColoredRules(!isColoredRules);
  };
  const [isColoredRules, setColoredRules] = useState(false);

  const rules = (
    <ol>
      <li>
        Leksikai jābūt pieklājīgai. Runas formāts ir komunikācija brīvā stilā,
        tādēļ ir atļauta sarunvaloda, taču ne lamuvārdi.
      </li>
      <li>Aizliegts apzināti izplatīt nepatiesas ziņas.</li>
      <li>
        Aizliegts veidot aizvainojoša rakstura saturu. Drīkst paust savu
        viedokli ar nolūku informēt, bet ne ar nolūku nicināt.
      </li>
      <li>
        Aizliegts veidot saturu, kas iedragātu mācību iestādes vai kādas
        personas reputāciju.
      </li>
    </ol>
  );

  const howTo = (
    <ol>
      <li>
        Interesenti skaitā no 1 līdz 3 izvērtē savu gatavību kvalitatīvi
        izveidot podkāsta epizodi, iepazīstas ar noteikumiem, tad izplāno savu
        epizodi un tās saturu.
      </li>
      <li>
        Tiek aizpildīta anketa, iekļaujot detalizētu informāciju par epizodi un
        sniedzot vērtējumu par savām spējām to ierakstīt un veikt pēcapstrādi,
        lai "Torņa" komanda varētu izvērtēt, kāda veida atbalstu būs
        nepieciešams sniegt.
      </li>
      <li>
        Anketas iesniedzējs, kurš anketā ievadījis savu e-pastu, gaida atbildi
        no "Torņa" komandas, kas izvērtē iesniegumu. Ja problēmu nav, tad tiek
        piedāvāti iespējamie ierakstīšanas laiki un sniegtas atbildes uz citiem
        interesējošiem jautājumiem.
      </li>
      <li>
        Norisinās epizodes ierakstīšana, tiek veikta pēcapstrāde, epizode tiek
        publicēta.
      </li>
    </ol>
  );

  return (
    <div className="about-bazars">
      <div className="bazars-expand-btns">
        <a
          onClick={toggle}
          className={
            isColoredHowTo
              ? "colored bazars-title-container"
              : "not-colored bazars-title-container"
          }
        >
          <h3 className="bazars-howto-title bazars-title">Norise</h3>
        </a>
        <a
          onClick={toggle}
          className={
            isColoredRules
              ? "colored bazars-title-container"
              : "not-colored bazars-title-container"
          }
        >
          <h3 className="bazars-rules-title bazars-title">Noteikumi</h3>
        </a>
      </div>
      {isColoredHowTo ? undefined : rules}
      {isColoredRules ? undefined : howTo}
    </div>
  );
};
