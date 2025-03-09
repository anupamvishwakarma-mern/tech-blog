import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BlogsIntro } from "../featurs/BlogsIntro";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
  width: 100%;
  padding: 40px;

  .breadcrumb-nav {
    margin-bottom: 30px;
    border-left: 3px solid #0082fc;
    display: flex;
    align-items: center;
    height: 50px;
    background: linear-gradient(
      to right,
      rgb(0 132 255 / 34%) 0%,
      rgb(234 245 255) 50%,
      transparent 100%
    );
  }

  .breadcrumb {
    margin: 0 20px;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  .breadcrumb-item {
    color: #000000;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item a {
    color: #0082fc;
    text-decoration: none;
  }

  .breadcrumb-item a:hover {
    text-decoration: underline;
  }

  .breadcrumb-separator {
    margin: 0 8px;
    color: #666;
  }
`;

const BlogContent = ({ selectedBlog }) => {
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const nav = pathParts[3]; // e.g., "node-js" or "web-dev"
    const subNav = pathParts[4]; // e.g., "Introduction" or "html"
    const subSubNav = pathParts[5]; // e.g., "tags"

    if (nav && selectedBlog) {
      // Find the active main menu item
      const mainIndex = selectedBlog.points?.findIndex(
        (point) => point.toLowerCase() === nav.toLowerCase()
      );
      if (mainIndex !== -1) {
        setActive(mainIndex + 1);
        setActiveSub(null); // Reset submenu
      } else {
        // Check if it's a submenu
        const dropdownIndex = selectedBlog.dropdowns?.findIndex(
          (dropdown) => dropdown.title.toLowerCase() === nav.toLowerCase()
        );
        if (dropdownIndex !== -1) {
          setActive(selectedBlog.points?.length + dropdownIndex + 1);
          // Find the active submenu item
          const subIndex = selectedBlog.dropdowns[
            dropdownIndex
          ].points?.findIndex(
            (point) => point.toLowerCase() === subNav?.toLowerCase()
          );
          if (subIndex !== -1) {
            setActiveSub(subIndex + 1);
          } else {
            setActiveSub(1); // Default to the first submenu item
          }
        }
      }
    }
  }, [location, selectedBlog]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active, activeSub, location]);

  if (!selectedBlog) {
    return <BlogsIntro />;
  }

  let ContentComponent = null;

  if (active <= selectedBlog.points?.length) {
    // Main content
    ContentComponent = selectedBlog.content[active - 1];
  } else {
    // Submenu content
    const dropdownIndex = active - selectedBlog.points?.length - 1;
    const dropdown = selectedBlog.dropdowns[dropdownIndex];
    if (dropdown) {
      ContentComponent = dropdown.content[activeSub - 1];
    }
  }

  // Generate breadcrumb dynamically
  const generateBreadcrumb = () => {
    const breadcrumbItems = [];

    // Add the main blog title (e.g., "Web Development")
    breadcrumbItems.push(
      <li key="main" className="breadcrumb-item">
        <Link to={`/blog/${selectedBlog.nav}`} className="flex items-center gap-2">
          <img src={selectedBlog.image} alt="" height={20} width={20} /> {selectedBlog.title}
        </Link>
      </li>
    );

    if (active <= selectedBlog.points?.length) {
      // Main menu item (e.g., "Installation")
      breadcrumbItems.push(
        <li
          key="main-point"
          className="breadcrumb-item active"
          aria-current="page"
        >
          {selectedBlog.points[active - 1]}
        </li>
      );
    } else {
      // Submenu items (e.g., "HTML" → "Tags")
      const dropdownIndex = active - selectedBlog.points?.length - 1;
      const dropdown = selectedBlog.dropdowns[dropdownIndex];

      // Add dropdown title (e.g., "HTML")
      breadcrumbItems.push(
        <li key="dropdown" className="breadcrumb-item">
          <Link
            to={`/blog/${selectedBlog.nav}/${dropdown.title.toLowerCase()}`}
          >
            {dropdown.title}
          </Link>
        </li>
      );

      // Add submenu point (e.g., "Tags")
      breadcrumbItems.push(
        <li
          key="sub-point"
          className="breadcrumb-item active"
          aria-current="page"
        >
          {dropdown.points[activeSub - 1]}
        </li>
      );
    }

    return breadcrumbItems;
  };

  return (
    <ContentContainer>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb">
          {generateBreadcrumb().map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index < generateBreadcrumb().length - 1 && (
                <li className="breadcrumb-separator">/</li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      {ContentComponent && <ContentComponent />}
    </ContentContainer>
  );
};

export default BlogContent;
