import { Routes, Route } from "react-router-dom";
import {Homepage} from "./pages/HomePage";
import Posts from "./pages/Posts";
import { NotfoundPage } from "./pages/NotFoundPage";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
