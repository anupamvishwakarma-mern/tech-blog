import React, { useState, useEffect } from "react";
import BlogSidebar from "../Components/common/BlogSidebar";
import BlogContent from "../Components/common/BlogContent";
import { BlogTopbar } from "../Components/common/BlogTopbar";
import { useLocation } from "react-router-dom";
import { blogData } from "../data/BlogData";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const blogId = location.pathname.split("/")[2];
    const blog = blogData.find((blog) => blog.nav === blogId);
    setSelectedBlog(blog);
  }, [location, blogData]);

  return (
    <div className="flex flex-col min-h-screen">
      <BlogTopbar onSelectBlog={setSelectedBlog} selectedBlog={selectedBlog} />
      <div className="flex min-h-screen" style={{ marginTop: "60px" }}>
        <BlogSidebar selectedBlog={selectedBlog} />
        <BlogContent selectedBlog={selectedBlog} />
      </div>
    </div>
  );
};

export default Blogs;
