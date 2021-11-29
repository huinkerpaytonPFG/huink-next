import PdsInput, { InputProps as PdsInputProps } from "@pds-react/input";
import {
	get, useFormContext, Validate
} from "react-hook-form";


type ErrorMessageObject = Partial<{
  required: string;
  maxLength: string;
  max: string;
  min: string;
  minLength: string;
  pattern: string;
}>;

export type ErrorMessage = string | ErrorMessageObject;

type InputProps = Omit<PdsInputProps, "errorMessage" |"name"> & {
	name: string;
  errorMessage?: ErrorMessage;
  validate?: Validate<any> | Record<string, Validate<any>>;
};


const Input = (props: InputProps) => {
  const formContext = useFormContext();
  const {
    name,
    required,
    maxLength,
    max,
    min,
    minLength,
    pattern,
    validate,
    errorMessage,
    ...otherProps
  } = props;
  const error = get(formContext.formState.errors, name);
  const errorType = error?.type;
  let message = error?.message;

  if (errorType && message.length === 0) {
    if (typeof errorMessage === "string") {
      message = errorMessage;
    } else if (typeof errorMessage === "object") {
      message = errorMessage[errorType as keyof ErrorMessageObject] ;
    } else {
      message = "Oops.";
    }
  }

  return (
    <PdsInput
      errorMessage={message}
      {...formContext.register(name, {
				required: required,
        maxLength: maxLength,
        max: max,
        min: min,
        minLength: minLength,
        pattern: typeof pattern !== "undefined" ? new RegExp(pattern) : undefined,
        validate: validate,
      })}
			// this means people can potentially override the default onChange and onBlur behavior so we'll want to warn about that
			// need to figure out if it's possible to call rhf's <onBlur />
			// formContext.register returns ref and we don't want people to pass ref in
			{...otherProps}
    />
  );
};

export default Input;