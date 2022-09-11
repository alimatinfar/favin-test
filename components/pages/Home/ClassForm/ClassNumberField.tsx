import {FormFieldType} from "../../../../types/FormFieldType";
import Input from "../../../UI/Input/Input";
import Ls from "../../../../utils/localStorage";

interface Props extends FormFieldType {
  clearErrors: any;
  setError: any;
  errors: any;
}

function ClassNumberField({register, errorMessage, clearErrors, setError, errors}: Props) {

  function checkClassNumberExist(value:number) {
    const allClass = Ls.get('class-list') || []

    const filtered = allClass.filter((item:any) => item.classNumber === value)
    const isExist = filtered.length !== 0

    if (isExist) {
      setError('customClassNumber', {type: 'custom', message: 'این شماره کلاس موجود است'});
    } else {
      clearErrors('customClassNumber')
    }
  }

  return (
    <Input
      register={register}
      errorMessage={errorMessage || errors?.customClassNumber?.message}
      name='classNumber'
      label='شماره کلاس'
      options={{
        required: {
          value: true,
          message: "این فیلد اجباریست"
        },
        min: {
          value: 100,
          message: "شماره کلاس باید بین ۱۰۰ تا ۱۹۹ باشد"
        },
        max: {
          value: 199,
          message: "شماره کلاس باید بین ۱۰۰ تا ۱۹۹ باشد"
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "فیلد باید عدد باشد"
        },
        onChange: (e:any) => checkClassNumberExist(e.target.value)
      }}
    />
  );
}

export default ClassNumberField;