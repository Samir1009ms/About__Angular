import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  data: any;

  items = [
    {
      src: 'https://s3-alpha-sig.figma.com/img/09e8/0e3e/dd6502d1725666c5962ca361c8bf8169?Expires=1681084800&Signature=ZPBfG6xlrgnRaKc5Z73-XY4EwhZOgHbACaDwyUrT98Iyl-Hc3L1hpQqcWh8nzkOxEswtN3U0~OZrskmNnnnZUmjuDRrIl3ITaq4jG3inSu8~hmSIebIjUrebkWmTDNAnn1rBBeUbLGEjm4MT7dm0s0-RVhiG9fraQyP7yzAuCp9MWF~jwoWw4ght2EqGp9if~yp3ZmGllgsmqDwKcyElWCJwVdI7DRtmJc5UGrL0GDpbhhP8ajgxOvsLx5FgH4D5aDkX8~fxCWtiti-t5NL6IneLqBxN38ABv3IGo6oR6D0pYWMNw4oCq1NhepuidUPs~pUxMOxt5z-62OuqhnZY4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/3fd7/2a5d/742460a781e3449bd3d7e927290004f7?Expires=1681084800&Signature=k0lDI643QYenErQUvPAQdXVt3NdNAiEcL6Xu9H0VJKhUDcK5QtwmAoLfxfsZSoA9cSzA7vzuvmirjRM8dA4ZhYpi5F2qanwdxrkTfrMiPJUfUgOjItuNVUFWtZyDPNHC0YZjGNCd8ukg0y4bWTyYbywU0EuFep-MIpsQC87dNT1qUAtSn3O9cafecotfxad6xq-njBQIeAYnEbRnfcAiSRYiuwTpDPw-v96olD7JrsQFHJuxMYVxasP1zCbRPzLmrWd4bes5SJOVb2txvdrNVrkRvCSyzQJCTcpRmGqZDPH-kPyQGGV6k8Ky4dOXAiPLkCps6xITqhjfl8Ps8nSfoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/5c66/ce68/e313e9aa707f00bd2ba97c453550dd38?Expires=1681084800&Signature=binF~rc9UiH6EjurQYztdwPtRg5gtCD1gkYyKu2e2jF2choGnBLv3QNnYYEG8Rs~1Qx6an8PH93bh~nNR9xZypObl1vxpNnaBWM5Y~hKakzNje4eIituZetMFfYwk6Dqr0UGtyZpsGu9Mi-5vXZeFaon~gn86-YKoxlz8b-5-8wFeY0cvRHW1U5Y40Nh1DBQ-rPW-cH79Fwt3wZnuWE9Oc0W5tpMkVIMsk2clE6vGzjjAR7zviovXp75-wKCrA2BRWvEj3ytY9wy98sDBAljZV7diskG~263JhjamLUiU5zRR4ui4jzTZ5TVkHneggnAZUKDw~cXEutg043D2TymAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/b19d/0f0c/60b308d153c1556dfcb24f8a632c55c4?Expires=1681084800&Signature=UzcGed6sc09DxIbOyDIb-B4gYzfV6WIEmDIgc2cKMYH3Qi0bGGEy8UcyzTRFvf15yQFoiW-Y66S0CY7ji5a1j2zEccMZvxSPHhzQLs96zFe3Tf-FygVWIlSKAkZfcfEn16Wfo1PnCJyEabMdWQDiafC5SnnI98~v-b-XnjxGm9F7DHJ9ov~zJZeyhRq5HKjA4nrA5~7lEV7wmgIW-vzmy9h3nCPeH9qmVlLmMRCcLiAHdQPMSQJ31zNzC5jrpJ42dPwZ0gQLOHjovIHZUpl7p-sGnNt5hU0yGrJ16NuVv6P5JZGJ2H~SvzGB8YqKgiVPHliKZpDesCkuLztnCYLUAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/8348/a6d2/ff3f4ecbf1d6a3b9c7dedfcd0262c4d7?Expires=1681084800&Signature=n1tSHtKfzSalvPLB3oRNDnQJw4DcwWDbUT0JGMgoQiDKQNsxmlnm6VrQHySBqEjUf4ZA2lPiCDTwtUnXAyhilNcKVu8aIU0S1xUbl~24IIMJxEo2ffdN7Oe36LkmwAqs8BQQn0~2dfYNTN2k-Hovx0gv8L4rQN4xIezwldcjHW19rFJgBXVwqPG6ogpBl0RyJnkXJZIEWV1F1Hm4NfEx8HyqlvbiKEZKdmkYbj7NDOo5I5MQIjQBSpjYKynAGIWV77BbwpV2wz3X7z8fxTU0HQXNmf8s1m~CoAjgHlufC0-r36CgvKj-~BhhoigOigrIbF7NhqARVW45c3632Kjw7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
    {
      src: 'https://s3-alpha-sig.figma.com/img/10f9/42af/fdfb5ecf5403141a7530999eeb6fc544?Expires=1681084800&Signature=dm7T4P5yYiPp62bQAiI~5wK4AogmNqGP25Tfm7mzCkkbIh-7JjF4n6rPzWCZ0mdL5hPrL1LAjnH5tPW1Hft9uFnooMfV1abBjEphBNjvcdKw~kyvXQjKReuUSbHteiUQ2mtzfTKsmGscm9OxjCOdLRv9lyy-wcTn7gBAzbbwQN2jxujTRoPRAA33FttHB91~U7~Njmc-KHErx5mwLsZOMhnkiXxwgak5qj-T~fq6p2RIpHKLCHV0Pius7n8XlowuGTOLyIQf4cC4TPbpYJiMw1Uxh-pWRmlhrwqhL6UZhMKzp790Al0gZGKFxr4tgVNPRWm4airUXZM2hdO~UE26bQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'rentgale6',
      title: 'There is more than you know',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
      btn: 'Read more',
    },
  ];

  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.MovieService.getData().subscribe(res => {
      this.data = res;
    });
  }
}
