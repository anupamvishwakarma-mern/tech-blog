import { CopyContainer } from "../../../common/CopyContainer";

export const PostgreSQLInstallation = () => {
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
      <h1>PostgreSQL Installation</h1>
      <ul>
        <li>Install PostgreSQL on Ubuntu</li>
        <p>To install PostgreSQL on Ubuntu, run the following commands:</p>
        <CopyContainer>
          <pre>
            {`sudo apt update
  sudo apt install postgresql postgresql-contrib`}
          </pre>
          <button
            data-clipboard-text={`sudo apt update
  sudo apt install postgresql postgresql-contrib`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Start PostgreSQL Service</li>
        <p>Start the PostgreSQL service and enable it to run on system boot:</p>
        <CopyContainer>
          <pre>
            {`sudo systemctl start postgresql
  sudo systemctl enable postgresql`}
          </pre>
          <button
            data-clipboard-text={`sudo systemctl start postgresql
  sudo systemctl enable postgresql`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
