import { Works } from "../interface/work";

interface Modal {
  close: () => void;
  work: Works | null;
  handleDelete: () => void;
}

export default function Modal({ close, work, handleDelete }: Modal) {
  if (!work) return null;
  return (
    <div>
      {/* Modal xác nhận xóa */}

      <div className="overlay">
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Xác nhận</h5>
            <i className="fas fa-xmark" onClick={close} />
          </div>
          <div className="modal-body-custom">
            <p>Bạn chắc chắn muốn xóa công việc {work?.name}?</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light" onClick={close}>
              Hủy
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
