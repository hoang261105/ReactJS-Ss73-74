import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWork } from "../stores/reducers/workReducer";
import ModalError from "./ModalError";

export default function Work() {
  const listWorkState: any = useSelector((state: any) => state.works.work);
  const [inputWork, setInputWork] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [concide, setConcide] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    const findWork = listWorkState.find((work: any) => work.name === inputWork);
    console.log(11111111, findWork);
    e.preventDefault();
    if (inputWork) {
      if (!findWork) {
        setConcide(false);
        dispatch(addWork({ name: inputWork, status: false }));
        setInputWork("");
      } else {
        console.log(9999);

        setError(true);
        setConcide(true);
      }
    } else {
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWork(e.target.value);
  };

  const handleCloseErr = () => {
    setError(false);
  };

  const handleCloseConcide = () => {
    setConcide(false);
  };
  return (
    <>
      {error && (
        <ModalError
          error={error}
          concide={concide}
          handleCloseErr={handleCloseErr}
          handleCloseConcide={handleCloseConcide}
        />
      )}
      <form
        className="d-flex justify-content-center align-items-center mb-4"
        onSubmit={handleSubmit}
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            id="form2"
            className="form-control"
            onChange={handleChange}
            value={inputWork}
          />
          <label className="form-label" htmlFor="form2">
            Nhập tên công việc
          </label>
        </div>
        <button type="submit" className="btn btn-info ms-2">
          Thêm
        </button>
      </form>
    </>
  );
}
