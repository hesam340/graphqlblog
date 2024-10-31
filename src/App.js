import { Route, Routes } from "react-router-dom";

import HomePage from "./componenets/home/HomePage";
import Layout from "./componenets/layout/Layout";
import BlogPage from "./componenets/blog/BlogPage";
import AuthorPage from "./componenets/authors/AuthorPage";
import Blog from "./componenets/blog/Blog";
import Authors from "./componenets/authors/Authors";
import PageNotFound from "./componenets/pagenotfound/PageNotFound";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
