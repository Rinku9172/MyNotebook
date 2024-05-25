import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="w-100">
      <section className="w-100 py-5 py-md-6 py-lg-7 bg-light text-dark">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-lg-5 px-3 px-md-4">
          <div className="text-center text-lg-start">
            <h1 className="display-4 fw-bold">Introducing myNotebook</h1>
            <p className="mx-auto mx-lg-0" style={{ maxWidth: '600px', color: '#6c757d' }}>
              A simple and secure note-taking app built with React and MongoDB. Easily create, update, and delete your
              notes, all while keeping your data safe.
            </p>
            <div className="d-flex flex-column flex-md-row gap-2">
              <Link
                className="btn btn-dark px-4"
                to="/notes"
              >
                Explore Notes
              </Link>
              
            </div>
          </div>
          <img
            alt="myNotebook"
            className="mx-auto rounded overflow-hidden"
            style={{ width: '100%', maxWidth: '550px', height: 'auto' }}
            src="https://i.postimg.cc/HnJSJGcZ/notes-img.jpg"
          />
        </div>
      </section>
    </main>
  );
}
