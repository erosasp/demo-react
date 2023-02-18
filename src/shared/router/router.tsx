import { RouterProvider, ReactRouter } from '@tanstack/react-router';
import { myTree } from './routes';

const routeTree = myTree();
// Create the router using your route tree
const router = new ReactRouter({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router;