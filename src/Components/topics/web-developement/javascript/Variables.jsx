export const JSVariablesIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to JavaScript Variables</h1>
        <p>
          Variables are used to store data in JavaScript. They can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.
        </p>
        <ul>
          <li><strong>Variable Types:</strong></li>
          <ul>
            <li><code>var</code>: Function-scoped variable (avoid in modern JavaScript).</li>
            <li><code>let</code>: Block-scoped variable that can be reassigned.</li>
            <li><code>const</code>: Block-scoped variable that cannot be reassigned.</li>
          </ul>
          <li><strong>Examples:</strong></li>
          <ul>
            <li><code>let name = "John";</code></li>
            <li><code>const age = 25;</code></li>
          </ul>
        </ul>
      </div>
    );
  };