import { Fragment, useState } from "react";
import Modal from "../../Modal";
import ModalCompo from "../../ModalCompo";

const Diagnosis1 = ({ onNext }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <h2 className="border border-gray-200 px-2 rounded-md">
          Select Diagnosis
        </h2>
        <form>
          <h1 className="">Note :</h1>
          <textarea
            name="field1"
            id=""
            cols="30"
            rows="5"
            placeholder="Write Here"
            className=" border border-gray-200 px-2 rounded-md"
          ></textarea>
        </form>
        <div className=" md:py-4">
          <button
            onClick={() => setShowModal(true)}
            className="w-full p-2 border border-violet-500 text-violet-500 rounded-md"
          >
            Add Ideal Prescription
          </button>
        </div>
        <div className=" md:py-4">
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

export default Diagnosis1;
