import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    );
}