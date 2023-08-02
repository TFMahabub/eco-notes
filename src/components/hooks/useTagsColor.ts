export const useTagsColor = (tag: string) => {
  switch (tag) {
    case "react.js":
      return "text-tag-react hover:bg-tag-react/10 dark:hover:bg-tag-react/10 border-primary dark:border-darkMode-contentBG hover:border-tag-react dark:hover:border-tag-react";

    case "angular.js":
      return "text-tag-angular hover:bg-tag-angular/10 dark:hover:bg-tag-angular/10 border-primary dark:border-darkMode-contentBG hover:border-tag-angular dark:hover:border-tag-angular";

    case "vue.js":
      return "text-tag-vue hover:bg-tag-vue/10 dark:hover:bg-tag-vue/10 border-primary dark:border-darkMode-contentBG hover:border-tag-vue dark:hover:border-tag-vue";

    case "express.js":
      return "text-tag-express hover:bg-tag-express/10 dark:hover:bg-tag-express/10 border-primary dark:border-darkMode-contentBG hover:border-tag-express dark:hover:border-tag-express";

    case "node.js":
      return "text-tag-node hover:bg-tag-node/10 dark:hover:bg-tag-node/10 border-primary dark:border-darkMode-contentBG hover:border-tag-node dark:hover:border-tag-node";

    case "mongoos":
      return "text-tag-mongoos hover:bg-tag-mongoos/10 dark:hover:bg-tag-mongoos/10 border-primary dark:border-darkMode-contentBG hover:border-tag-mongoos dark:hover:border-tag-mongoos";

    default:
      return "text-[#000]";
  }
};
