import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import FeaturedArticles from "./components/FeaturedArticles";
import RecentArticles from "./components/RecentArticles";
import Personalized from "./components/Personalized";
import Bookmarks from "./pages/Bookmarks";
import Drafts from "./pages/Drafts";
import Explore from "./pages/Explore";



function App() {
  
  return (
    <div className="App flex flex-col gap-5 mb-24 bg-[#fafbff]">
      <Navbar />
      

      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='feature' element={<FeaturedArticles />} />
          <Route path='recent' element={<RecentArticles />} />
          <Route path='' element={<Personalized />} />
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='drafts' element={<Drafts />} />
          <Route path='explore' element={<Explore />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
