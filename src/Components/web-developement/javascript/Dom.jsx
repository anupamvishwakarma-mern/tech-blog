export const JSDOMIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to JavaScript DOM Manipulation</h1>
        <p>
          The Document Object Model (DOM) allows JavaScript to interact with HTML elements.
        </p>
        <ul>
          <li><strong>Selecting Elements:</strong></li>
          <ul>
            <li><code>document.getElementById("id")</code>: Selects an element by its ID.</li>
            <li><code>document.querySelector(".class")</code>: Selects the first matching element.</li>
          </ul>
          <li><strong>Modifying Elements:</strong></li>
          <ul>
            <li><code>element.innerHTML = "New Content";</code>: Changes the content of an element.</li>
            <li><code>element.style.color = "red";</code>: Changes the style of an element.</li>
          </ul>
        </ul>
      </div>
    );
  };