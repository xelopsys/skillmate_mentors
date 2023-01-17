import Head from "next/head";
import Card from "@components/card/card";
import HomeScreen from "@/app/home/home-screen";

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
