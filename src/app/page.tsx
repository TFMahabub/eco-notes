import JoinDevCommunity from "@/components/pages/home/leftSide/JoinDevCommunity";
import PopularTags from "@/components/pages/home/leftSide/PopularTags";
import WellcomeTextIndex from "@/components/pages/home/leftSide/WellcomeTextIndex";
import MainContent from "@/components/pages/home/middleSide/MainContent";
import TopMenus from "@/components/pages/home/middleSide/TopMenus";
import Discuss from "@/components/pages/home/rightSide/Discuss";
import Listings from "@/components/pages/home/rightSide/Listings";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="container mt-main-content-gap grid grid-cols-12 gap-4">
        {/* ----------------left-side---------------- */}
        <aside className="col-span-12 lg:col-span-3 space-y-common-.75 order-2 md:order-none">
          <div className="box_area space-y-vertical">
            <WellcomeTextIndex />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* <SocialMedia /> */}
          </div>
          <div className="box_area flex flex-col gap-common">
            <PopularTags />
          </div>
          <div className="box_area flex flex-col gap-common">
            <JoinDevCommunity />
          </div>
        </aside>
        {/* ----------------middle-side---------------- */}
        <main className="col-span-12 lg:col-span-6 space-y-section-gap order-1 md:order-none">
          <div className="flex gap-common-.75">
            <TopMenus />
          </div>
          <div className="flex flex-col gap-common-.75">
            <MainContent />
          </div>
        </main>
        {/* ----------------right-side---------------- */}
        <aside className="col-span-12 lg:col-span-3 space-y-common-.75 order-3 md:order-none">
          <div className="box_area space-y-vertical">
            <Listings />
          </div>
          <div className="box_area space-y-vertical">
            <Discuss />
          </div>
        </aside>
      </main>
    </div>
  );
}
