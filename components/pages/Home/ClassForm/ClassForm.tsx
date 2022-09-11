import ClassNumberField from "./ClassNumberField";
import ClassNameField from "./ClassNameField";
import DescriptionField from "./DescriptionField";
import Button from "../../../UI/Button/Button";
import {useForm} from "react-hook-form";
import Ls from "../../../../utils/localStorage";
import PersianDatewithNamedMonth from "../../../../utils/DatePersianFormatter";

type Props = {
  closeHandler: () => void
}

function ClassForm({closeHandler}: Props) {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  function onSubmit(data: any) {
    const allClass = Ls.get('class-list') || []
    console.log('allClass', allClass)

    const formData = {
      ...data,
      date: PersianDatewithNamedMonth({date: new Date(), format: 'YYYY/MM/DD'}),
      time: PersianDatewithNamedMonth({date: new Date(), format: 'hh:mm'})
    }
    console.log('formData', formData)
    Ls.add('class-list', [...allClass, formData])
    alert('کلاس با موفقیت اضافه شد')
    closeHandler()
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-full'>
      <div>
        <div className='flex items-center justify-between mb-10  space-x-10 space-x-reverse'>
          <ClassNumberField register={register} errorMessage={errors?.classNumber?.message} />
          <ClassNameField register={register} errorMessage={errors?.className?.message} />
        </div>

        <DescriptionField register={register} errorMessage={errors?.description?.message} />
      </div>

      <div className='flex justify-end'>
        <Button className='px-6'>ثبت</Button>
      </div>
    </form>
  );
}

export default ClassForm;