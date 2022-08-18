import { TranslateService } from '@ngx-translate/core';

export function appInitializerFactoryConfg(translateService: TranslateService) {
  return () => {
    translateService.addLangs(['pl']);
    translateService.setDefaultLang('pl');
    return translateService.use('pl');
  };
}
