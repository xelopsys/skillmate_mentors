import Head from "next/head";
// import { Inter } from "@next/font/google";
import HomeScreen from "@/app/home/home-screen";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Mentors</title>
				<meta name="description" content="Skillmate mentors" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

			</Head>
			<HomeScreen />
		</div>
	)
}
