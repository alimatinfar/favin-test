import {FormFieldType} from "../../../../types/FormFieldType";
import Input from "../../../UI/Input/Input";

function ClassNumberField({register, errorMessage}: FormFieldType) {
  return (
    <Input
      register={register}
      errorMessage={errorMessage}
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
      }}
    />
  );
}

export default ClassNumberField;