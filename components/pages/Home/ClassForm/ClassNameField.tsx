import {FormFieldType} from "../../../../types/FormFieldType";
import Input from "../../../UI/Input/Input";

function ClassNameField({register, errorMessage}: FormFieldType) {
  return (
    <Input
      register={register}
      errorMessage={errorMessage}
      name='className'
      label='نام کلاس'
      options={{
        required: {
          value: true,
          message: "این فیلد اجباریست"
        },
      }}
    />
  );
}

export default ClassNameField;