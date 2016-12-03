
const defaultError = data => console.log(data);

export const fetchBenches = (error = defaultError) => {
	return $.ajax({
				method: 'GET',
				url: 'api/benches',
				dataType: 'json',
				error
	})
}