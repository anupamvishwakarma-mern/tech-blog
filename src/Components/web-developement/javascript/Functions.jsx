export const JSFunctionsIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to JavaScript Functions</h1>
        <p>
          Functions are reusable blocks of code that perform a specific task.
        </p>
        <ul>
          <li><strong>Function Declaration:</strong></li>
          <ul>
            <li><code>function greet(name) { console.log(`Hello, name!`) }</code></li>
          </ul>
          <li><strong>Function Expression:</strong></li>
          <ul>
            <li><code>const greet = function(name) { console.log(`Hello, name!`) }</code></li>
          </ul>
          <li><strong>Arrow Functions:</strong></li>
          <ul>
            <li><code>const greet = (name) = console.log(`Hello, name!`);</code></li>
          </ul>
        </ul>
      </div>
    );
  };

