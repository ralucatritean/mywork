import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client';
import {  createBrowserRouter,RouterProvider} from "react-router-dom";
import React from 'react'
import MyCvPage from './pages/MyCv.tsx';
import Movie from './pages/Movie.tsx';
import Home from './components/Movie/Home.tsx';
import Favorite from './components/Movie/Favorite.tsx';

const router = createBrowserRouter([
  {
    path: "/",  // Schimbăm din "/mywork/" în "/"
    element: <App />,
    children: [
      {
        path: "myCvPage", // Eliminăm slash-ul din față
        element: <MyCvPage />,
      },
      {
        path: "movie",    // Eliminăm slash-ul din față
        element: <Movie />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "favorites",
            element: <Favorite />,
          }
        ]
      },
    ],
  },
], {
  basename: "/mywork" // Adăugăm această configurare pentru a specifica calea de bază
});

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
