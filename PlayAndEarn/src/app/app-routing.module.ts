import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { GamesComponent } from './components/games/games.component';
import { LuckyCardComponent } from './components/lucky-card/lucky-card.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReferralComponent } from './components/referral/referral.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'Dashboard',pathMatch: 'full'
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Deposit',
    component:DepositComponent
  },
  {
    path: 'snakeGame',
    component:SnakeGameComponent
  },
  {
    path: 'Withdrawal',
    component:WithdrawalComponent
  },
  {
    path: 'Games',
    component:GamesComponent
  },
  
  {
    path: 'LuckyCard',
    component:LuckyCardComponent
  },
  {
    path: 'TransactionHistory',
    component:TransactionHistoryComponent
  },
  {
    path: 'Settings',
    component:SettingsComponent
  },
  {
    path: 'Profile',
    component:ProfileComponent
  },
  {
    path: 'Referral',
    component:ReferralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
