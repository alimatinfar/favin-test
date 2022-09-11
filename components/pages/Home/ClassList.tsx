import AddClassButton from "./AddClassButton";
import RefreshButton from "./RefreshButton";
import TableList from "../../UI/TableList/TableList";
import ClassFormModal from "./ClassForm/ClassFormModal";
import Image from "next/image";
import EyeSVG from '../../../public/images/svg/eye.svg'
import {useState} from "react";


const headers = [
  'ردیف', 'شماره کلاس', 'نام کلاس', 'زمان ثبت', 'ساعت', 'مشاهده'
]

function EyeIcon() {
  return (
    <Image src={EyeSVG} />
  )
}

const content = [
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={1}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={2}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={3}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={4}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={5}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={6}/>],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', <EyeIcon key={7}/>],
]

const gridClass = {
  wrapperClass: 'grid-cols-8',
  list: [1, 1, 2, 2, 1, 1]
}


function ClassList({}) {
  const [open, setOpen] = useState<boolean>(false)

  function openModalHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(false)
  }

  return (
    <>
      <div className='flex items-center justify-between mb-10'>
        <AddClassButton onClick={openModalHandler} />

        <RefreshButton />
      </div>

      <TableList gridClass={gridClass} headers={headers} content={content} />

      <ClassFormModal open={open} closeHandler={closeHandler}  />
    </>
  );
}

export default ClassList;