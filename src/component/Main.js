import React from "react";
import SubMain from "./SubMain";
import png1 from "../assets/icon1.gif";
import png2 from "../assets/icon2.gif";
import png3 from "../assets/icon3.gif";
import png4 from "../assets/icon4.gif";
import Video from "./Video";

function Main() {
	return (
		<main>
			<section className="my-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-40 mx-auto w-4/5">
				<SubMain
					title="Stream Movies & TV Shows"
					description="Watch any movie or TV episode as many times as you want. All you
								need to get started with Popcorn Time is a proper internet
								connection."
					alt="Stream Movies & TV Shows"
					img={png1}
				/>
				<SubMain
					title="Watch in Full-HD"
					description="Popcorn Time is constantly searching all over the web just for the highest quality torrents from the most important sites."
					alt="Watch in Full-HD"
					img={png2}
				/>
				<SubMain
					title="Endless Catalogue"
					description="If your movie is out there, Popcorn Time will find the best version possible and let you start streaming it right away."
					alt="Endless Catalogue"
					img={png3}
				/>
				<SubMain
					title="Subtitles & Dubbing"
					description="Watch your movie or TV episode instantly on Popcorn Time, dubbed or with subtitles. And then keep on watching."
					alt="Subtitles & Dubbing"
					img={png4}
				/>
			</section>

			<section className="bg-middleImage bg-center bg-cover bg-no-repeat w-screen  border-t-8 border-b-8 border-dashed border-red-500 h-screen md:h-3/4  md:py-24   ">
				<section className="grid sm:grid-cols-2 grid-cols-1 mx-auto pl-2  sm:mr-32 -mr-6 sm:w-4/5">
					<div className="md:-ml-20 ">
						<div className="my-5">
							<h1 className="text-white font-bold text-2xl">
								Hard to believe?
							</h1>
							<span className=" ml-8  text-xl text-white">
								See how easy it works...
							</span>
						</div>
						<ol className="ml-10 mt-14 -mb-16 text-xl">
							<li className="text-white"> Install Popcorn Time</li>
							<li className="text-white my-2"> Choose a title</li>
							<li className="text-white">Click play & enjoy!</li>
						</ol>
					</div>
					<div>
						<Video
							className="  sm:h-96 w-11/12 h-72 mt-44 "
							src="https://www.youtube.com/embed/5QaNO4AF8pQ"
							width="728"
							height="373"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				</section>
			</section>
		</main>
	);
}

export default Main;


