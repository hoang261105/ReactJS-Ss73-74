interface ModalError {
  error: boolean;
  concide: boolean;
  handleCloseErr: () => void;
  handleCloseConcide: () => void;
}

export default function ModalError({
  error,
  concide,
  handleCloseErr,
  handleCloseConcide,
}: ModalError) {
  console.log(888888888888888);

  return (
    <div>
      {/* Modal cảnh báo lỗi */}
      <div className="overlay" hidden={!error}>
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Cảnh báo</h5>
            <i className="fas fa-xmark" onClick={handleCloseErr} />
          </div>
          <div className="modal-body-custom">
            <p>Tên công việc không được phép để trống.</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light" onClick={handleCloseErr}>
              Đóng
            </button>
          </div>
        </div>
      </div>

      {/* Modal cảnh báo trùng */}
      <div className="overlay" hidden={!concide}>
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Cảnh báo</h5>
            <i className="fas fa-xmark" onClick={handleCloseConcide} />
          </div>
          <div className="modal-body-custom">
            <p>Tên công việc không được phép trùng.</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light" onClick={handleCloseConcide}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
