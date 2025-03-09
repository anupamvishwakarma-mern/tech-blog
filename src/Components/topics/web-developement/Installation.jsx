import { CopyContainer } from "../../common/CopyContainer";

export const HTMLCSSJSInstallation = () => {
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
      <h1>HTML, CSS, and JavaScript Setup</h1>
      <ul>
        <li>Create a Basic HTML File</li>
        <p>
          Create a file named <code>index.html</code> and add the following
          code:
        </p>
        <CopyContainer>
          <pre>
            {`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
  </body>
  </html>`}
          </pre>
          <button
            data-clipboard-text={`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
  </body>
  </html>`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Create a CSS File</li>
        <p>
          Create a file named <code>styles.css</code> and add the following
          code:
        </p>
        <CopyContainer>
          <pre>
            {`body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }`}
          </pre>
          <button
            data-clipboard-text={`body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Create a JavaScript File</li>
        <p>
          Create a file named <code>script.js</code> and add the following code:
        </p>
        <CopyContainer>
          <pre>{`console.log('Hello from JavaScript!');`}</pre>
          <button
            data-clipboard-text={`console.log('Hello from JavaScript!');`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
