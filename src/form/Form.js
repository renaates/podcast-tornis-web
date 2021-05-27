import React from "react";
import "./Form.css";
import { Input } from "./Input";

export const Form = () => {
  return (
    <div className="contact-form">
      <form
        className="form"
        action="#"
        // onSubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Norādi, ka esi iepazinies ar noteikumiem!'); return false; }"
      >
        <div className="row">
          <Input
            label="PILNS VĀRDS"
            containerClassName="input-container half"
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
              name="name1"
              className="input"
              required
            />
            <Input
              label="KLASE"
              containerClassName="input-container small"
              type="number"
              name="className"
              min="9"
              max="12"
              className="input"
              required
            />
          </div>
          {/* Second */}
          <div className="row participant">
            <Input
              label="2. DALĪBNIEKA PILNS VĀRDS"
              containerClassName="input-container half"
              type="text"
              name="name3"
              className="input"
              required
            />
            <Input
              label="KLASE"
              containerClassName="input-container small"
              type="number"
              name="className"
              min="9"
              max="12"
              className="input"
              required
            />
          </div>
          {/* Third */}
          <div className="row participant">
            <Input
              label="3. DALĪBNIEKA PILNS VĀRDS"
              containerClassName="input-container half"
              type="text"
              name="name3"
              className="input"
              required
            />
            <Input
              label="KLASE"
              containerClassName="input-container small"
              type="number"
              name="className"
              min="9"
              max="12"
              className="input"
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
          required
        />
        <input type="radio" name="terms" value="check" id="agree" required />{" "}
        <span>
          Esmu iepazinies ar{" "}
          <a className="rules-btn" href="#">
            <span className="underline">noteikumiem</span>
          </a>
        </span>
        <br />
        <br />
        <input type="submit" value="SŪTĪT" className="btn" />
      </form>
    </div>
  );
};
