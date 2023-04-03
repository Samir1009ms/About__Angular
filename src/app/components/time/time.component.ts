import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent {
  items = [
    {
      time: '2 January 2021',
      info: 'The resolution, What am i gonna do?',
      text: 'It’s all about the new year and works i have to do',
    },
    {
      time: '29 January 2021',
      info: 'Gow - command line tool to manage works',
      text: 'Gow is cli tool written in golang using cobra',
    },
    {
      time: '2 February 2021',
      info: 'Started designing what you are seeing right now!',
      text: 'Yes in 2th of february i started designing this site',
    },
    {
      time: '1 March 2021',
      info: 'Maybe it’s time to deploy...!',
      text: 'Maybe in this day i completed the front and backend of this',
    },
  ];
}
