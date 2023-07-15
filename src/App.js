import React, { useEffect } from 'react'
import './App.css';
import './Responsive.css';
import { Routes, Route } from "react-router-dom"
import FetchData from './Util/Data/FetchData';
import { getAuthor } from './Redux/Author/AuthorActions';
import { useDispatch } from 'react-redux';
import { GetToken } from './Util/Token/GetToken';

//Pages
import SignUpPage from './pages/SignUp/SignUpPage';
import SignInPage from './pages/SignIn/SignInPage';
import FeedPage from './pages/Feed/FeedPage';
import PostDetailBase from './pages/PostDetail/PostDetailBase';
import ProfileBase from './pages/Profile/ProfileBase'
import UserProfileBase from './pages/Profile/UserProfileBase';
import PostEditBase from './pages/PostEdit/PostEditBase';

function App() {
  /**Get the user */
  const dispatch = useDispatch();
  useEffect(() => {
    if (GetToken().accessToken !== "decryptedAccessToken") {
      FetchData("/api/users/author/").then((data) => {
        dispatch(getAuthor(data))
      })
    }
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/post/:id" element={<PostDetailBase />} />
        <Route path="/post/edit/:id" element={<PostEditBase />} />
        <Route path="/profile/:id" element={<ProfileBase />} />
        <Route path="/profile" element={<UserProfileBase />} />
      </Routes>
    </div>
  );
}

export default App;
