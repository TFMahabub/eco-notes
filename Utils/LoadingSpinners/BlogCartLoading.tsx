const BlogCartLoading = () => {
  return (
    <div className="box_area">
      <div className="animate-pulse flex flex-col md:flex-row md:items-start gap-3">
        <div className="relative h-9 w-9 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
        {/* --------content-------- */}
        <div className="space-y-common-.75 w-full">
          <div className="space-y-1">
            <div className="h-3 w-1/4 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
            <div className="h-2 w-1/12 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
            <div className="h-4 w-full bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="h-3 w-1/2 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-common">
            {/* ---------add-comments--------- */}
            <div className="h-4 w-1/4 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
            <div className="h-4 w-1/4 bg-border-light dark:bg-darkMode-bodyBG rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCartLoading;
