import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div className="contact-form">
      <form
        className="form"
        action="#"
        // onSubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Norādi, ka esi iepazinies ar noteikumiem!'); return false; }"
      >
        <div className="row">
          <div className="input-container half">
            <input type="text" name="name" className="input" required />
            <label for="">PILNS VĀRDS</label>
            <span>PILNS VĀRDS</span>
          </div>

          <div className="input-container half">
            <input type="email" name="email" className="input" required />
            <label for="">E-PASTS</label>
            <span>E-PASTS</span>
          </div>
        </div>
        {/* First */}
        <div className="participants">
          <div className="row participant">
            <div className="input-container half">
              <input type="text" name="name1" className="input" required />
              <label for="">1. DALĪBNIEKA PILNS VĀRDS</label>
              <span>1. DALĪBNIEKA PILNS VĀRDS</span>
            </div>
            <div className="input-container small">
              <input
                type="number"
                name="className"
                min="9"
                max="12"
                className="input"
                required
              />
              <label for="">KLASE</label>
              <span>KLASE</span>
            </div>
          </div>
          {/* Second */}
          <div className="row participant">
            <div className="input-container half">
              <input type="text" name="name2" className="input" />
              <label for="">2. DALĪBNIEKA PILNS VĀRDS</label>
              <span>2. DALĪBNIEKA PILNS VĀRDS</span>
            </div>

            <div className="input-container small">
              <input
                type="number"
                name="className"
                min="9"
                max="12"
                className="input"
                required
              />
              <label for="">KLASE</label>
              <span>KLASE</span>
            </div>
          </div>
          {/* Third */}
          <div className="row participant">
            <div className="input-container half">
              <input type="text" name="name" className="input" />
              <label for="">3. DALĪBNIEKA PILNS VĀRDS</label>
              <span>3. DALĪBNIEKA PILNS VĀRDS</span>
            </div>

            <div className="input-container small">
              <input
                type="number"
                name="className"
                min="9"
                max="12"
                className="input"
                required
              />
              <label for="">KLASE</label>
              <span>KLASE</span>
            </div>
          </div>
        </div>
        {/* Info */}
        <div className="input-container textarea">
          <textarea name="message" className="input full" required></textarea>
          <label for="">IDEJAS APRAKSTS UN PAPILDUS INFORMĀCIJA</label>
          <span>IDEJAS APRAKSTS UN PAPILDUS INFORMĀCIJA</span>
        </div>
        <input type="radio" name="terms" value="check" id="agree" required />{" "}
        <span>
          Esmu iepazinies ar <span className="underline"> noteikumiem</span>
        </span>
        <br />
        <br />
        <input type="submit" value="SŪTĪT" className="btn" />
      </form>
    </div>
  );
};
