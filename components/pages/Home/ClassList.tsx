import AddClassButton from "./AddClassButton";
import RefreshButton from "./RefreshButton";
import TableList from "../../UI/TableList/TableList";
import ClassFormModal from "./ClassForm/ClassFormModal";

const headers = [
  'ردیف', 'شماره کلاس', 'نام کلاس', 'زمان ثبت', 'ساعت', 'مشاهده'
]

const content = [
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
  ['1', '101', 'ریاضی', '۱۴۰۱/۰۶/۲۰', '۱۲:۱۳', 'مشاهده'],
]

const gridClass = {
  wrapperClass: 'grid-cols-8',
  list: [1, 1, 2, 2, 1, 1]
}


function ClassList({}) {
  return (
    <>
      <div className='flex items-center justify-between mb-10'>
        <AddClassButton />

        <RefreshButton />
      </div>

      <TableList gridClass={gridClass} headers={headers} content={content} />

      <ClassFormModal />
    </>
  );
}

export default ClassList;