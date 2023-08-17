import Contacts from './components/contacts';
import Techs from './components/techs';
import Intoduction from './components/intro';
import Projects from './components/projects';
import Deco from './components/deco';

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden overflow-y-scroll bg-gradient-to-br from-black via-slate-800 to bg-gray-800 justify-center sm:p-24">
            <Contacts />
            <Intoduction />
            <Techs />
            <Projects />
            <Deco />
        </main>
    )
}
