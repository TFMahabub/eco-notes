export const useTagsColor = (tag: string) => {
  switch (tag) {
    case "react.js":
      return "text-[#00D9FE] bg-primary hover:bg-[#00D9FE]/10 border-primary hover:border-[#00D9FE]";
    case "angular.js":
      return "text-[#E03537] bg-primary hover:bg-[#E03537]/10 border-primary hover:border-[#E03537]";
    case "vue.js":
      return "text-[#47BA87] bg-primary hover:bg-[#47BA87]/10 border-primary hover:border-[#47BA87]";
    case "express.js":
      return "text-[#868686] bg-primary hover:bg-[#868686]/10 border-primary hover:border-[#868686]";
    case "node.js":
      return "text-[#87CF30] bg-primary hover:bg-[#87CF30]/10 border-primary hover:border-[#87CF30]";
    case "mongoos":
      return "text-[#8C0808] bg-primary hover:bg-[#8C0808]/10 border-primary hover:border-[#8C0808]";
    default:
      return "text-[#000]";
  }
};
