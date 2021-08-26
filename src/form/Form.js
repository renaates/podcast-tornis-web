import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "./Form.css";
import { Input } from "./Input";
import { ParticipantInput } from "./ParticipantInput";

export const Form = () => {
  function sendEmail(data) {
    data.preventDefault();
    emailjs
      .sendForm(
        "service_hsqp6v9",
        "template_imnfikk",
        data.target,
        "user_8yi0e1bB0jqUFzn48R9nH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  // const { register, formState, reset } = useForm();
  const { register, formState } = useForm();

  // const onSubmit = (data) => {
  //   // set "Saving..."
  //   episodeCollection.add({ ...data, timestamp: Date.now() });
  //   // if error
  //   //    show error message
  //   // if suceess
  //   //    clear and set a happy message
  //   reset();
  // };

  return (
    <form className="form" action="#" onSubmit={sendEmail}>
      <div className="row first-row">
        <Input
          label="PILNS VĀRDS"
          containerClassName="input-container half name-container"
          type="text"
          className="input"
          name="name"
          autoComplete="off"
          // {...register("userName", {
          //   required: { value: true, message: "Norādi savu pilnu vārdu" },
          // })}
          // error={formState.errors.userName}
        />

        <Input
          label="E-PASTS"
          containerClassName="input-container half"
          type="email"
          className="input"
          name="email"
          // {...register("userEmail", {
          //   required: { value: true, message: "Norādi savu e-pastu" },
          // })}
          // error={formState.errors.userEmail}
        />
      </div>
      <div className="participants">
        <ParticipantInput
          register={register}
          number={0}
          error={formState.errors.participants?.[0]}
          required="true"
        />
        <ParticipantInput
          register={register}
          number={1}
          error={formState.errors.participants?.[1]}
        />
        <ParticipantInput
          register={register}
          number={2}
          error={formState.errors.participants?.[2]}
        />
      </div>
      {/* Info */}
      <Input
        component="textarea"
        label="IDEJAS APRAKSTS UN PAPILDUS INFORMĀCIJA"
        containerClassName="input-container textarea"
        className="input full"
        autoComplete="off"
        {...register("message", {
          required: { value: true, message: "Norādi savu ideju" },
        })}
        error={formState.errors.message}
        name="message"
      />
      <div className="submit-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="terms"
            id="agree"
            {...register("terms", {
              required: { value: true, message: "Piekrīti noteikumiem" },
            })}
          />{" "}
          <span className="agree-to-rules">Esmu iepazinies ar noteikumiem</span>
        </div>
        <input type="submit" value="SŪTĪT" className="btn" />
      </div>
    </form>
  );
};
