import { InputWrapper } from "./InputWrapper";

export const ParticipantInput = ({ number, error, register = false }) => (
  <div className="row participant">
    <InputWrapper
      label={`${number + 1}. DALĪBNIEKA PILNS VĀRDS`}
      containerClassName="input-container half"
      type="text"
      autoComplete="off"
      name={`pname${number.toString()}`}
      className="input"
      {...register(`participants-${number}-pname`, {
        maxLength: {
          value: 30, 
          message: "Nekorekti dati! Dalībnieka vārda garumam jābūt <=30 simboli!"
        },
      })}
      error={error?.pname}
    />
    <InputWrapper
      label="KLASE"
      containerClassName="input-container small"
      type="text"
      autoComplete="off"
      name={`grade${number.toString()}`}
      className="input"
      {...register(`participants-${number}-grade`, {
        maxLength: {
          value: 4, 
          message: "Nekorekti dati! Klases lauka garumam jābūt <=4 simboli!"
        },
      })}
      error={error?.grade}
    />
  </div>
);
