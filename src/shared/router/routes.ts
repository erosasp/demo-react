import { RootRoute, Route } from "@tanstack/react-router";
import Index from "~/components";
import Details from "~/components/details";
import { z } from 'zod'
import App from "~/App";
import About from "~/components/about";

// Create a root route
const rootRoute = new RootRoute({
    component: App,
})

const productSearchSchema = z.object({
    id: z.number().catch(1)
})

const ROUTES = [
    new Route({
        getParentRoute: () => rootRoute,
        path: "/",
        component: Index
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: "/about",
        component: About
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: "/details",
        component: Details,
        validateSearch: (search) => productSearchSchema.parse(search)
    })
]

export const myTree = () => {
    return rootRoute.addChildren(ROUTES);
}