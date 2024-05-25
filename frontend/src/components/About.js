export default function Component() {
  return (
    <section className=" row gy-5">
      <div className="col-12">
        <div className="row gy-3">
          <h1 className="col-12 display-6 fw-bold text-center">About myNotebook</h1>
          <p className="col-12 text-secondary fs-5">
            myNotebook is a powerful React-based application that allows you to effortlessly manage your notes. With a
            simple and intuitive interface, you can create, update, and delete notes, all while your data is securely
            stored in MongoDB.
          </p>
        </div>
      </div>
      <div className="col-12">
        <div className="row gy-3">
          <h2 className="col-12 display-8 fw-bold">Key Features</h2>
          <ul className="col-12 list-unstyled">
            <li className="d-flex align-items-start gap-3">
              <CheckIcon className="mt-1 text-secondary" />
              <div>
                <h5 >Simple and Intuitive Interface</h5>
                <p className="text-secondary">
                  Easily create, update, and delete your notes with a clean and user-friendly interface.
                </p>
              </div>
            </li>
            <li className="d-flex align-items-start gap-3">
              <CheckIcon className="mt-1 text-secondary" />
              <div>
                <h5 >Secure Data Storage</h5>
                <p className="text-secondary">
                  Your notes are safely stored in a MongoDB database, ensuring the privacy and security of your data.
                </p>
              </div>
            </li>
            <li className="d-flex align-items-start gap-3">
              <CheckIcon className="mt-1 text-secondary" />
              <div>
                <h5>Seamless Authentication</h5>
                <p className="text-secondary">
                  Securely authenticate with your account and access your notes from anywhere.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12">
        <div className="row gy-2">
          <h2 className="col-12 display-8 fw-bold">Technology Stack</h2>
          <div className="col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center p-3">
                <ComponentIcon className="text-secondary" />
              </div>
              <div>
                <h5 >ReactJs</h5>
                <p className="text-secondary">
                  The powerful JavaScript library for building user interfaces.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center p-3">
                <DatabaseIcon className="text-secondary" />
              </div>
              <div>
                <h5 >MongoDB</h5>
                <p className="text-secondary">
                  The flexible and scalable NoSQL database for storing your notes.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center p-3">
                <NodeIcon className="text-secondary" />
              </div>
              <div>
                <h5 >Node.js</h5>
                <p className="text-secondary">
                  JavaScript runtime built on Chrome's V8 JavaScript engine.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center p-3">
                <ExpressIcon className="text-secondary" />
              </div>
              <div>
                <h5 >Express.js</h5>
                <p className="text-secondary">
                  Fast, unopinionated, minimalist web framework for Node.js.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center p-3">
                <JsIcon className="text-secondary" />
              </div>
              <div>
                <h5 >JavaScript</h5>
                <p className="text-secondary">
                  The programming language of the Web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function NodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M16 0c-1.03 0-2.055.265-2.95.765l-10 5.772a5.968 5.968 0 0 0-2.95 5.14v11.547c0 2.07 1.07 3.987 2.85 5.032l10 5.773a5.984 5.984 0 0 0 5.9 0l10-5.773A5.968 5.968 0 0 0 32 23.224V11.678a5.973 5.973 0 0 0-2.85-5.14l-10-5.773A5.953 5.953 0 0 0 16 0zm0 2.667c.66 0 1.307.164 1.9.466l10 5.773c.59.337 1.1.82 1.46 1.39.36.572.58 1.215.62 1.877V23.22c-.04.662-.26 1.305-.62 1.877-.36.57-.87 1.053-1.46 1.39l-10 5.772c-.59.338-1.24.505-1.9.466a3.315 3.315 0 0 1-1.9-.466l-10-5.772c-.59-.337-1.1-.82-1.46-1.39-.36-.572-.58-1.215-.62-1.877V11.672c.04-.662.26-1.305.62-1.877.36-.57.87-1.053 1.46-1.39l10-5.773A3.327 3.327 0 0 1 16 2.667zm1.633 9.423c-.588 0-1.093.505-1.093 1.094v.114c0 .586.505 1.093 1.093 1.093h4.713c1.16 0 2.1.94 2.1 2.1v2.092c0 1.16-.94 2.1-2.1 2.1h-7.13c-.602 0-1.093.49-1.093 1.092v2.092c0 .602.49 1.093 1.093 1.093h7.63a1.088 1.088 0 0 0 1.094-1.093v-.115a1.093 1.093 0 0 0-1.094-1.093h-4.713c-1.16 0-2.1-.94-2.1-2.1v-2.092c0-1.16.94-2.1 2.1-2.1h7.13c.602 0 1.093-.49 1.093-1.092v-2.092c0-.602-.49-1.093-1.093-1.093h-7.63a1.094 1.094 0 0 0-1.094 1.093v.115c0 .602.49 1.093 1.094 1.093h4.713c.587 0 1.093-.505 1.093-1.093v-.114c0-.588-.505-1.094-1.093-1.094h-4.713zm-.293 13.352c.584 0 1.06.476 1.06 1.06v.293c0 .584-.476 1.06-1.06 1.06h-2.547c-.584 0-1.06-.476-1.06-1.06v-.293c0-.584.476-1.06 1.06-1.06h2.547z" />
    </svg>
  );
}

function ExpressIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M496 0H16C7.164 0 0 7.164 0 16v480c0 8.836 7.164 16 16 16h480c8.836 0 16-7.164 16-16V16c0-8.836-7.164-16-16-16zM463.4 467.5L297.1 255.8l-47.9 65.7h-34.2L168.6 256 55.8 402.4H11.1l188.8-257L52 44.5h44.7l104.9 145.3 40.8-58.5-98.7-130.8h34.5L256 144.3l79.8-108.8h34.5L371.6 131 496 17.7v35.1L297.4 256l188.5 257.1h-22.5z" />
    </svg>
  );
}

function JsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M0 0v32h32V0H0zm17.723 27.733c-.447 1.008-1.313 1.778-2.527 2.176-.675.222-1.49.316-2.403.291-1.31 0-2.415-.212-3.309-.633-.888-.425-1.575-.98-2.082-1.64l1.86-1.124c.416.482.875.857 1.422 1.13.54.273 1.144.414 1.829.414.615.027 1.145-.098 1.544-.367.366-.238.538-.563.538-.98s-.177-.747-.533-.98c-.357-.233-1.01-.46-1.945-.633-.604-.114-1.157-.273-1.648-.485-.482-.216-.894-.485-1.25-.808-.342-.336-.615-.702-.817-1.1-.215-.423-.322-.934-.317-1.482 0-.764.175-1.442.528-2.011.36-.566.86-1.007 1.483-1.283.63-.285 1.328-.414 2.074-.414 1.215 0 2.232.267 3.057.802.62.38 1.103.89 1.44 1.5l-1.806 1.093c-.28-.447-.647-.815-1.09-1.075-.45-.256-.973-.387-1.505-.378-.636 0-1.116.137-1.413.373-.285.25-.43.57-.423.91 0 .28.106.525.31.72.21.197.666.387 1.37.555 1.267.29 2.22.63 2.825 1.002.39.243.717.556.965.92.24.35.416.742.518 1.16.09.41.137.834.126 1.256 0 .886-.168 1.707-.508 2.432zm12.735-2.555c-.686 1.7-1.807 2.91-3.407 3.702-.88.434-1.882.65-2.92.64-1.29 0-2.368-.2-3.267-.613-.89-.4-1.596-.994-2.107-1.752l1.85-1.137c.38.522.86.955 1.44 1.262.57.305 1.228.46 1.896.45.666.022 1.312-.142 1.863-.485.516-.313.937-.78 1.23-1.34.295-.564.438-1.167.428-1.768h-7.092v-2.15h6.97c.045-1.206-.27-2.176-.94-2.86-.627-.623-1.46-.93-2.517-.93-.677-.016-1.35.142-1.937.456-.545.305-1 .754-1.325 1.29l-1.72-1.08c.423-.656.987-1.206 1.652-1.62.714-.444 1.51-.675 2.336-.67 1.116 0 2.116.22 3.013.66.872.41 1.566 1.027 2.05 1.792.494.766.743 1.644.72 2.54.02.905-.183 1.806-.593 2.64z" />
    </svg>
  );
}

