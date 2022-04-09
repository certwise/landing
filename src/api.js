export const createEarlyAccessRequest = async (email) => {
	const res = await fetch("https://api.certwise.app/earlyaccess", {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({ email }),
	});
	return res.json();
};

export function isValidEmail(e) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(e).search(filter) != -1;
}