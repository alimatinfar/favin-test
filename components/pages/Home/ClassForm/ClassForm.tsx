import ClassNumberField from "./ClassNumberField";
import ClassNameField from "./ClassNameField";
import DescriptionField from "./DescriptionField";
import Button from "../../../UI/Button/Button";

function ClassForm({}) {
  return (
    <form className='flex flex-col justify-between h-full'>
      <div>
        <div className='flex items-center justify-between mb-10  space-x-10 space-x-reverse'>
          <ClassNumberField />
          <ClassNameField />
        </div>

        <DescriptionField />
      </div>

      <div className='flex justify-end'>
        <Button className='px-6'>ثبت</Button>
      </div>
    </form>
  );
}

export default ClassForm;