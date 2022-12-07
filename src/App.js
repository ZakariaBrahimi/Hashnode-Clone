import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import FeaturedArticles from "./components/FeaturedArticles";
import RecentArticles from "./components/RecentArticles";
import Personalized from "./components/Personalized";
import Bookmarks from "./pages/Bookmarks";
import Drafts from "./pages/Drafts";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import LeftRightSides from "./components/LeftRightSides";
import DeleteAccount from "./components/DeleteAccount";
import EditProfile from "./components/EditProfile";
import CreateNewArticle from "./pages/CreateNewArticle";
import LoginSignup from "./pages/LoginSignup";
import Article from "./pages/Article";



function App() {
  
  return (
    <div className="App flex flex-col gap-5 h-screen bg-[#fafbff]">
      <Navbar />
      <Routes>
        <Route path='settings' element={<AccountSettings />}>
          <Route path='delete-account' element={<DeleteAccount />} />
          <Route path='' element={<EditProfile />} />
        </Route>
        
        <Route path='/' element={<HomePage />}>
          <Route path='feature' element={<FeaturedArticles />} />
          <Route path='recent' element={<RecentArticles />} />
          <Route path='' element={<Personalized />} />
        </Route>
        <Route path="" element={<LeftRightSides />}>
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='drafts' element={<Drafts />} />
        </Route>
        <Route path='explore' element={<Explore />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="/create-story" element={<CreateNewArticle/>} />
        <Route path="/onboard" element={<LoginSignup/>} />
        <Route path="article" element={<Article/>} />
      </Routes>
    </div>
  );
}

export default App;
