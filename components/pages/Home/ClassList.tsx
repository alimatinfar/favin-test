import AddClassButton from "./AddClassButton";
import RefreshButton from "./RefreshButton";
import TableList from "../../UI/TableList/TableList";
import ClassFormModal from "./ClassForm/ClassFormModal";
import Image from "next/image";
import EyeSVG from '../../../public/images/svg/eye.svg'
import {useState} from "react";
import Ls from "../../../utils/localStorage";


const headers = [
  'ردیف', 'شماره کلاس', 'نام کلاس', 'زمان ثبت', 'ساعت', 'مشاهده'
]

function EyeIcon({onClick}:{onClick:() => void}) {
  return (
    <Image onClick={onClick} src={EyeSVG} />
  )
}

function getClassTableContent(openEditModal:(classNumber:number) => void) {
  const allClass = Ls.get('class-list') || []

  const content = []

  for(let itemInd in allClass) {
    const item = allClass[itemInd]
    const index = Number(itemInd) + 1
    content.push([
      index, item.classNumber, item.className, item.date, item.time,
      <EyeIcon key={itemInd} onClick={() => openEditModal(item.classNumber)} />
    ])
  }

  return content.sort(function(a:any, b:any){return Number(b.classNumber) - Number(a.classNumber)})
}


const gridClass = {
  wrapperClass: 'grid-cols-8',
  list: [1, 1, 2, 2, 1, 1]
}


function ClassList({}) {
  const [open, setOpen] = useState<boolean>(false)
  const [editClassNumber, setEditClassNumber] = useState<number | null>(null)

  function openModalHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(false)
    setEditClassNumber(null)
  }

  function openEditModal(classNumber:number) {
    setEditClassNumber(classNumber)
    openModalHandler()
  }

  return (
    <>
      <div className='flex items-center justify-between mb-10'>
        <AddClassButton onClick={openModalHandler} />

        <RefreshButton />
      </div>

      <TableList gridClass={gridClass} headers={headers} content={getClassTableContent(openEditModal)} />

      <ClassFormModal open={open} closeHandler={closeHandler} editClassNumber={editClassNumber} />
    </>
  );
}

export default ClassList;