import React from "react"
import Card from "@components/card/card"

function Home() {

    const handleGoToRoute = (user: string) => {
        const link = document.createElement("a")
        link.href = `https://calendly.com/${user}`
        link.target = "_blank"
        link.click()

    }

    return (

        <main className="w-screen h-screen flex flex-col justify-start items-center box-border pt-24">
            <div className="w-full h-max flex flex-col justify-center items-center gap-y-3 px-4">
                <h1 className=" text-4xl md:text-6xl lg:text-6xl font-bold text-center">
                    Meeting with mentors
                </h1>
                <p className="text-lg font-normal text-gray-700 text-center mb-4 md:m-0 lg:m-0">
                    Some kind of tagline here
                </p>
            </div>
            <div className="w-full h-max flex flex-row justify-center items-center gap-16 flex-wrap flex-1 mt-4">
                <Card
                    onClick={() => handleGoToRoute("xelopsys")}
                    title="Xelopsys"
                    extraCss="md:order-2"
                    img="https://images.unsplash.com/photo-1673868077539-9c3120f78420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    btnText="Click"
                />
                <Card
                    onClick={() => handleGoToRoute("uwu")}
                    title="UwU"
                    extraCss="lg:[&:nth-child(2)]:mb-24 order-1 md:order-2 lg:order-2"
                    img="https://images.unsplash.com/photo-1673868077539-9c3120f78420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    btnText="Click"
                />
                <Card
                    onClick={() => { }}
                    extraCss="md:order-3"
                    title="teacher"
                    img="https://images.unsplash.com/photo-1673868077539-9c3120f78420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    btnText="Click"
                />
            </div>
        </main>

    );
}

export default Home