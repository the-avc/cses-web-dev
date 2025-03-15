import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Gallery from '@features/gallery/Gallery'
import initiatives from '../data/initiatives.json'
import ErrorPage from '@/pages/error-page/ErrorPage'
import Home from '@features/home/Home'
import Landing from '@/components/landing/landing'
import Society from '../features/initiative'
// import Login from '@features/auth/Login'
import Dashboard from '../features/users/dashboard/Dashboard'
import ChangePassword from '../features/users/change-password/ChangePassword'
import Users from '@features/users/Users'
import AuthLayout from '@/features/auth/AuthLayout'
// import Register from '@/features/auth/Register'
import Payment from '@/features/users/Payment/Payment'
import SetPassword from '@/features/auth/SetPassword'
import BulkRegister from '@/features/users/bulk-register/BulkRegister'
import ResetUser from '@/features/users/reset-user/ResetUser'
import AllUsers from '@/features/users/all-users/AllUsers'
import Login from '@/features/login&register/Login'
import Register from '@/features/login&register/Register'
const Routes = () => {
  const routesForPublic = [
    {
      path: '',
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Landing />,
          children: [
            { path: '', element: <Home /> },
            { path: 'gallery', element: <Gallery /> },
            ...initiatives.map((data) => ({
              path: data.link,
              element: <Society data={data} />,
            })),
          ],
        },
        {
          path: '',
          element: <AuthLayout />,
          children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'set-password', element: <SetPassword /> },
          ],
        },
      ],
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: 'users',
      element: <Users />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'change_pass', element: <ChangePassword /> },
        { path: 'payment', element: <Payment /> },
        { path: 'bulk_register', element: <BulkRegister /> },
        { path: 'reset', element: <ResetUser /> },
        { path: 'all_users', element: <AllUsers /> },
      ],
    },

  ];

  const router = createBrowserRouter([...routesForPublic, ...routesForAuthenticatedOnly]);

  return <RouterProvider router={router} />;
};

export default Routes
