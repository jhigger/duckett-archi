import Button from "./Button";

const Form = () => {
	return (
		<form
			action="https://formsubmit.co/nekuvoto@mailgolem.com"
			method="POST"
		>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="h-16 w-full rounded bg-gray-200 p-4"
				></input>
				<input
					type="text"
					name="phone"
					placeholder="Phone Number"
					className="h-16 w-full rounded bg-gray-200 p-4"
				></input>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="h-16 w-full rounded bg-gray-200 p-4"
				></input>
			</div>
			<textarea
				name="message"
				placeholder="Message"
				className="h-44 w-full rounded bg-gray-200 p-4"
			></textarea>
			<Button type="submit" title="Submit" className="my-4 w-max" />
		</form>
	);
};

export default Form;
