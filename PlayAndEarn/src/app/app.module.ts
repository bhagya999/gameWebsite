import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { GamesComponent } from './components/games/games.component';
import { HourlyLeaderboardComponent } from './components/hourly-leaderboard/hourly-leaderboard.component';
import { LuckyCardComponent } from './components/lucky-card/lucky-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReferralComponent } from './components/referral/referral.component';
import { ReferralConditionComponent } from './components/referral-condition/referral-condition.component';
import { ReferralDisplayComponent } from './components/referral-display/referral-display.component';
import { SessionEarningComponent } from './components/session-earning/session-earning.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TotalComponent } from './components/total/total.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { WithdrawalHistoryComponent } from './components/withdrawal-history/withdrawal-history.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';
import { CoinRateComponent } from './components/coin-rate/coin-rate.component';
import { AccountTransactionComponent } from './components/account-transaction/account-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepositComponent,
    GamesComponent,
    HourlyLeaderboardComponent,
    LuckyCardComponent,
    NavbarComponent,
    NotificationsComponent,
    ProfileComponent,
    ReferralComponent,
    ReferralConditionComponent,
    ReferralDisplayComponent,
    SessionEarningComponent,
    SettingsComponent,
    TotalComponent,
    TransactionHistoryComponent,
    WithdrawalComponent,
    WithdrawalHistoryComponent,
    SnakeGameComponent,
    CoinRateComponent,
    AccountTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
