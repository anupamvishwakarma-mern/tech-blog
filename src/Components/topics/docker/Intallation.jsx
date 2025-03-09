import { CopyContainer } from "../../common/CopyContainer";

export const DockerInstallation = () => {
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
      <h1>Docker Installation</h1>
      <ul>
        <li>Install Docker on Ubuntu</li>
        <p>To install Docker on Ubuntu, run the following commands:</p>
        <CopyContainer>
          <pre>
            {`sudo apt update
  sudo apt install docker.io`}
          </pre>
          <button
            data-clipboard-text={`sudo apt update
  sudo apt install docker.io`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Start Docker Service</li>
        <p>Start the Docker service and enable it to run on system boot:</p>
        <CopyContainer>
          <pre>
            {`sudo systemctl start docker
  sudo systemctl enable docker`}
          </pre>
          <button
            data-clipboard-text={`sudo systemctl start docker
  sudo systemctl enable docker`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
