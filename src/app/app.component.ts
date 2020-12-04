import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages: MenuItem[] = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Pokemon List',
      url: 'pokemon-list',
      // icon: 'mail'
    },
    {
      title: 'Berris List',
      url: 'berries-list',
      icon: ''
    },
    {
      title: 'Items List',
      url: 'items-list',
      icon: ''
    },
    {
      title: 'Moves List',
      url: 'moves-list',
      icon: ''
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

export class MenuItem {
  title: string;
  url: string;
  icon?: string;
}