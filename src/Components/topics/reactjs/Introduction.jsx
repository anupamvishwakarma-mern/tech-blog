import React from "react";

export const Introduction = () => {
  return (
    <div className="introduction-section">
      <div className="intro">
        <h1>Introduction</h1>
        <p>
          React.js is an open-source JavaScript library developed by Facebook
          for building user interfaces (UIs), especially for single-page
          applications (SPAs). React allows developers to create reusable UI
          components that efficiently update and render just the right parts of
          the application when data changes.
        </p>
        <p>
          React was initially released in 2013 and has since gained immense
          popularity due to its flexibility, efficiency, and simplicity.
        </p>
        <q>
          React.js is a powerful and flexible JavaScript library for building
          dynamic user interfaces. Its component-based architecture, efficient
          rendering with the virtual DOM, and strong community support have made
          it one of the most popular tools for front-end web development.
          Whether you're building a simple website or a complex web application,
          React provides a solid foundation for fast, scalable, and maintainable
          UI development.
        </q>
      </div>
      <div className="features">
        <h1> Key Features </h1>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. The core library is focused on the view
          layer of your application and it's easy to learn.
        </p>
        <ul>
          <li>Component-Based Architecture:</li>
          <ul>
            <li>
              React follows a component-based architecture, where the UI is
              broken down into small, reusable components. Each component is
              like a self-contained module that can manage its own state and
              logic, making development more organized and scalable.
            </li>
          </ul>
          <li>Declarative Syntax:</li>
          <ul>
            <li>
              React allows developers to describe what the UI should look like
              based on the application's current state. React takes care of
              efficiently updating and rendering components when data changes.
            </li>
          </ul>
          <li>Virtual DOM:</li>
          <ul>
            <li>
              React uses a Virtual DOM, a lightweight copy of the real DOM, to
              improve performance. When changes are made to the application
              state, React updates the virtual DOM first and then efficiently
              updates only the necessary parts of the actual DOM, minimizing
              costly direct DOM manipulations.
            </li>
          </ul>
          <li>Unidirectional Data Flow:</li>
          <ul>
            <li>
              React enforces a unidirectional (one-way) data flow, meaning data
              flows from parent components to child components via props. This
              makes debugging and managing state easier.
            </li>
          </ul>
          <li>JSX (JavaScript XML):</li>
          <ul>
            <li>
              React uses a syntax extension called JSX to write HTML-like code
              directly within JavaScript. This makes the code more intuitive and
              easier to understand.
            </li>
          </ul>
          <li>State and Props:</li>
          <ul>
            <li>
              State represents the internal data of a component that may change
              over time. React automatically re-renders the component whenever
              its state changes.
            </li>
            <li>
              Props (short for properties) are used to pass data from parent
              components to child components.
            </li>
          </ul>
          <li>Hooks (Functional Components):</li>
          <ul>
            <li>
              Introduced in React 16.8, Hooks allow functional components to use
              state and other React features without writing class components.
            </li>
            <li>Common hooks include useState, useEffect, and useContext.</li>
          </ul>
        </ul>
      </div>
      <div className="why-use-react">
        <h1>Why Use React?</h1>
        <ul>
          <li>Component Reusability:</li>
          <ul>
            <li>
              React promotes building reusable UI components, making development
              faster and more maintainable.
            </li>
          </ul>
          <li>Fast Rendering with Virtual DOM:</li>
          <ul>
            <li>
              The virtual DOM ensures that React applications perform well, even
              with frequent updates, by minimizing direct manipulations of the
              real DOM.
            </li>
          </ul>
          <li>Large Ecosystem:</li>
          <ul>
            <li>
              React has a large ecosystem of libraries, tools, and community
              support, which simplifies tasks like routing, state management,
              and handling side effects.
            </li>
          </ul>
          <li>SEO-Friendly:</li>
          <ul>
            <li>
              React can be rendered on the server using libraries like Next.js,
              which improves SEO for React applications.
            </li>
          </ul>
          <li>Great Developer Tools:</li>
          <ul>
            <li>
              Tools like the React Developer Tools browser extension provide
              developers with insights into component hierarchies, state, and
              props, making debugging easier.
            </li>
          </ul>
        </ul>
      </div>
      <div className="who-use-react">
        <h1>Who Uses React?</h1>
        <p>React is widely used by companies such as:</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Airbnb</li>
          <li>Uber</li>
          <li>Netflix</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    </div>
  );
};
