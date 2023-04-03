import { Type } from './../../models/model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() items: Type[] = [];
  @Input() class: string = '';
  @Input() styl: string = '';
  @Input() grid: string = '';
}
