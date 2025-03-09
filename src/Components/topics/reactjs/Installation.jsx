import React from "react";
import { CopyContainer } from "../../common/CopyContainer";

export const Installation = () => {
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
      <h1> Installation </h1>

      <ul>
        <li>Install Node.js and npm</li>
        <p>
          Before you can create a React app, you need to have Node.js and npm
          (Node Package Manager) installed on your system.
        </p>
        <p>
          Download
          <a href="https://nodejs.org/" target="_blank">
            Node.js
          </a>
          and install it. <i>It includes npm by default.</i>
        </p>
        <CopyContainer>
          <code>
            node -v <br />
            npm -v
          </code>
          <button data-clipboard-text="node -v && npm -v" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <p>
          If you see version numbers for both, Node.js and npm are installed
          correctly.
        </p>
        <li>Install Create React App Tool</li>
        <p>
          Create React App is an official React tool that provides a boilerplate
          for setting up a new React project. You can install it globally by
          running:
        </p>
        <CopyContainer>
          <code>npm install -g create-react-app</code>
          <button
            data-clipboard-text="npm install -g create-react-app"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <p>
          This command installs the 'create-react-app' command globally on your
          machine.
        </p>
        <li>Create a New React Application</li>
        <p>
          To create a new React app, run the following command in your terminal:
        </p>
        <CopyContainer>
          <code>npx create-react-app my-app</code>
          <button
            data-clipboard-text="npx create-react-app my-app"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <p>Here:</p>
        <ul>
          <li>
            <span className="highlight">`npx`</span> runs the
            <span className="highlight">`create-react-app`</span> package
            without installing it globally.
          </li>
          <li>
            <span className="highlight">`my-app`</span> is the name of your
            project folder/directory. You can replace it with any name you
            prefer (remember to use lowercase).
          </li>
        </ul>
        <p>
          The command creates a new React app in the
          <span className="highlight"> `my-app`</span> directory with the
          necessary files and dependencies for a React project.
        </p>
        <li>Navigate to the Project Directory</li>
        <p>
          Once the project is created, navigate to your project folder using the
          following command:
        </p>
        <CopyContainer>
          <code>cd my-app</code>
          <button data-clipboard-text="cd my-app" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <li>Start the React Development Server</li>
        <p>
          To start the development server and launch your new React application,
          run:
        </p>
        <CopyContainer>
          <code>npm start</code>
          <button data-clipboard-text="npm start" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <p>
          This command starts a local development server and opens your new
          React app in the browser, typically at
          <a href="http://localhost:3000"> http://localhost:3000</a>.
        </p>
      </ul>
      <div className="file-structure-section">
        <h3>File Structure After Installation</h3>
        <p>
          After running create-react-app, the project directory will look
          something like this:
        </p>
        <CopyContainer className="ms-4">
          <pre>
            my-app <br />
            ├── node_modules <br />
            ├── public <br />
            │ ├── index.html <br />
            │ └── ... <br />
            ├── src
            <br />
            │ ├── App.js <br />
            │ ├── index.js <br />
            │ └── ... <br />
            ├── package.json <br />
            └── README.md
            <br />
          </pre>
          <button
            data-clipboard-text="my-app
            ├── node_modules
            ├── public
            │ ├── index.html
            │ └── ...
            ├── src
            │ ├── App.js
            │ ├── index.js
            │ └── ...
            ├── package.json
            └── README.md
            "
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <ul>
          <li>
            <span className="highlight">node_modules/:</span> Contains the node
            modules used by your project.
          </li>
          <li>
            <span className="highlight">public/:</span> Contains the static
            files like index.html where your app will be mounted.
          </li>
          <li>
            <span className="highlight">src/:</span> Contains the React
            components and application logic.
          </li>
          <li>
            <span className="highlight">App.js:</span> The main component of
            your application.
          </li>
          <li>
            <span className="highlight">index.js:</span> The entry point for
            your React app.
          </li>
        </ul>
      </div>
    </div>
  );
};
