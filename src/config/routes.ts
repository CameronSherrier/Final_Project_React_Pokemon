import pokemonHome from '../pages/Home';
import pokemonDashboard from '../pages/Dashboard';
import About from '../pages/About';
import Battle from '../pages/Battle';

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: pokemonHome,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: pokemonDashboard,
      name: "Dashboard",
    },
    {
      path: "/about",
      component: About,
      name: "About Page",
    },
    {
      path: "/battle",
      component: Battle,
      name: "Battle Page",
    }
  ]

export default routes