import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Form.css";
import { InputWrapper } from "./InputWrapper";
import { ParticipantInput } from "./ParticipantInput";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [isSubmitFailed, setIsSubmitFailed] = useState(false);

  const form = useRef();

  const sendEmail = (data) => {
    emailjs.sendForm("service_hsqp6v9", "template_imnfikk", form.current, "5I1UfmKFc8gTcYJoB").then(
      (response) => {
        setIsSubmittedSuccessfully(true); 
        setIsSubmitFailed(false);  
      },
      (error) => {
        setIsSubmittedSuccessfully(false); 
        setIsSubmitFailed(true); 
      }
    );
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <form className="form" id="form" ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="row first-row">
        <InputWrapper
          label="KONTAKTPERSONA"
          containerClassName="input-container half name-container"
          type="text"
          className="input"
          name="name"
          autoComplete="off"
          {...register("userName", {
            required: { value: true, message: "Šis lauks ir obligāts! Norādi kontaktpersonu!" },
            maxLength: { value: 30, message: "Nekorekti dati! Kontaktpersonas garumam jābūt līdz 30 simboliem!" },
          })}
          error={errors.userName}
        />

        <InputWrapper
          label="KĀ AR TEVI SAZINĀTIES?"
          containerClassName="input-container half"
          type="text"
          className="input"
          name="contact"
          {...register("userContact", {
            required: { value: true, message: "Šis lauks ir obligāts! Norādi saziņas veidu!" },
            maxLength: { value: 40, message: "Nekorekti dati! Saziņas veida garumam jābūt līdz 40 simboliem!" },
          })}
          error={errors.userContact}
        />
      </div>
      <div className="participants">
        <ParticipantInput register={register} number={0} error={errors.participants?.[0]} />
        <ParticipantInput register={register} number={1} error={errors.participants?.[1]} />
        <ParticipantInput register={register} number={2} error={errors.participants?.[2]} />
      </div>
      <InputWrapper
        component="textarea"
        label="IDEJAS APRAKSTS UN PAPILDUS INFORMĀCIJA"
        containerClassName="input-container textarea"
        className="input full"
        autoComplete="off"
        {...register("message", {
          required: { value: true, message: "Šis lauks ir obligāts! Norādi ideju!" },
          maxLength: { value: 500, message: "Nekorekti dati! Idejas garumam jābūt līdz 500 simboliem!" },
        })}
        error={errors.message}
        name="message"
      />
      <div className="submit-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="terms"
            id="agree"
            {...register("terms", {
              required: { value: true, message: "Lūdzu atzīmē, ka piekrīti noteikumiem!" },
            })}
          />{" "}
          <label className="agree-to-rules" htmlFor="agree" >Esmu iepazinies ar noteikumiem</label>
        </div>

        <div className="form-status-message">
          {isSubmittedSuccessfully && (
            <p className="success-message">Pieteikums veiksmīgi nosūtīts!</p>
          )}
          {isSubmitFailed && (
            <p className="error-message">Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.</p>
          )}
        </div>

        <div className="error-messages">
          {Object.entries(errors).flatMap(([key, value]) => {
            if (key === "participants" && Array.isArray(value)) {
              return value.flatMap((participantError, idx) =>
                Object.entries(participantError || {}).map(([field, err]) => (
                  <p key={`participant-${idx}-${field}`} className="error-message">
                    {err.message}
                  </p>
                ))
              );
            }
            return (
              <p key={key} className="error-message">
                {value.message}
              </p>
            );
          })}
        </div>
        <input type="submit" value="SŪTĪT" className="btn" />
      </div>
    </form>
  );
};
