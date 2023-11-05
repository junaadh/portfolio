import Contacts from "@/components/contacts";
import Techs from "@/components/techs";
import Intoduction from "@/components/intro";
import Projects from "@/components/projects";
import Stats from "@/components/stats";
import Slider from "@/components/slider";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden overflow-y-scroll bg-gradient-to-br dark:from-black from-gray-700 dark:via-slate-800 via-slate-600 to dark:bg-gray-800 to-gray-600 justify-center sm:p-24">
      <Slider />
      <Contacts />
      <Intoduction />
      <Techs />
      <Projects />
      <Stats />
      <Footer />
    </main>
  );
}
