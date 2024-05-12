import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/structure/app.layout.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {ProductResolveService} from "./pages/admin/product-management/product-resolve.service";
import {BuyProductResolverService} from "./pages/buy-product/buy-now/buy-product-resolver.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) , },
                    { path: 'tajekoztato', loadChildren: () => import('./licenses/licenses.module').then(m => m.LicensesModule) , },
                    { path: 'buyNow', loadChildren: () => import('./pages/buy-product/buy-now/buy-now.module').then(m => m.BuyNowModule) , canActivate:[AuthGuard], data:{roles:['User']},
                    resolve: {
                        productDetails: BuyProductResolverService
                    }},
                    { path: 'cart', loadChildren: () => import('./pages/buy-product/cart/cart.module').then(m => m.CartModule) , canActivate:[AuthGuard], data:{roles:['User']}},
                    { path: 'admin-dashboard', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) , canActivate:[AuthGuard], data:{roles:['Admin']},
                    resolve: {
                        product: ProductResolveService
                    }},
                    { path: 'user-details', loadChildren: () => import('./pages/user-details/user-details.module').then(m => m.UserDetailsModule), canActivate:[AuthGuard], data:{roles:['User']} },
                    { path: 'mobiles', loadChildren: () => import('./pages/products/mobiles/mobiles.module').then(m => m.MobilesModule) },
                    { path: 'computers', loadChildren: () => import('./pages/products/computers/computers.module').then(m => m.ComputersModule) },
                    { path: 'peripherals', loadChildren: () => import('./pages/products/peripherals/peripherals.module').then(m => m.PeripheralsModule) },
                    { path: 'orderConfirm', loadChildren: () => import('./pages/buy-product/order-confirmation/order-confirmation.module').then(m => m.OrderConfirmationModule), canActivate:[AuthGuard], data:{roles:['User']} },
                    { path: 'productView', loadChildren: () => import('./pages/products/product-view-details/product-view-details.module').then(m => m.ProductViewDetailsModule), resolve: {product: ProductResolveService}}
                ]
            },
            { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
            { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule), },
            { path: 'forbidden', loadChildren: () => import('./pages/forbidden/forbidden.module').then(m => m.ForbiddenModule), },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
