import { CopyContainer } from "../../common/CopyContainer";

export const BootstrapInstallation = () => {
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
        <h1>Bootstrap Installation</h1>
        <ul>
          <li>Install Bootstrap via npm</li>
          <p>
            To install Bootstrap using npm, run the following command in your terminal:
          </p>
          <CopyContainer>
            <code>npm install bootstrap</code>
            <button data-clipboard-text="npm install bootstrap" onClick={handleCopy}>
              copy
            </button>
          </CopyContainer>
  
          <li>Include Bootstrap in Your Project</li>
          <p>
            After installation, include Bootstrap's CSS and JS files in your project:
          </p>
          <CopyContainer>
            <pre>
              {`import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}
            </pre>
            <button
              data-clipboard-text={`import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}
              onClick={handleCopy}
            >
              copy
            </button>
          </CopyContainer>
        </ul>
      </div>
    );
  };