import React, {useState} from 'react';
import Modal from "../../../UI/Modal/Modal";
import ClassForm from "./ClassForm";

function ClassFormModal({}) {
  const [open, setOpen] = useState<boolean>(true)

  function closeHandler() {
    setOpen(false)
  }

  return (
    <Modal onClose={closeHandler} open={open}>
      <ClassForm />
    </Modal>
  );
}

export default ClassFormModal;