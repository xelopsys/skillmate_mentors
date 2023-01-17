import React from "react";

interface CardProperties {
	img: string;
	title: string;
	btnText: string;
	onClick: () => void;
	extraCss?: string;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function Card({ img, title, btnText, onClick, extraCss }: CardProperties) {
	return (
		<div className={
			classNames(
				extraCss || "",
				"w-[305px] min-h-[444px] h-max"
			)
		}>
			<article className="group flex flex-col justify-center items-center gap-y-2 w-full h-full">
				<img
					alt="Lava"
					src={img}
					className=" h-[336px] w-full rounded-2xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
				/>

				<h3 className="text-[28px] font-bold text-gray-900">{title}</h3>

				<button
					onClick={() => onClick()}
					className="w-44 py-2 px-6 flex flex-row justify-center items-center rounded-3xl bg-gradient-to-r from-[#5158F4] to-[#5599ffd8] text-white"
				>
					<span>{btnText}</span>
				</button>
			</article>
		</div>
	);
}

export default Card;
