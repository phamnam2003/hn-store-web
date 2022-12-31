// import config get path
import config from "~/config";

// import Layouts
import FooterOnly from "~/layouts/FooterOnly";

//import Page
import Home from "~/pages/Home";
import FlashSale from "~/pages/FlashSale";
import Cart from "~/pages/Cart";
import Login from "~/pages/Login";
import Search from "~/pages/Search";
import DetailProduct from "~/pages/DetailProduct";
import Register from "~/pages/Register";
import ErrorPage from "~/pages/ErrorPage";

const publicRoutes = [
    // if component haven't layout then default is DefaultLayout
    { path: config.routes.home, component: Home },
    { path: config.routes.sale, component: FlashSale },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.login, component: Login, layout: FooterOnly },
    { path: config.routes.register, component: Register, layout: FooterOnly },
    { path: config.routes.search, component: Search},
    { path: config.routes.detailProduct, component: DetailProduct },
    { path: config.routes.errorPage, component: ErrorPage },
    { path: config.routes.errorPageLv2, component: ErrorPage }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes } 