import { useEffect, useState } from "react";

function App2() {
	const [name, setName] = useState({
		firstName: "",
		lastName: "",
	});

	useEffect(() => {
		console.log("useEffectが実行されました");
	}, []);

	const handleFirstName = (firstName: string) => {
		setName((prev) => ({ ...prev, firstName }));
	};

	const handleLastName = (lastName: string) => {
		setName((prev) => ({ ...prev, lastName }));
	};

	return (
		<>
			<h1>Learn useEffect (2)</h1>
			<h2>
				Name: {name.firstName} {name.lastName}
			</h2>
			<div>
				<button type="button" onClick={() => handleFirstName("John")}>
					John
				</button>
				<button type="button" onClick={() => handleLastName("Doe")}>
					Doe
				</button>
			</div>
		</>
	);
}

export default App2;
