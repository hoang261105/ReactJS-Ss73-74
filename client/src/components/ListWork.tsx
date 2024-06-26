import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWork,
  getWork,
  updateWork,
} from "../stores/reducers/workReducer";
import { Works } from "../interface/work";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

export default function ListWork() {
  const listWorkState: any = useSelector((state: any) => state.works.work);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<Works | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWork());
  }, [dispatch]);

  const handleDeleteClick = (work: Works) => {
    setShowDeleteModal(true);
    setSelectedWork(work);
  };

  const handleEditClick = (work: Works) => {
    setShowEditModal(true);
    setSelectedWork(work);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedWork(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedWork(null);
  };

  const handleDelete = () => {
    if (selectedWork) {
      dispatch(deleteWork(selectedWork.id));
      handleCloseDeleteModal();
    }
  };

  const handleUpdate = (updatedWork: Works) => {
    dispatch(updateWork({ id: selectedWork!.id, work: updatedWork }));
    handleCloseEditModal();
  };

  return (
    <>
      {showDeleteModal && (
        <ModalDelete
          close={handleCloseDeleteModal}
          work={selectedWork}
          handleDelete={handleDelete}
        />
      )}
      {showEditModal && (
        <ModalEdit
          close={handleCloseEditModal}
          work={selectedWork}
          handleUpdate={handleUpdate}
        />
      )}
      <ul>
        {listWorkState.map((work: Works) => (
          <li
            key={work.id}
            className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
            style={{ backgroundColor: "#f4f6f7" }}
          >
            <div>
              <input className="form-check-input me-2" type="checkbox" />
              <span>{work.name}</span>
            </div>
            <div className="d-flex gap-3">
              <i
                className="fas fa-pen-to-square text-warning"
                onClick={() => handleEditClick(work)}
              />
              <i
                onClick={() => handleDeleteClick(work)}
                className="far fa-trash-can text-danger"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
