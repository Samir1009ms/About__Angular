import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  items = [
    { sosial: 'Twitter', detail: 'amirhwsin' },
    { sosial: 'Github', detail: 'amireshoon' },
    { sosial: 'Dribble', detail: 'amireshoon' },
    { sosial: 'Telegram', detail: 'GeekDreamer' },
    { sosial: 'Email', detail: 'amirhwsin@outlook.com' },
  ];
  imgs = [
    {
      src: 'https://s3-alpha-sig.figma.com/img/feb1/4138/168afcca4345533683f89bb42220b2ef?Expires=1681084800&Signature=ZwMiXG023NxBGxuDMozjaXrZKgdDe3nBy9wHTGl3UA1lLXesc8QOGv5pJMBz5bhkIuiSHMv~5tNlO2CJkTu08aqQACgQ4i0BFNhltKyWZ-m7oEYjvrIJ5vBiEkcdz27AhJQO4QuVxRq7zT5JrP~w9y2A8AOzSgyuOZaUwZ2gUOqROaTGUGqfe7F596cM7qKoVJkL1ZiNyYkmM89-MxeSEoTtZ-1blBsq18xHlodeXDk~DmHBPZWlMgN1StoO-3fNRyWWEyFlZj0MdSE1Pdjmdy3Eesi~wg2WPrVoa2EFRf6yIY4xgEoCrgsec2W8PbWVeWhzGig4Tyzpnv2ysPrX6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'saly-14',
    },
  ];
}
