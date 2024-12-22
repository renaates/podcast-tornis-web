import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-1">
          <div></div>
          <div className="socials-container">
            <div className="socials-column socials-column-1">
              <div className="socials socials-spotify">
                <a
                  href="https://open.spotify.com/show/3s4gxp3CKEi7TDAd0w21S6?si=4iwwjQSkSHuP5RIXN-teLw"
                  target="#"
                  className="socials-a"
                >
                  <img src="../images/social-media/spotify.svg" alt="spotify" />
                  <span className="socials-title">Spotify</span>
                </a>
              </div>
              <div className="socials socials-youtube">
                <a
                  href="https://www.youtube.com/channel/UChbZGaABq4zFFgiFSQAAaXA"
                  target="#"
                  className="socials-a"
                >
                  <img src="../images/social-media/youtube.svg" alt="youtube" />
                  <span className="socials-title">YouTube</span>
                </a>
              </div>
            </div>
            <div className="socials-column socials-column-2">
              <div className="socials socials-instagram">
                <a
                  href="https://www.instagram.com/podkaststornis/"
                  target="#"
                  className="socials-a"
                >
                  <img
                    src="../images/social-media/instagram.svg"
                    alt="instagram"
                  />
                  <span className="socials-title">Instagram</span>
                </a>
              </div>
              <div className="socials socials-facebook">
                <a
                  href="https://www.facebook.com/podkaststornis"
                  target="#"
                  className="socials-a"
                >
                  <img
                    src="../images/social-media/facebook.svg"
                    alt="facebook"
                  />
                  <span className="socials-title">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-container">
            <p className="bold">Kontaktinformācija</p>
            <div className="contact email">
              <img src="images/mail.svg" className="contact-img" />
              <p>podkaststornis@gmail.com</p>
            </div>
            <div className="contact address">
              <img src="images/home.svg" className="contact-img" />
              <p>Brīvības iela 29, Talsi, LV-3201</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <a
          className="renate"
          href="https://www.linkedin.com/in/renate-spirga/"
          target="#"
        >
          2021-2024 © <span>Renāte Spirga</span>
        </a>
      </div>
    </div>
  );
};
