import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en";
import * as ko from "./ko";

const resources: Resource = {
    "en-US": {
        ...en
    },
    "ko-KR": {
        ...ko
    }
}as const;

i18n.use(initReactI18next).init({
    resources,
    lng: "ko-KR", // 초기 설정 언어
    fallbackLng: {
        "en-US" : ["en-US"],
        default: ["ko-KR"] // 영어로 변환 실패 시, default : 한국어
    },
    debug: true,
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});

export default i18n;