import React from "react";
import { CopyContainer } from "../../common/CopyContainer";


export const NextJSInstallation = () => {
  const handleCopy = (event) => {
    navigator.clipboard
      .writeText(event.target.getAttribute("data-clipboard-text"))
      .then(() => {
        event.target.innerText = "Copied";
        setTimeout(() => {
          event.target.innerText = "copy";
        }, 3000);
      });
  };

  return (
    <div className="installation-section">
      <h1>Next.js Installation</h1>
      <ul>
        <li>Create a New Next.js Project</li>
        <p>
          To create a new Next.js project, run the following command in your
          terminal:
        </p>
        <CopyContainer>
          <code>npx create-next-app@latest my-next-app</code>
          <button
            data-clipboard-text="npx create-next-app@latest my-next-app"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <p>
          Replace <code>my-next-app</code> with your desired project name.
        </p>

        <li>Navigate to the Project Directory</li>
        <p>Once the project is created, navigate to your project folder:</p>
        <CopyContainer>
          <code>cd my-next-app</code>
          <button data-clipboard-text="cd my-next-app" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>

        <li>Start the Development Server</li>
        <p>To start the development server, run:</p>
        <CopyContainer>
          <code>npm run dev</code>
          <button data-clipboard-text="npm run dev" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <p>
          Your Next.js app will be running at{" "}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>
          .
        </p>
      </ul>
    </div>
  );
};
