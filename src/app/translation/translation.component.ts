import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})

//to define which language is active in our app by default

export class TranslationComponent implements OnInit {
  public activeLang = 'en';
  constructor( private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  ngOnInit() {
  }

  //function that allows changing the language
  
  public changeLang(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
