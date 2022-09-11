import Typography from "../Typography/Typography";
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

type Props = {
  label?: string,
  value?: string | number,
  defaultValue?: string | number,
  placeholder?: string,
  register?: (name: string, options: object) => void,
  name?: string,
  options?: object,
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
  onChange?: (e:any) => void,
  isTextArea?: boolean,
}

function Input(
  {label, value, defaultValue, placeholder, isTextArea,
    register, name, options, errorMessage, onChange}: Props
) {

  const inputClassName = `py-2.5 px-4 rounded w-full outline-none duration-300
   border-none hover:border-gray-300 focus:border-gray-400`

  return (
    <>
      <div className='flex items-center space-x-10 space-x-reverse relative w-full mb-0.5'>
        <label className='px-2'>
          <Typography size='sm'>
            {label}
          </Typography>
        </label>
        <div className='space-y-3 flex-1'>
          {isTextArea ? (
            <textarea
              {...(register ? register(name!, options!) : {})}
              {...(onChange ? {onChange: onChange} : {})}
              {...(value && {value: value})}
              autoComplete="off"
              {...(defaultValue && {defaultValue: defaultValue})}
              placeholder={placeholder}
              className={inputClassName}
              rows={4}
            />
          ) : (
            <input
              {...(register ? register(name!, options!) : {})}
              {...(onChange ? {onChange: onChange} : {})}
              {...(value && {value: value})}
              autoComplete="off"
              {...(defaultValue && {defaultValue: defaultValue})}
              placeholder={placeholder}
              className={inputClassName}
            />
          )}
          {errorMessage && (
            <Typography size='xs' className='text-red-500'>
              {errorMessage.toString()}
            </Typography>
          )}
        </div>

      </div>

    </>
  );
}

export default Input;