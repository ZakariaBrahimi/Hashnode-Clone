import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RecentArticles from "./components/RecentArticles";
import Bookmarks from "./pages/Bookmarks";
import Drafts from "./pages/Drafts";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import LeftRightSides from "./components/LeftRightSides";
import DeleteAccount from "./components/DeleteAccount";
import EditProfile from "./components/EditProfile";
import CreateNewArticle from "./pages/CreateNewArticle";
import EditArticle from "./pages/EditArticle";
import LoginSignup from "./pages/LoginSignup";
import Article from "./pages/Article";
import {AuthProvider} from './context/AuthContext'
import {APIProvider} from './context/APIContext'
import {DarkModeProvider} from './context/DarkModeContext'
import PrivateRoute from './utils/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordReset from "./pages/PasswordReset";
import PasswordChange from "./pages/PasswordChange";
import { socket } from './socket';

function App() {

  
  return (
    <APIProvider>
    <AuthProvider>
    <DarkModeProvider>
      <div className="App dark:bg-[#000000] flex flex-col gap-5 bg-[#fafbff] ">
        <Navbar/>
        <Routes>
            <Route path='settings' element={<PrivateRoute><AccountSettings /></PrivateRoute>}>
              <Route path='delete-account' element={<PrivateRoute><DeleteAccount /></PrivateRoute>} />
              <Route path='' element={<PrivateRoute><EditProfile /></PrivateRoute>} />
              <Route path='password-change' element={<PrivateRoute><PasswordChange /></PrivateRoute>} />
            </Route>
            <Route path='/' element={<HomePage />}>
              {/* <Route path='feature' element={<FeaturedArticles />} /> */}
              {/* <Route path='personalized' element={<Personalized />} /> */}
              <Route path='' element={<RecentArticles />} />
            </Route>
            <Route path="" element={<LeftRightSides />}>
              <Route path='bookmarks' element={<PrivateRoute><Bookmarks /></PrivateRoute>} />
              <Route path='drafts' element={
                <PrivateRoute>
                  <Drafts />
                </PrivateRoute>
              } />
            </Route>
            <Route path='explore' element={<Explore />} />
            <Route path="profile/:user_id" element={<Profile/>} />
            <Route path="password-reset" element={<PasswordReset/>} />
            <Route path="create-story" element={<PrivateRoute><CreateNewArticle/></PrivateRoute>} />
            <Route path="edit-story" element={<PrivateRoute><EditArticle/></PrivateRoute>} />
            <Route path="onboard" element={<LoginSignup />} />
            <Route path="article/:article_id" element={<Article/>} />
          </Routes>
          <ToastContainer position="top-left"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>      
      </div>
    </DarkModeProvider>
    </AuthProvider>
    </APIProvider>
  );
}
export default App;
