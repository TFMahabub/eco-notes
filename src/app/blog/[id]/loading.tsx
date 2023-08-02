import { BoxLoadingSpinner } from "@/app/Utils/LoadingSpinners/BoxLoadingSpinner";

const loading = () => {
  return (
    <section className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      <BoxLoadingSpinner className="text-7xl fill-textHover-light dark:fill-primary" />
    </section>
  );
};

export default loading;
