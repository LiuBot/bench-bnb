const defaultError = data => console.log(data);

export const fetchBenches = (filters, success, error = defaultError) => {
	return $.ajax({
				method: 'GET',
				url: 'api/benches',
				success,
				dataType: 'json',
				data: filters,
				error
	})
}