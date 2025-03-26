import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import MyCvPage from './pages/MyCv.tsx';
import Movie from './pages/Movie.tsx';
import Home from './components/Movie/Home.tsx';
import Favorite from './components/Movie/Favorite.tsx';
import TicTacToe from './pages/TicTacToe.tsx';
import MemoryGame from './pages/MemoryGame.tsx';
import NotFound from './css/NotFound.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Shop from './pages/Shop.tsx';
import ProductDetails from './components/Shop/ProductDetails.tsx';
import CartClient from './components/Shop/CartClient.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <AboutMe />,
      },
      {
        path: "myCvPage",
        element: <MyCvPage />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "memorygame",
        element: <MemoryGame />,
      },
      {
        
        path: "movie",
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
      {
         path: "shop",
        element: <Shop />,
        children: [
          {
            path: "cart",
            element: <CartClient />,
          },
          {
            path: ":id",
            element: <ProductDetails/>,
          }
        ]
      }
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
