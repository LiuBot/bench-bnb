const defaultError = data => console.log(data);

export const fetchBenches = (filters, success, error = defaultError) => {
	return $.ajax({
				method: 'GET',
				url: 'api/benches',
				dataType: 'json',
				data: filters,
				success,
				error
	})
}

export const fetchBench = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  });
};

export const createBench = (bench, success, error = defaultError) => {
	return $.ajax({
		method: 'POST', 
		url: 'api/benches',
		dataType: 'json',
		data: {bench},
		success,
		error
	})
}