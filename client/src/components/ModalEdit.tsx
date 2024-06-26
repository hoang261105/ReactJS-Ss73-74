import React, { useState } from "react";
import { Works } from "../interface/work";

interface ModalEditProps {
  close: () => void;
  work: Works | null;
  handleUpdate: (updatedWork: Works) => void;
}

export default function ModalEdit({
  close,
  work,
  handleUpdate,
}: ModalEditProps) {
  const [inputWork, setInputWork] = useState<string>(work ? work.name : "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWork(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (work) {
      handleUpdate({ ...work, name: inputWork });
    }
  };

  if (!work) return null;

  return (
    <div>
      <div className="overlay">
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Chỉnh sửa công việc</h5>
            <i className="fas fa-xmark" onClick={close} />
          </div>
          <div className="modal-body-custom">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputWork}
                onChange={handleChange}
                className="form-control"
              />
              <button type="submit" className="btn btn-primary mt-2">
                Cập nhật
              </button>
            </form>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-light" onClick={close}>
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
