/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import {LandingPage} from "@/scratch.tsx";
import {ProductsPage} from "@/ProductsPage.tsx";
import {ProductDetailsPage} from "@/productDetailsPage.tsx";


const elem = document.getElementById("root")!;


const app = (

    <>
        <RouterProvider router={createBrowserRouter([

            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: "/products",
                element: <ProductsPage />,
                children: [
                    {
                        path: ':productId',
                        element: <ProductDetailsPage />
                    }
                ]
            }

        ])} />
    </>
);



if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}

