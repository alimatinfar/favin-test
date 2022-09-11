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
      }}
    />
  );
}

export default ClassNumberField;