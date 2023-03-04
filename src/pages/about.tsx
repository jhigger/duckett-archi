import Head from "next/head";
import GetInTouch from "~/components/GetInTouch";

/* eslint-disable @next/next/no-img-element */
const About = () => {
	const list = [
		"Residential",
		"Commercial",
		"Industrial",
		"Educational",
		"Institutional",
		"Assembly",
		"Urban Design",
		"Social Housing",
		"Feasibility Studies",
		"Project Administration",
		"Conceptual Design",
		"Hard Landscape",
	];

	return (
		<>
			<Head>
				<title>About | Duckett Architecture</title>
			</Head>
			<main>
				<h1 className="mb-4 text-center text-4xl font-bold tracking-widest">
					About Us
				</h1>

				<img
					alt="project"
					src="https://via.placeholder.com/1080x720?text=Image"
					width={1080}
					height={720}
					className="mb-8 max-h-[720px] w-screen object-cover object-center"
				/>

				<div className="container mx-auto flex flex-col gap-8">
					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-2xl uppercase text-primary">
							Our Story
						</h2>
						<p className="lg:w-10/12 lg:self-end">
							The year 2022 marked a significant milestone and
							celebration for the practice, marking It&apos;s{" "}
							<span className="font-bold">
								&lsquo;40 years in the business&rsquo;
							</span>
							. What Colin has established in 1982 has moved and
							continues to flow from strength to strength gaining,
							maintaining, and adding to the ever-evolving
							building industry resulting in a plethora of
							experience in all aspects & avenues of design
							considerations.
						</p>
						<p className="lg:w-10/12 lg:self-end">
							In his personal capacity, Colin&apos;s continuous
							development and a multitude of projects under his
							belt both nationally and internationally with the
							greatest concentrate of projects within the Manawatu
							region makes for an immeasurable wealth of
							&ldquo;know how&rdquo; further pushing the
							boundaries to what he is able to contribute to a
							well-shaped built environment.
						</p>
						<p className="lg:w-10/12 lg:self-end">
							As of April 2022, senior staff member Marcell
							Thangamuthu has been introduced as a partner to the
							practice. Marcell, joining Duckett Architecture in
							2018 along with his then 10 years experience in the
							Architecture, Urban Design & Master planning
							disciplines has got on board and taken on the
							current on-going commercial projects in the office,
							with new developments from inception to completion.
						</p>
						<p className="lg:w-10/12 lg:self-end">
							In more recent times Marcell has gotten into the
							developed design stage of boutique residential and
							multi-residential development&apos;s where limited
							spaces and site constraints had to be carefully
							considered whilst not allowing it to redefine the
							design intent.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-2xl uppercase text-primary">
							What we do
						</h2>
						<p className="lg:w-10/12 lg:self-end">
							Be it a tiny home or a major turn-key development
							integrating multi-disciplinary consortiums, we are
							eager and willing to provide the most suitable,
							sustainable and timeless design tailored to suit
							ones needs. At least, we provide individuals and
							developers alike with the best well-informed advice
							on taking their next steps to further their vision.
						</p>
						<ul className="pl-6 flex list-disc flex-col gap-2 lg:w-10/12 lg:self-end">
							{list.map((item, i) => (
								<li key={i} className="font-bold">
									{item}
								</li>
							))}
						</ul>
					</section>

					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default About;
