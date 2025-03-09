import React from "react";
import { CopyContainer } from "../../common/CopyContainer";

export const NodeJSInstallation = () => {
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
      <h1>Node.js Installation</h1>

      <ul>
        <li>Download and Install Node.js</li>
        <p>
          To get started with Node.js, you need to download and install it on
          your system.
        </p>
        <p>
          Download Node.js from the official website:
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>
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
          After installation, you can verify the installation by running the
          above commands in your terminal. If you see version numbers for both
          Node.js and npm, the installation was successful.
        </p>

        <li>Create a New Node.js Project</li>
        <p>
          To create a new Node.js project, navigate to your desired directory
          and run the following command:
        </p>
        <CopyContainer>
          <code>npm init -y</code>
          <button data-clipboard-text="npm init -y" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <p>
          This command initializes a new Node.js project and creates a{" "}
          <code>package.json</code> file with default settings.
        </p>

        <li>Install Dependencies</li>
        <p>
          To install a package (e.g., Express.js) for your Node.js project, use
          the following command:
        </p>
        <CopyContainer>
          <code>npm install express</code>
          <button
            data-clipboard-text="npm install express"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <p>
          This command installs the <code>express</code> package and adds it to
          your <code>package.json</code> file under dependencies.
        </p>

        <li>Create a Basic Server</li>
        <p>
          Create a file named <code>index.js</code> and add the following code
          to set up a basic server:
        </p>
        <CopyContainer>
          <pre>
            {`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
          </pre>
          <button
            data-clipboard-text={`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <p>
          This code sets up a basic Express server that listens on port 3000 and
          responds with "Hello World!" when accessed.
        </p>

        <li>Run the Server</li>
        <p>To start the server, run the following command in your terminal:</p>
        <CopyContainer>
          <code>node index.js</code>
          <button data-clipboard-text="node index.js" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
        <p>
          Once the server is running, you can access it by navigating to{" "}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>{" "}
          in your browser.
        </p>
      </ul>

      <div className="file-structure-section">
        <h3>File Structure After Installation</h3>
        <p>
          After setting up a basic Node.js project, your directory structure
          might look like this:
        </p>
        <CopyContainer className="ms-4">
          <pre>
            {`my-node-app/
├── node_modules/
├── package.json
├── package-lock.json
└── index.js`}
          </pre>
          <button
            data-clipboard-text={`my-node-app/
├── node_modules/
├── package.json
├── package-lock.json
└── index.js`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
        <ul>
          <li>
            <span className="highlight">node_modules/:</span> Contains all the
            installed dependencies.
          </li>
          <li>
            <span className="highlight">package.json:</span> Contains metadata
            about the project and its dependencies.
          </li>
          <li>
            <span className="highlight">index.js:</span> The entry point for
            your Node.js application.
          </li>
        </ul>
      </div>
    </div>
  );
};
