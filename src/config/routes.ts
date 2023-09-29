import pokemonHome from '../pages/Home';
import pokemonDashboard from '../pages/Dashboard';
import About from '../pages/About';
import pokemonSearch from '../pages/LookUp';

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: pokemonHome,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: pokemonDashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About Page",
      protected: false,
    },
    {
      path: "/pokemonsearch",
      component: pokemonSearch,
      name: "Search for Pokemon",
      protected: true
    }
  ]

export default routes