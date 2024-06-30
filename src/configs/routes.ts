// Layouts
import DefaultLayout from '../layouts/DefaultLayout.tsx';

// Views
import Home from '../views/Home.tsx';

export const routes = [
  {
    path: '/',
    layout: DefaultLayout,
    protected: true,
    component: Home
  },
];