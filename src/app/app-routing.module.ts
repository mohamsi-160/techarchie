import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () =>
        import('./pages/about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'wizard',
      loadChildren: () =>
        import('./pages/wizard/wizard.module').then(m => m.WizardModule)
    },
    {
      path: 'results',
      loadChildren: () =>
        import('./pages/results/results.module').then(m => m.ResultsModule)
    },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home',
    //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    // }
    ]),
    // {
    //   path: 'auth',
    //   loadChildren: () =>
    //     import('./pages/auth/auth.module').then(m => m.AuthModule)
    // },
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
