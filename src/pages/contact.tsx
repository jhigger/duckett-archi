import Head from "next/head";
import Form from "~/components/Form";
import Socials from "~/components/Socials";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact | Duckett Architecture</title>
			</Head>
			<main>
				<section className="container relative mx-auto my-8">
					<h1 className="my-12 text-center text-4xl font-bold tracking-widest text-primary">
						Contact Us
					</h1>

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.539089682408!2d175.61446191597017!3d-40.35256949128334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d41b2d9418be47d%3A0x31da43b8d1fda7b5!2sDuckett%20Architecture!5e0!3m2!1sen!2sph!4v1678504950252!5m2!1sen!2sph"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="aspect-[9/16] w-full rounded-3xl object-cover object-center md:aspect-[16/5]"
					></iframe>
				</section>

				<div className="container mx-auto flex flex-col gap-8 last:mb-32">
					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-3xl font-bold uppercase text-primary">
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
						<h2 className="mb-4 text-3xl font-bold uppercase text-primary">
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
