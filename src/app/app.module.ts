import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { BodyComponent } from './Components/body/body.component';
import { ProjectsComponent } from './Components/side-bar/projects/projects.component';
import { TaskboxComponent } from './Components/side-bar/taskbox/taskbox.component';
import { TicketboxComponent } from './Components/side-bar/ticketbox/ticketbox.component';
import { NotificationsComponent } from './Components/side-bar/notifications/notifications.component';
import { LogOutComponent } from './Components/side-bar/log-out/log-out.component';
import { SettingsComponent } from './Components/side-bar/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    BodyComponent,
    ProjectsComponent,
    TaskboxComponent,
    TicketboxComponent,
    NotificationsComponent,
    LogOutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
