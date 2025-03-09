import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Styled components for smooth dropdown animation
const DropdownContainer = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  transition: max-height 0.3s ease-in-out;
`;

const H2 = styled.h2`
  font-size: 20px;
  border-bottom: 1px solid #0082fc;
  padding-bottom: 10px;
  margin-bottom: 17px;
`;

const BlogSidebar = ({ selectedBlog }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const nav = pathParts[3];
    const subNav = pathParts[4];
    const subSubNav = pathParts[5];

    if (nav && selectedBlog) {
      const mainIndex = selectedBlog.points?.findIndex(
        (point) => point.toLowerCase() === nav.toLowerCase()
      );
      if (mainIndex !== -1) {
        setActiveTab(mainIndex + 1);
        setActiveSubTab(null);
      } else {
        const dropdownIndex = selectedBlog.dropdowns?.findIndex(
          (dropdown) => dropdown.title.toLowerCase() === nav.toLowerCase()
        );
        if (dropdownIndex !== -1) {
          setActiveTab(selectedBlog.points?.length + dropdownIndex + 1);
          const subIndex = selectedBlog.dropdowns[
            dropdownIndex
          ].points?.findIndex(
            (point) => point.toLowerCase() === subNav?.toLowerCase()
          );
          if (subIndex !== -1) {
            setActiveSubTab(subIndex + 1);
          } else {
            setActiveSubTab(1);
          }
        }
      }
    }
  }, [location, selectedBlog]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  if (!selectedBlog) {
    return null;
  }

  return (
    <div className="w-64 bg-gray-100 p-4 pe-0">
      <div className="sticky" style={{ top: "155px" }}>
        <H2 className="font-bold">Blog Topics</H2>
        <ul className="space-y-2 ps-2">
          {selectedBlog.points?.map((tab, i) => (
            <li
              key={i}
              className="hover:text-blue-400 h-10 px-3 flex items-center"
              style={{
                backgroundColor: activeTab === i + 1 ? "#0082fc" : "",
                color: activeTab === i + 1 ? "#ffffff" : "#0082fc",
                borderRadius: "30px 0px 0px 30px",
              }}
            >
              <Link
                to={`/blog/${selectedBlog.nav}/${tab.toLowerCase()}`}
                className="hover:text-blue-400 cursor-pointer"
                style={{
                  textDecoration: "none",
                  color: activeTab === i + 1 ? "#ffffff" : "#0082fc",
                }}
              >
                {tab}
              </Link>
            </li>
          ))}
          {selectedBlog.dropdowns?.map((dropdown, index) => (
            <li key={index}>
              <div
                className="hover:text-blue-400 h-10 px-3 flex items-center justify-between cursor-pointer"
                style={{
                  backgroundColor: openDropdown === index ? "#0082fc" : "",
                  color: openDropdown === index ? "#ffffff" : "#0082fc",
                  borderRadius: "30px 0px 0px 30px",
                }}
                onClick={() => handleDropdownToggle(index)}
              >
                <span>{dropdown.title}</span>
                <span>{openDropdown === index ? "▲" : "▼"}</span>
              </div>
              <DropdownContainer isOpen={openDropdown === index}>
                <ul className="ps-4">
                  {dropdown.points.map((subTab, subIndex) => (
                    <li
                      key={subIndex}
                      className="hover:text-blue-400 h-10 px-3 flex items-center"
                      style={{
                        backgroundColor:
                          activeTab ===
                            selectedBlog.points?.length + index + 1 &&
                          activeSubTab === subIndex + 1
                            ? "#0082fc"
                            : "",
                        color:
                          activeTab ===
                            selectedBlog.points?.length + index + 1 &&
                          activeSubTab === subIndex + 1
                            ? "#ffffff"
                            : "#0082fc",
                        borderRadius: "30px 0px 0px 30px",
                      }}
                    >
                      <Link
                        to={`/blog/${
                          selectedBlog.nav
                        }/${dropdown.title.toLowerCase()}/${subTab.toLowerCase()}`}
                        className="hover:text-blue-400 cursor-pointer"
                        style={{
                          textDecoration: "none",
                          color:
                            activeTab ===
                              selectedBlog.points?.length + index + 1 &&
                            activeSubTab === subIndex + 1
                              ? "#ffffff"
                              : "#0082fc",
                        }}
                      >
                        {subTab}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DropdownContainer>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
