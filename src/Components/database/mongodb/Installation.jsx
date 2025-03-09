import { CopyContainer } from "../../common/CopyContainer";

export const MongoDBInstallation = () => {
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
      <h1>MongoDB Installation</h1>
      <ul>
        <li>Install MongoDB</li>
        <p>On Ubuntu, you can install MongoDB using the following commands:</p>
        <CopyContainer>
          <pre>
            {`sudo apt update
  sudo apt install mongodb`}
          </pre>
          <button
            data-clipboard-text={`sudo apt update
  sudo apt install mongodb`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Start MongoDB Service</li>
        <p>Start the MongoDB service and enable it to run on system boot:</p>
        <CopyContainer>
          <pre>
            {`sudo systemctl start mongodb
  sudo systemctl enable mongodb`}
          </pre>
          <button
            data-clipboard-text={`sudo systemctl start mongodb
  sudo systemctl enable mongodb`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
