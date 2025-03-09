import { CopyContainer } from "../../common/CopyContainer";

export const GitInstallation = () => {
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
      <h1>Git Installation</h1>
      <ul>
        <li>Install Git on Ubuntu</li>
        <p>To install Git on Ubuntu, run the following commands:</p>
        <CopyContainer>
          <pre>
            {`sudo apt update
  sudo apt install git`}
          </pre>
          <button
            data-clipboard-text={`sudo apt update
  sudo apt install git`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Verify Installation</li>
        <p>Check the installed Git version:</p>
        <CopyContainer>
          <code>git --version</code>
          <button data-clipboard-text="git --version" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
