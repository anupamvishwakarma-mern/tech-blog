import { CopyContainer } from "../../common/CopyContainer";

export const MySQLInstallation = () => {
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
      <h1>MySQL Installation</h1>
      <ul>
        <li>Install MySQL on Ubuntu</li>
        <p>To install MySQL on Ubuntu, run the following commands:</p>
        <CopyContainer>
          <pre>
            {`sudo apt update
  sudo apt install mysql-server`}
          </pre>
          <button
            data-clipboard-text={`sudo apt update
  sudo apt install mysql-server`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Secure MySQL Installation</li>
        <p>Run the security script to secure your MySQL installation:</p>
        <CopyContainer>
          <code>sudo mysql_secure_installation</code>
          <button
            data-clipboard-text="sudo mysql_secure_installation"
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
