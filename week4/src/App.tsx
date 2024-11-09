import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import MyPage from "./pages/mypage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element : <Login/>
      },
      {
        path: "/signup",
        element: <ProtectedRoute element={<SignUp/>}/> 
      },
      {
        path: "/mypage",
        element: <ProtectedRoute element={<MyPage/>}/>
      }
    ],
    errorElement: <div>404!</div>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

