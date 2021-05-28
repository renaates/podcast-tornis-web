import React from "react";
import "./Form.css";
import { Input } from "./Input";

export const Form = () => {
  return (
    <form className="form" action="#">
      <div className="row first-row">
        <Input
          label="PILNS VĀRDS"
          containerClassName="input-container half name-container"
          type="text"
          name="name"
          className="input"
          required
        />

        <Input
          label="E-PASTS"
          containerClassName="input-container half"
          type="email"
          name="email"
          className="input"
          required
        />
      </div>
      {/* First */}
      <div className="participants">
        <div className="row participant">
          <Input
            label="1. DALĪBNIEKA PILNS VĀRDS"
            containerClassName="input-container half"
            type="text"
            name="participant-name"
            className="input"
            autocomplete="off"
            required
          />
          <Input
            label="KLASE"
            containerClassName="input-container small"
            type="number"
            name="participant-class"
            min="9"
            max="12"
            className="input"
            autocomplete="off"
            required
          />
        </div>
        {/* Second */}
        <div className="row participant">
          <Input
            label="2. DALĪBNIEKA PILNS VĀRDS"
            containerClassName="input-container half"
            type="text"
            name="participant-name"
            className="input"
            autocomplete="off"
            required
          />
          <Input
            label="KLASE"
            containerClassName="input-container small"
            type="number"
            name="participant-class"
            min="9"
            max="12"
            className="input"
            autocomplete="off"
            required
          />
        </div>
        {/* Third */}
        <div className="row participant">
          <Input
            label="3. DALĪBNIEKA PILNS VĀRDS"
            containerClassName="input-container half"
            type="text"
            name="participant-name"
            className="input"
            autocomplete="off"
            required
          />
          <Input
            label="KLASE"
            containerClassName="input-container small"
            type="number"
            name="participant-class"
            min="9"
            max="12"
            className="input"
            autocomplete="off"
            required
          />
        </div>
      </div>
      {/* Info */}
      <Input
        component="textarea"
        label="IDEJAS APRAKSTS UN PAPILDUS INFORMĀCIJA"
        containerClassName="input-container textarea"
        name="message"
        className="input full"
        autocomplete="off"
        required
      />
      <input type="checkbox" name="terms" value="check" id="agree" required />{" "}
      <span className="agree-to-rules">Esmu iepazinies ar noteikumiem</span>
      <br />
      <br />
      <input type="submit" value="SŪTĪT" className="btn" />
    </form>
  );
};
