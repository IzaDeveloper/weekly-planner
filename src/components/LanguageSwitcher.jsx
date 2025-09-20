import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("pt")}
        className={`py-2 px-4 text-sm font-medium focus:outline-none rounded-lg cursor-pointer ${
          i18n.language === "pt" ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-black dark:text-white"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`py-2 px-4 text-sm font-medium focus:outline-none rounded-lg cursor-pointer ${
          i18n.language === "en" ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-black dark:text-white" 
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;