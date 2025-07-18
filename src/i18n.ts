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
          "terms": "Terms",
          "attractionsTitle": "Popular Attractions",
          "reviewForm": {
            "title": "Leave a Review",
            "nameLabel": "Your Name",
            "ratingLabel": "Rating",
            "commentLabel": "Comment",
            "submitButton": "Submit Review",
            "submitting": "Submitting...",
            "submitSuccess": "Thank you for your review!",
            "submitError": "Failed to submit review.",
            "stars_one": "{{count}} star",
            "stars_other": "{{count}} stars"
          }
        }
      },
      th: {
        translation: {
          "welcome": "ยินดีต้อนรับสู่ ไปไหนดี",
          "search_placeholder": "ค้นหาสถานที่ท่องเที่ยว...",
          "search_button": "ค้นหา",
          "loading": "กำลังโหลดข้อมูลสถานที่ท่องเที่ยว...",
          "about_us": "เกี่ยวกับเรา",
          "terms": "เงื่อนไขการใช้งาน",
          "attractionsTitle": "สถานที่ท่องเที่ยวยอดนิยม",
          "reviewForm": {
            "title": "เขียนรีวิว",
            "nameLabel": "ชื่อของคุณ",
            "ratingLabel": "ให้คะแนน",
            "commentLabel": "ความคิดเห็น",
            "submitButton": "ส่งรีวิว",
            "submitting": "กำลังส่ง...",
            "submitSuccess": "ขอบคุณสำหรับรีวิว!",
            "submitError": "เกิดข้อผิดพลาดในการส่งรีวิว",
            "stars_one": "{{count}} ดาว",
            "stars_other": "{{count}} ดาว"
          }
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
