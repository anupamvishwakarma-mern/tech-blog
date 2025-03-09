import { CopyContainer } from "../../common/CopyContainer";

export const PHPInstallation = () => {
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
      <h1>PHP Installation</h1>
      <ul>
        <li>Install PHP</li>
        <p>On Ubuntu, you can install PHP using the following command:</p>
        <CopyContainer>
          <code>sudo apt install php</code>
          <button
            data-clipboard-text="sudo apt install php"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Verify Installation</li>
        <p>Check the installed PHP version:</p>
        <CopyContainer>
          <code>php --version</code>
          <button data-clipboard-text="php --version" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
