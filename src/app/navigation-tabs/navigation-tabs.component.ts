import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { tabList } from './../../assets/tabs';
import { userDetails, User } from './../../assets/user';
import { Tab } from '../types/tab.type';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTabsComponent implements OnInit {
  public tabs: Tab[];
  public isContentOpen = false;
  public userDetails: User = userDetails;
  public activeTab = 'home';

  constructor(private readonly cdr: ChangeDetectorRef) {}

  @ViewChild('Tabset')
  public tabSet;

  ngOnInit(): void {
    this.tabs = tabList;
  }

  public changeTab(tabName: string): void {
    this.activeTab = tabName;
  }

  public backToHome(): void {
    this.tabSet.tabs[0]._active = true;
    this.tabSet.tabs[2]._active = false;
    this.activeTab = 'home';
  }
}
