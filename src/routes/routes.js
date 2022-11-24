// import config get path
import config from "~/config";

// import Layouts
import FooterOnly from "~/layouts/FooterOnly";
import SearchLayout from "~/layouts/SearchLayout";

//import Page
import Home from "~/pages/Home";
import FlashSale from "~/pages/FlashSale";
import Cart from "~/pages/Cart";
import Login from "~/pages/Login";
import Search from "~/pages/Search";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.sale, component: FlashSale },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.login, component: Login, layout: FooterOnly },
    { path: config.routes.search, component: Search, layout: SearchLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes } 