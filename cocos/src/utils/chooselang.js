import {lang} from '../lang/lang'


export function getLang() {
    let langStore = localStorage.getItem('lang_type');
    switch (langStore) {
        case 'en':
            return lang.en;
        case 'ch':
            return lang.zh;
        default:
            return lang.zh;
    }
}