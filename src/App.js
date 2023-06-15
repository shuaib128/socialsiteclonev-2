import './App.css';
import './Responsive.css';
import { Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Redux/store';

//Pages
import SignUpPage from './pages/SignUp/SignUpPage';
import SignInPage from './pages/SignIn/SignInPage';
import FeedPage from './pages/Feed/FeedPage';
import PostDetailBase from './pages/PostDetail/PostDetailBase';
import ProfileBase from  './pages/Profile/ProfileBase'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/post/:postId" element={<PostDetailBase />} />
          <Route path="/profile/" element={<ProfileBase />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
