import Head from "next/head";
import Form from "~/components/Form";
import HeroSection from "~/components/HeroSection";
import Socials from "~/components/Socials";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact | Duckett Architecture</title>
			</Head>
			<main>
				<HeroSection
					title="Contact Us"
					imageSrc="https://via.placeholder.com/1080x720?text=Image"
				/>

				<div className="container mx-auto flex flex-col gap-8 last:mb-32">
					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-3xl uppercase text-primary">
							Keep in touch
						</h2>
						<div className="grid grid-cols-1 gap-8 tracking-widest lg:w-10/12 lg:grid-cols-2 lg:self-end">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl font-bold">
									Palmerston North,{" "}
									<span className="text-gray-500">
										New Zealand
									</span>
								</h3>
								<p>
									182 Broadway Avenue, Palmerston North
									Central, Palmerston North 4410
								</p>
								<div className="flex flex-col lg:flex-row lg:gap-4">
									<h3 className="font-bold">Email:</h3>
									<a
										className="underline"
										href="mailto: admin@duckettarchitecture.co.nz"
									>
										admin@duckettarchitecture.co.nz
									</a>
								</div>
							</div>
							<div className="flex flex-col gap-4 font-bold leading-10">
								<div>
									<h3>Call Us:</h3>
									<p className="text-2xl">
										06{" "}
										<span className="text-gray-500">
											356 735
										</span>
									</p>
									<p className="text-2xl">
										+64{" "}
										<span className="text-gray-500">
											22 057 0360
										</span>
									</p>
								</div>

								<div>
									<h3 className="mb-4 lg:mb-0">Work Hours</h3>
									<div className="grid grid-cols-1 lg:grid-cols-2">
										<p>Monday - Friday</p>
										<p className="font-normal">
											09:00 - 05:00
										</p>
										<p>Saturday - Sunday</p>
										<p className="font-normal">Closed</p>
									</div>
								</div>

								<div>
									<h3>Follow Us</h3>
									<ul className="flex gap-4">
										<Socials />
									</ul>
								</div>
							</div>
						</div>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-3xl uppercase text-primary">
							Work with us
						</h2>
						<div className="flex flex-col gap-2 lg:w-10/12 lg:self-end">
							<Form />
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Contact;
