import {loadTranslations, setLocale, syncTranslationWithStore} from "react-redux-i18n";
import i18nProvider from "../i18n";
const initializeI18n = (store: any) => {
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(i18nProvider));
  store.dispatch(setLocale("vi"));
}
export default initializeI18n;
export {initializeI18n};

