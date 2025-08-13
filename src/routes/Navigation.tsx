import { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router';
import logo from '../assets/react.svg';
import { routes } from './routes';
export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? 'nav-active' : ''
                    }>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
