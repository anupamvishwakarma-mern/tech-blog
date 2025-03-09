import { CopyContainer } from "../../common/CopyContainer";

export const ExpressJSInstallation = () => {
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
      <h1>Express.js Installation</h1>
      <ul>
        <li>Initialize a Node.js Project</li>
        <p>First, create a new directory and initialize a Node.js project:</p>
        <CopyContainer>
          <code>npm init -y</code>
          <button data-clipboard-text="npm init -y" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>

        <li>Install Express.js</li>
        <p>Install Express.js using npm:</p>
        <CopyContainer>
          <code>npm install express</code>
          <button
            data-clipboard-text="npm install express"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Create a Basic Server</li>
        <p>
          Create a file named <code>index.js</code> and add the following code:
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
      </ul>
    </div>
  );
};
