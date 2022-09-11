import {FormFieldType} from "../../../../types/FormFieldType";
import Input from "../../../UI/Input/Input";

function ClassNumberField({register, errorMessage}: FormFieldType) {
  return (
    <Input
      isTextArea={true}
      register={register}
      errorMessage={errorMessage}
      name='description'
      label='توضیحات'
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