// Layouts
import DefaultLayout from '../layouts/DefaultLayout.tsx';

// Views
import Home from '../views/Home.tsx';
import Cart from '../views/Cart.tsx';

export const routes = [
  {
    path: '/',
    layout: DefaultLayout,
    protected: true,
    component: Home
  },
  {
    path: '/cart',
    layout: DefaultLayout,
    protected: true,
    component: Cart
  },
];