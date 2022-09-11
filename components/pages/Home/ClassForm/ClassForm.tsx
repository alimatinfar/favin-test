import ClassNumberField from "./ClassNumberField";
import ClassNameField from "./ClassNameField";
import DescriptionField from "./DescriptionField";
import Button from "../../../UI/Button/Button";
import {useForm} from "react-hook-form";
import Ls from "../../../../utils/localStorage";
import PersianDatewithNamedMonth from "../../../../utils/DatePersianFormatter";
import {useEffect} from "react";

type Props = {
  closeHandler: () => void;
  editClassNumber: number | null;
}



function ClassForm({closeHandler, editClassNumber}: Props) {
  const allClass = Ls.get('class-list') || []

  const {register, handleSubmit, watch, setValue, setError, clearErrors,  formState: {errors}} = useForm();
  let currentClass:any;

  if (editClassNumber) {
    currentClass = allClass.find((item:any) => item.classNumber === editClassNumber)
  }


  function onSubmit(data: any) {

    console.log('allClass', allClass)

    const nowDate = PersianDatewithNamedMonth({date: new Date(), format: 'YYYY/MM/DD'})
    const nowTime = PersianDatewithNamedMonth({date: new Date(), format: 'hh:mm'})

    const date = currentClass ? currentClass.date : nowDate
    const time = currentClass ? currentClass.time : nowTime

    const formData = {
      ...data,
      date: date,
      time: time
    }
    console.log('formData', formData)
    Ls.add('class-list', [
      ...editClassNumber ? allClass.filter((item:any) => item.classNumber !== editClassNumber) : allClass,
      formData
    ])
    alert('کلاس با موفقیت اضافه شد')
    closeHandler()
  }

  useEffect(function() {
    if (editClassNumber && currentClass) {
      setValue('classNumber', currentClass.classNumber)
      setValue('className', currentClass.className)
      setValue('description', currentClass.description)
    }
  }, [editClassNumber])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-full'>
      <div>
        <div className='flex items-center justify-between mb-10  space-x-10 space-x-reverse'>
          <ClassNumberField
            setError={setError} clearErrors={clearErrors} errors={errors}
            register={register} errorMessage={errors?.classNumber?.message} />
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