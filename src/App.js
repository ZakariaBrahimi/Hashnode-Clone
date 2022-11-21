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



function App() {
  
  return (
    <div className="App flex flex-col gap-5 h-screen bg-[#fafbff]">
      <Navbar />
      

      <Routes>
        <Route path='settings' element={<AccountSettings />}>
          <Route path='delete-account' element={<DeleteAccount />} />
          <Route path='edit-profile' element={<EditProfile />} />
        </Route>
        
        <Route path='explore' element={<Explore />} />
        <Route path='/' element={<HomePage />}>
          <Route path='feature' element={<FeaturedArticles />} />
          <Route path='recent' element={<RecentArticles />} />
          <Route path='' element={<Personalized />} />
        </Route>
        <Route path="" element={<LeftRightSides />}>
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='drafts' element={<Drafts />} />
        </Route>
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
