import { Fragment, useState } from "react";
import Modal from "../Modal";
import ModalCompo from "../ModalCompo";
import Diagnosis2Input from "../(reUsableComponent)/Diagnosis2Input";

const Diagnosis2 = ({ onPrev, onNext }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <h2 className="border border-gray-200 px-2 rounded-md">
          Select Diagnosis
        </h2>
        <Diagnosis2Input
          title={"Weight"}
          description={"Regular Practice &  early sleep , early bed"}
        />
        <Diagnosis2Input
          title={"Pressure Low"}
          description={"Regular Practice &  early sleep , early bed"}
        />
        <div className=" py-4">
          <button
            onClick={() => setShowModal(true)}
            className="w-full p-2 border border-violet-500 text-violet-500 rounded-md"
          >
            Add Ideal Prescription
          </button>
        </div>
        <div className=" py-4">
          <button className="w-full p-2 border border-gray-500 text-gray-500 rounded-md">
            Create Ideal Prescription
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div>
          <ModalCompo></ModalCompo>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Diagnosis2;
