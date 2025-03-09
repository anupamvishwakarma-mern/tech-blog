import { CopyContainer } from "../../common/CopyContainer";

export const AWSInstallation = () => {
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
      <h1>AWS Setup</h1>
      <ul>
        <li>Create an AWS Account</li>
        <p>
          To get started with AWS, create an account at:
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Website
          </a>
        </p>

        <li>Install AWS CLI</li>
        <p>
          To interact with AWS services from the command line, install the AWS
          CLI:
        </p>
        <CopyContainer>
          <pre>
            {`curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip awscliv2.zip
  sudo ./aws/install`}
          </pre>
          <button
            data-clipboard-text={`curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip awscliv2.zip
  sudo ./aws/install`}
            onClick={handleCopy}
          >
            copy
          </button>
        </CopyContainer>

        <li>Configure AWS CLI</li>
        <p>Configure the AWS CLI with your credentials:</p>
        <CopyContainer>
          <code>aws configure</code>
          <button data-clipboard-text="aws configure" onClick={handleCopy}>
            copy
          </button>
        </CopyContainer>
      </ul>
    </div>
  );
};
