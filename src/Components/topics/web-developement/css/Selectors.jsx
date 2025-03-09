export const CSSSelectorsIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to CSS Selectors</h1>
        <p>
          CSS (Cascading Style Sheets) uses selectors to target HTML elements and apply styles.
        </p>
        <ul>
          <li><strong>Basic Selectors:</strong></li>
          <ul>
            <li><code>element</code>: Targets all instances of an HTML element (e.g., <code>p</code>).</li>
            <li><code>.class</code>: Targets elements with a specific class (e.g., <code>.container</code>).</li>
            <li><code>#id</code>: Targets a single element with a specific ID (e.g., <code>#header</code>).</li>
          </ul>
          <li><strong>Combinators:</strong></li>
          <ul>
            <li><code>descendant</code>: Targets elements inside another element (e.g., <code>div p</code>).</li>
            <li><code>child</code>: Targets direct children of an element (e.g., <code>ul > li</code>).</li>
            <li><code>adjacent sibling</code>: Targets the element immediately following another element (e.g., <code>h1 + p</code>).</li>
          </ul>
        </ul>
      </div>
    );
  };