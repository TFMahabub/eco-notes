import AsideMenus from "../../../components/pages/Search/AsideMenus";
import SearchMainContent from "../../../components/pages/Search/SearchMainContent";

const page = () => {
  return (
    <section className="container grid grid-cols-12 gap-4">
      <aside className="mt-main-content-gap col-span-12 lg:col-span-4 space-y-common-.75 order-2 md:order-none flex flex-col">
        <AsideMenus />
      </aside>
      <main className="col-span-12 lg:col-span-8 mt-main-content-gap">
        <SearchMainContent />
      </main>
    </section>
  );
};

export default page;
