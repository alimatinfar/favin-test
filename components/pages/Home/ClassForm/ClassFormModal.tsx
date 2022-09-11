import React, {useState} from 'react';
import Modal from "../../../UI/Modal/Modal";
import ClassForm from "./ClassForm";

type Props = {
  open: boolean;
  closeHandler: () => void;
}

function ClassFormModal({open, closeHandler}: Props) {

  return (
    <Modal onClose={closeHandler} open={open}>
      <ClassForm closeHandler={closeHandler} />
    </Modal>
  );
}

export default ClassFormModal;