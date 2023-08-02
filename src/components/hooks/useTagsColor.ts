export const useTagsColor = (tag: string) => {
  switch (tag) {
    case "react.js":
      return "text-[#00D9FE] hover:bg-[#00D9FE]/10 dark:hover:bg-[#00D9FE]/10 border-primary dark:border-darkMode-contentBG hover:border-[#00D9FE] dark:hover:border-[#00D9FE]";

    case "angular.js":
      return "text-[#E03537] hover:bg-[#E03537]/10 dark:hover:bg-[#E03537]/10 border-primary dark:border-darkMode-contentBG hover:border-[#E03537] dark:hover:border-[#E03537]";

    case "vue.js":
      return "text-[#47BA87] hover:bg-[#47BA87]/10 dark:hover:bg-[#47BA87]/10 border-primary dark:border-darkMode-contentBG hover:border-[#47BA87] dark:hover:border-[#47BA87]";

    case "express.js":
      return "text-[#868686] hover:bg-[#868686]/10 dark:hover:bg-[#868686]/10 border-primary dark:border-darkMode-contentBG hover:border-[#868686] dark:hover:border-[#868686]";

    case "node.js":
      return "text-[#87CF30] hover:bg-[#87CF30]/10 dark:hover:bg-[#87CF30]/10 border-primary dark:border-darkMode-contentBG hover:border-[#87CF30] dark:hover:border-[#87CF30]";

    case "mongoos":
      return "text-[#8C0808] hover:bg-[#8C0808]/10 dark:hover:bg-[#8C0808]/10 border-primary dark:border-darkMode-contentBG hover:border-[#8C0808] dark:hover:border-[#8C0808]";

    default:
      return "text-[#000]";
  }
};
