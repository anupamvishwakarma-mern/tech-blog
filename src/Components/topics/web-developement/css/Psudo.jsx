export const CSSPseudoIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to CSS Pseudo-Classes and Pseudo-Elements</h1>
        <p>
          Pseudo-classes and pseudo-elements allow you to style elements based on their state or position.
        </p>
        <ul>
          <li><strong>Pseudo-Classes:</strong></li>
          <ul>
            <li><code>:hover</code>: Styles an element when the user hovers over it.</li>
            <li><code>:focus</code>: Styles an element when it receives focus.</li>
            <li><code>:nth-child()</code>: Styles elements based on their position in a parent.</li>
          </ul>
          <li><strong>Pseudo-Elements:</strong></li>
          <ul>
            <li><code>::before</code>: Inserts content before an element.</li>
            <li><code>::after</code>: Inserts content after an element.</li>
            <li><code>::first-line</code>: Styles the first line of a block-level element.</li>
          </ul>
        </ul>
      </div>
    );
  };