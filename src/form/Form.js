import { useForm } from "react-hook-form";
import { useFirestore } from "reactfire";

import "./Form.css";
import { Input } from "./Input";
import { ParticipantInput } from "./ParticipantInput";

export const Form = () => {
  const episodeCollection = useFirestore().collection("submissions");

  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = (data) => {
    // set "Saving..."
    episodeCollection.add({ ...data, timestamp: Date.now() });
    // if error
    //    show error message
    // if suceess
    //    clear and set a happy message
    reset();
  };

  return (
    <form className="form" action="#" onSubmit={handleSubmit(onSubmit)}>
      <div className="row first-row">
        <Input
          label="PILNS VĀRDS"
          containerClassName="input-container half name-container"
          type="text"
          className="input"
          autocomplete="off"
          {...register("name", {
            required: { value: true, message: "Norādi savu pilnu vārdu" },
          })}
          error={formState.errors.name}
        />

        <Input
          label="E-PASTS"
          containerClassName="input-container half"
          type="email"
          className="input"
          {...register("email", {
            required: { value: true, message: "Norādi savu e-pastu" },
          })}
          error={formState.errors.email}
        />
      </div>
      <div className="participants">
        <ParticipantInput
          register={register}
          number={0}
          error={formState.errors.participants?.[0]}
          required
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
        name="message"
        className="input full"
        autocomplete="off"
        {...register("message", {
          required: { value: true, message: "Norādi savu ideju" },
        })}
        error={formState.errors.message}
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
