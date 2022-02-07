import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import MainPage from './pages/Main/MainPage';
import Products from './pages/Products';
import Profile from './pages/User/Profile';
// eslint-disable-next-line import/no-named-as-default
import Project from './pages/Project/ProjectMain';
import ProjectDetail from './pages/Project/ProjectDetail';
import ProjectCreate from './pages/Project/ProjectCreate';
import ProjectUpdate from './pages/Project/ProjectUpdate';
import ProjectDelete from './pages/Project/ProjectDelete';
import Blog from './pages/Blog';
import User from './pages/User';
import MentorPage from './pages/Mentor/MentorPage';
import MentorDetail from './pages/Mentor/MentorDetail';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/mentor',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/mentor" replace /> },
        { path: '', element: <MentorPage /> },
        { path: ':id', element: <MentorDetail /> }
      ]
    },
    {
      path: '/MainPage',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/MainPage/app" replace /> },
        { path: 'app', element: <MainPage /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'profile', element: <Profile /> }
      ]
    },
    {
      path: '/project',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Project /> },
        { path: ':id', element: <ProjectDetail /> },
        { path: 'create', element: <ProjectCreate /> },
        { path: ':id/update', element: <ProjectUpdate /> },
        { path: ':id/delete', element: <ProjectDelete /> },
        { path: 'mentor', element: <Navigate to="/mentor" /> }
        // { path: 'mentor/:id', element: <MentorDetail /> },
        // { path: 'mentor', element: <MentorPage /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '/', element: <Navigate to="/MainPage/app" /> }
      ]
    }
  ]);
}