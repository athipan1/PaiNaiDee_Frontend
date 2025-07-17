import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to PaiNaiDee",
          "search_placeholder": "Search for attractions...",
          "search_button": "Search",
          "loading": "Loading attractions...",
          "about_us": "About Us",
          "terms": "Terms"
        }
      },
      th: {
        translation: {
          "welcome": "ยินดีต้อนรับสู่ ไปไหนดี",
          "search_placeholder": "ค้นหาสถานที่ท่องเที่ยว...",
          "search_button": "ค้นหา",
          "loading": "กำลังโหลดข้อมูลสถานที่ท่องเที่ยว...",
          "about_us": "เกี่ยวกับเรา",
          "terms": "เงื่อนไขการใช้งาน"
        }
      }
    },
    lng: "th",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
