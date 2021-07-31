import Head from "next/head";
import Banner from "../components/Banner";
import NavBarHome from "../components/NavBarHome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Romain Marcazzan | Développeur Freelance</title>
        <meta
          name="description"
          content="Développeur fullstack Web et applications mobiles Freelance React, React Native, Next JS, NodeJS"
        />
        <link rel="icon" href="/rm.ico" />
      </Head>

      <main className="homePage">
        <Banner />
        <NavBarHome />
      </main>
    </div>
  );
}
