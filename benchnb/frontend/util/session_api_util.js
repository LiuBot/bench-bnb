const defaultError = data => console.log(data);

// SessionApiUtil

// Create a new file, util/session_api_util.js with the following functions:

// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.

export const signup = (user, error = defaultError) => {
	return $.ajax({
		method: 'POST',
		url: 'api/users',
		dataType: 'json',
		data: {user},
		error
	})
}

export const login = (user, error = defaultError) => {
	return $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType:'json',
    data:{user},
    error
  });
}

export const logout = () => {
	return $.ajax({
    method: 'DELETE',
    url: 'api/session',
    dataType:'json'
  });
}
