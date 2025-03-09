export const HTMLTagsIntroduction = () => {
    return (
      <div className="introduction-section">
        <h1>Introduction to HTML Tags</h1>
        <p>
          HTML (HyperText Markup Language) uses tags to define the structure and content of a webpage. Tags are enclosed in angle brackets (<code>&lt; &gt;</code>).
        </p>
        <ul>
          <li><strong>Basic Tags:</strong></li>
          <ul>
            <li><code>&lt;html&gt;</code>: The root element of an HTML document.</li>
            <li><code>&lt;head&gt;</code>: Contains meta-information about the document.</li>
            <li><code>&lt;body&gt;</code>: Contains the visible content of the webpage.</li>
            <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Headings of different levels.</li>
            <li><code>&lt;p&gt;</code>: Defines a paragraph.</li>
            <li><code>&lt;a&gt;</code>: Creates a hyperlink.</li>
            <li><code>&lt;img&gt;</code>: Embeds an image.</li>
          </ul>
          <li><strong>Semantic Tags:</strong></li>
          <ul>
            <li><code>&lt;header&gt;</code>: Represents the header of a section or page.</li>
            <li><code>&lt;footer&gt;</code>: Represents the footer of a section or page.</li>
            <li><code>&lt;section&gt;</code>: Defines a section of the document.</li>
            <li><code>&lt;article&gt;</code>: Represents independent, self-contained content.</li>
            <li><code>&lt;nav&gt;</code>: Defines navigation links.</li>
          </ul>
        </ul>
      </div>
    );
  };