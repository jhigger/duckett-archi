import Head from "next/head";
import Button from "~/components/Button";

/* eslint-disable @next/next/no-img-element */
const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact | Duckett Architecture</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="mb-4 text-center text-4xl font-bold tracking-widest">
					Contact Us
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
							Keep in touch
						</h2>
						<div className="grid grid-cols-1 gap-8 lg:w-10/12 lg:grid-cols-2 lg:self-end">
							<div className="flex flex-col gap-4">
								<p>Palmerston North, New Zealand</p>
								<p>
									182 Broadway Avenue, Palmerston North
									Central, Palmerston North 4410
								</p>
								<div className="flex flex-col lg:flex-row lg:gap-4">
									<h3>Email:</h3>
									<p>admin@duckettarchitecture.co.nz</p>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div>
									<h3>Call Us:</h3>
									<p>06 356 735</p>
									<p>+64 22 057 0360</p>
								</div>

								<div>
									<h3>Work Hours</h3>
									<div className="grid grid-cols-2">
										<p>Monday - Friday</p>
										<p>09:00 - 05:00</p>
										<p>Saturday - Sunday</p>
										<p>Closed</p>
									</div>
								</div>

								<div>
									<h3>Follow Us</h3>
									<ul className="flex gap-4">
										<li>social 1</li>
										<li>social 2</li>
										<li>social 3</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-2xl uppercase text-primary">
							Work with us
						</h2>
						<div className="flex flex-col gap-2 lg:w-10/12 lg:self-end">
							<div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
								<input className="h-16 w-full rounded bg-gray-300"></input>
								<input className="h-16 w-full rounded bg-gray-300"></input>
								<input className="h-16 w-full rounded bg-gray-300"></input>
							</div>
							<input className="h-44 w-full rounded bg-gray-300"></input>
							<Button title="BUTTON CTA" className="w-max" />
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Contact;
