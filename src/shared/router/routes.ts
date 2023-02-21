import { RootRoute, Route } from '@tanstack/react-router';
import Index from '~/components';
import { z } from 'zod';
import App from '~/App';
import Details from '~/components/Details';
import Form from '~/components/Form';

// Create a root route
const rootRoute = new RootRoute({
  component: App,
});

const productSearchSchema = z.object({
  id: z.number().catch(1),
});

const ROUTES = [
  new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/form',
    component: Form,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/details/$id',
    component: Details,
  }),
];

export const myTree = () => {
  return rootRoute.addChildren(ROUTES);
};
