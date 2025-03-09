import { CopyContainer } from "../../common/CopyContainer";

export const SQLiteInstallation = () => {
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
      <h1>SQLite Installation</h1>
      <ul>
        <li>Install SQLite on Ubuntu</li>
        <p>To install SQLite on Ubuntu, run the following command:</p>
        <CopyContainer>
          <code>sudo apt install sqlite3</code>
          <button
            data-clipboard-text="sudo apt install sqlite3"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Verify Installation</li>
        <p>Check the installed SQLite version:</p>
        <CopyContainer>
          <code>sqlite3 --version</code>
          <button data-clipboard-text="sqlite3 --version" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
