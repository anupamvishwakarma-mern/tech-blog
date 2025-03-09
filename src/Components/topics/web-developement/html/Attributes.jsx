export const HTMLAttributesIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to HTML Attributes</h1>
        <p>
          HTML attributes provide additional information about elements. They are always specified in the opening tag.
        </p>
        <ul>
          <li><strong>Common Attributes:</strong></li>
          <ul>
            <li><code>class</code>: Specifies one or more class names for an element.</li>
            <li><code>id</code>: Specifies a unique ID for an element.</li>
            <li><code>src</code>: Specifies the source URL for media elements like <code>&lt;img&gt;</code> and <code>&lt;script&gt;</code>.</li>
            <li><code>href</code>: Specifies the URL for hyperlinks (<code>&lt;a&gt;</code>).</li>
            <li><code>alt</code>: Provides alternative text for images.</li>
            <li><code>style</code>: Adds inline CSS styles to an element.</li>
          </ul>
        </ul>
      </div>
    );
  };