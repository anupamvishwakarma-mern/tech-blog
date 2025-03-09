import { CopyContainer } from "../../common/CopyContainer";

export const PythonInstallation = () => {
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
        <h1>Python Installation</h1>
        <ul>
          <li>Download and Install Python</li>
          <p>
            Download Python from the official website:
            <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">
              Python.org
            </a>
          </p>
          <CopyContainer>
            <code>python --version</code>
            <button data-clipboard-text="python --version" onClick={handleCopy}>
              copy
            </button>
          </CopyContainer>
          <p>
            Verify the installation by running the above command. It should display the installed Python version.
          </p>
  
          <li>Install pip (Python Package Manager)</li>
          <p>
            pip is usually installed with Python. To check if pip is installed, run:
          </p>
          <CopyContainer>
            <code>pip --version</code>
            <button data-clipboard-text="pip --version" onClick={handleCopy}>
              copy
            </button>
          </CopyContainer>
        </ul>
      </div>
    );
  };