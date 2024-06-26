import FilterWork from "./components/FilterWork";
import ListWork from "./components/ListWork";
import Modal from "./components/ModalDelete";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <Work />
                  {/* Tabs navs */}
                  <FilterWork />
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        <ListWork />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Modal /> */}
    </>
  );
}
