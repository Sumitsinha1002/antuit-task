import { Component, OnInit } from '@angular/core';
import { toolbarIcons } from './../../assets/toolbar-icons';
import { sampleItems } from './../../assets/sample-items';
import { SampleItem } from '../types/sample-item.type';
import { ToolBarIcon } from '../types/toolbar-icons.type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public index = 0;
  public toolbarIcons: ToolBarIcon[] = toolbarIcons;
  public sampleItems: SampleItem[] = sampleItems;
  public visibleItem: SampleItem = sampleItems[this.index];



  constructor() { }

  ngOnInit(): void {

  }

  public setVisibleItem(i: number): void {
    this.index = this.index + i;
    this.visibleItem = this.sampleItems[this.index];
  }

}
