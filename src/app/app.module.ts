import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TreeSelectModule } from 'primeng/treeselect';

//* routing
import { AppRoutingModule } from './app-routing.module';

//* animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//* shared file
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

//* pages files
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { BlogComponent } from './pages/blog/blog.component';

//*components files
import { ButtonComponent } from './components/button/button.component';
import { TimeComponent } from './components/time/time.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfoliosComponent,
    JourneyComponent,
    BlogComponent,
    ButtonComponent,
    TimeComponent,
    CardItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, TreeSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
