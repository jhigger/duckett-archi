import { FaFacebookSquare } from "react-icons/fa";

const Socials = () => {
	return (
		<>
			{/* <li>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<FaTwitter size={24} />
				</a>
			</li> */}
			<li>
				<a
					aria-label="Social link"
					href="https://fb.com/DuckettArchitectureLtd"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookSquare size={24} />
				</a>
			</li>
			{/* <li>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<FaInstagram size={24} />
				</a>
			</li> */}
			{/* <li>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<FaGoogle size={24} />
				</a>
			</li> */}
		</>
	);
};

export default Socials;
