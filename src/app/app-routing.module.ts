import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
    {path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicPageModule)},
    {path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentPageModule)},
    {path: 'ionic', loadChildren: () => import('./ionic/ionic.module').then(m => m.IonicPageModule)},
    {path: 'standalone', loadChildren: () => import('./standalone/standalone.module').then(m => m.StandalonePageModule)},
    {path: 'common', loadChildren: () => import('./common/common.module').then(m => m.CommonPageModule)},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
