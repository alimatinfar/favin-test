import React, {useState} from 'react';
import Modal from "../../../UI/Modal/Modal";
import ClassForm from "./ClassForm";

type Props = {
  open: boolean;
  closeHandler: () => void;
  editClassNumber: number | null;
}

function ClassFormModal({open, closeHandler, editClassNumber}: Props) {

  return (
    <Modal onClose={closeHandler} open={open}>
      <ClassForm closeHandler={closeHandler} editClassNumber={editClassNumber} />
    </Modal>
  );
}

export default ClassFormModal;