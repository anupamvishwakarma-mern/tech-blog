import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blogData } from "../../data/BlogData";

const Topbar = styled.div`
  top: 65px;
  z-index: 999;

  ul::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.li`
  padding: 8px 20px;
  border-radius: 10px 10px 0 0;
  min-width: max-content;
  background-color: ${({ isActive }) => (isActive ? "#0082fc" : "")};
  transition: background-color 0.3s ease-in-out;
`;

export const BlogTopbar = ({ selectedBlog }) => {
  return (
    <Topbar className="h-15 bg-gray-100 w-full sticky">
      <ul className="flex flex-row justify-start h-full items-end space-x-5 overflow-x-auto">
        {blogData.map((blog) => (
          <ListItem
            key={blog.id}
            isActive={selectedBlog?.nav === blog.nav}
            onClick={() => handleActive(blog)}
          >
            <Link
              to={`/blog/${blog.nav}/${blog.points[0].toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: selectedBlog?.nav === blog.nav ? "#ffffff" : "#0082fc",
              }}
            >
              {blog.title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </Topbar>
  );
};
