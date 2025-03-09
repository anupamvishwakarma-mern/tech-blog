export const DockerIntroduction = () => {
  return (
    <div className="introduction-section">
      <h1>Introduction to Docker</h1>
      <p>
        Docker is a platform for developing, shipping, and running applications
        in containers. Containers allow you to package an application with all
        its dependencies and run it consistently across different environments.
      </p>
      <ul>
        <li>
          <strong>Key Features:</strong>
        </li>
        <ul>
          <li>Lightweight and portable containers.</li>
          <li>Consistent environments for development and production.</li>
          <li>Supports microservices architecture.</li>
          <li>Integrates with CI/CD pipelines.</li>
        </ul>
      </ul>
    </div>
  );
};
