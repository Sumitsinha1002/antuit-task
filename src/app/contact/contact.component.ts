import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Output() public readonly backToHome: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public back(): void {
    this.backToHome.emit();
  }
}
