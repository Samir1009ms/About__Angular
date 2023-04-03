import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  items = [
    {
      src: 'https://s3-alpha-sig.figma.com/img/00b4/9a32/3cfdd9a8cd198ea817351039bac0c3f2?Expires=1681084800&Signature=ZhBGnO9GTB0Foww4eVAvsDTgco9esjxDZ9WYjAGol87l0DldfEW2lj42brM62RXyDieStXufRY6XK8~OgchgqQgEfs05I2lPte8-Qd9t4sXte-RIve0Uu-RwUyDJHycBnQMhJ5Ph93oy6eiEytwktQbdIB1E7~lGlElDLzK71Nvts0XHUdqcok5WWVCsVleDGVN6yRp0TF78oDYYHikI49HMVYsZjbwob6urjYoWhr6q2F0G7GrskSIvX2uYt2x2t7P3aNGGrSjZrBeyyfBUXp6hgwv3pU6lrkFbQBrVn46WTFhFj9gpVhYrxgCI~kRU8275Fv~1pByig-KvEms7Ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/9d1d/813e/2455989085b706d84d051ace7522b4b0?Expires=1681084800&Signature=Y~pnoBmLy~9TPnrU0Ix5SFeWcOU65u5-QJNcg2y~3GQmFH4JKe0yOhSVhshsr8ddCZPewk67aWKz5RGmTNFK-fCS2d5RA6a2uQyi3wF~uD5P~Ryfn~L86idoxxbYMyOzWp3zvhcvED~C-b6s0e5LdsSZz5BpacE0SnZ-RaVlSXbeF9CRbI7qsGUqLn6OIJ9nMy0S0Vl0gQTsPClNxeaZ2kI0S6ysw6BeJIJL9Cxp1l-pn7sJv2sB4iE-iT3XCb3R~-pwAQoed1nE0RRfPUYYQ~iqcGvQbS8qgKPdgx8-CReQAqHs8Cd2X1~8VTumslfAUlOqi76Nx8VBZDTbD~2zFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/2d94/430f/52cbfbaacbb8588f100ff78b03a534a8?Expires=1681084800&Signature=qlCfuRW0eKd3BPJFyTSfhIvp9ssyldzu3sNupateAyhlipfIgSb9GP9F8w-gYtt67H6QBLMnwQ-4ThJkPMtqCx7JCYi5rlRTibgEMPbq3kOiLFO3PubQ4sUfdv8bn7xzlmROQv2zXdZ-MAu5MPHGWidry99NKRegMMWh5YD0zHAbR6eAyfd2QfongHQbGewmtflwqr4n8Aoqj10dWxIyBwvr9pngFIghJp~vQaN3OLVYcE92rRGUlfTWqsm-zciqnG0FBETB-dW2-lKnvUHuTgOFKZZbmfLcZS72A9RGW2bmUWQZ8wAztlCa-qJ4iokAESx~Cn5RdwRmcYsOb-EzAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/b412/062c/0a986a2e9a038702aa94ed4cd125f9c9?Expires=1681084800&Signature=low5O6O9Og~wGc9WGUBiOF3fjxnXTxga~neCCh~2q5M8fwhlnjniCMEaALuq~y4ufIa4Wi26~EjUiuwjES-Bvb8t4M0gOLUzdFpf0URwnYIFGJtx19Ely5PgdRRe12m9Wr-cnsUsJTsMRRwS2dPDs-Hfk~My3mrKY9LHo6Ee--acbOGRUmUAn8YuxHOY9-FiBX9VH6sU9B66jCOrEuOx3u1oUhh8c8iL7x6W7pAquCZIUdcNJBm2XjhB5qjaA8UJJLL3krJhi4FiNNbLfoLfIT~hoZefvlPzS4H33HE~~mP1iX17vFYsg0KDv2EuR9e-iq1WXZzPdD~KYpZoxpmc0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/a64d/8141/26ba5646eb0ae01a23370742f9850a90?Expires=1681084800&Signature=JnVYpuj-aaYC7oj3KD7hLxhtS-IR8GjDSo5LdGPP6h0-oIPvmVJrYF-oduuHhHyIm9rLqZD0tR3obLKj6gczLXXD~Oi-0JVpDbVSmFdXNhGVMY9cObFIGCjhjrRAiVsXd~TiQV8UcANZWSLqZ81PGaq7fBQwnIZMpwIOpxx-YjE0EU5i4q8U0M-n3stXpsdfIi1RAjt-IUYyX66JACSP2mlstA~~j4sVEI0hftyY-MjIvXtSUlBpuAYrFbzycT2nersdGV553WOyxFnhujhCjwGYPO-c46tNIqfzkEVdFn9eX-fEGTtSTJnP4-3LZEDlpO52eyr50UMKidE03j4oAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
  ];
}
