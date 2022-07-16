import LoginPage from "../layouts/Login"
import CustomerManagement from "../pages/TellerOperation/CustomerManagement"
import SignatureManagement from "../pages/TellerOperation/SignatureManagement"
import Home from "../pages/Home"
// Public Routes
const publicRoutes = [
    { path: '/login', component: LoginPage},
]

// Private Routes
const privateRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: LoginPage},

    { path: '/customer_management', component: CustomerManagement},
    { path: '/signature_management', component: SignatureManagement}

]

export { publicRoutes, privateRoutes }