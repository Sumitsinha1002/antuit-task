import { Tab } from 'src/app/types/tab.type';

export const tabList: Tab[] = [
  {
    tabName: 'Home',
    icon: 'fa fa-home icon',
    component: 'home',
    active: true,
  },
  {
    tabName: 'Chart',
    icon: 'fa fa-line-chart icon',
    component: 'chart',
    active: false,
  },
  {
    tabName: 'Contact Me',
    icon: 'fa fa-address-book-o icon',
    component: 'contact',
    active: false
  }
];
