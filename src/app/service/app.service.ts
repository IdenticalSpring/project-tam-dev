import {Inject, Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { $themeConfig } from '../theme.config';
import { TranslateService } from '@ngx-translate/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
    providedIn: 'root',
  })
export class AppService {
  storeData: any;
  localStorage = window.localStorage;
  constructor(@Inject(DOCUMENT) private document: Document, public translate: TranslateService, public store: Store<any>) {
    this.initStoreData();
  }

  initStoreData() {
    this.store
      .select((d: any) => d.index)
      .subscribe((d: any) => {
        this.storeData = d;
      });

    // set default styles
    let val: any = this.localStorage.getItem('theme'); // light, dark, system
    val = val || $themeConfig.theme;
    this.store.dispatch({ type: 'toggleTheme', payload: val });

    val = this.localStorage.getItem('menu'); // vertical, collapsible-vertical, horizontal
    val = val || $themeConfig.menu;
    this.store.dispatch({ type: 'toggleMenu', payload: val });

    val = this.localStorage.getItem('layout'); // full, boxed-layout
    val = val || $themeConfig.layout;
    this.store.dispatch({ type: 'toggleLayout', payload: val });

    val = this.localStorage.getItem('i18n_locale'); // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
    val = val || $themeConfig.locale;

    const list = this.storeData.languageList;
    const item = list.find((item: any) => item.code === val);
    if (item) {
      this.toggleLanguage(item);
    }

    val = this.localStorage.getItem('rtlClass'); // rtl, ltr
    val = val || $themeConfig.rtlClass;
    this.store.dispatch({ type: 'toggleRTL', payload: val });

    val = this.localStorage.getItem('animation'); // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
    val = val || $themeConfig.animation;
    this.store.dispatch({ type: 'toggleAnimation', payload: val });

    val = this.localStorage.getItem('navbar'); // navbar-sticky, navbar-floating, navbar-static
    val = val || $themeConfig.navbar;
    this.store.dispatch({ type: 'toggleNavbar', payload: val });

    val = this.localStorage.getItem('semidark');
    val = val === 'true' ? true : $themeConfig.semidark;
    this.store.dispatch({ type: 'toggleSemidark', payload: val });
  }

  toggleLanguage(item: any) {
    let lang: any = null;
    lang = 'en';
    if (item) {
      lang = item;
    } else {
      let code = this.translate.currentLang || null;
      if (!code) {
        code = this.localStorage.getItem('i18n_locale');
      }

      item = this.storeData.languageList.find((d: any) => d.code === code);
      if (item) {
        lang = item;
      }
    }

    if (!lang) {
      lang = this.storeData.languageList.find((d: any) => d.code === 'en');
    }

    this.translate.use(lang.code); // set language
    this.store.dispatch({ type: 'toggleLocale', payload: lang.code });
    return lang;
  }

  changeAnimation(type = 'add') {
    if (this.storeData.animation) {
      const ele: any = document.querySelector('.animation');
      if (type === 'add') {
        ele?.classList.add('animate__animated');
        ele?.classList.add(this.storeData.animation);
      } else {
        ele?.classList.remove('animate__animated');
        ele?.classList.remove(this.storeData.animation);
      }
    }
  }
}
