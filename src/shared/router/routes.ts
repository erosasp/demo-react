import { RootRoute, Route } from "@tanstack/react-router";
import Index from "~/components";
import Details from "~/components/details";
import { z } from 'zod'
import App from "~/App";
import Form from "~/components/form";

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
        path: "/form",
        component: Form
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