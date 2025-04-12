export function signupHandler({ onLoadingChange, onErrorChange, onSuccess }) {
      let isLoading = false;
      let error = null;
    
      async function signup(username, email, password) {
        // Set loading true and clear errors
        isLoading = true;
        error = null;
        onLoadingChange(isLoading);
        onErrorChange(null);
    
        /* if (password !== passwordAgain) {
          isLoading = false;
          error = 'Passwords do not match';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
     */
        try {
          const response = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
          });
    
          const json = await response.json();
    
          if (!response.ok) {
            isLoading = false;
            error = json.error || 'Signup failed';
            onLoadingChange(isLoading);
            onErrorChange(error);
            return;
          }
    
          // Success
          isLoading = false;
          localStorage.setItem('user', JSON.stringify(json));
          onLoadingChange(isLoading);
          onSuccess(json);
        } catch (err) {
          isLoading = false;
          error = 'Network error';
          onLoadingChange(isLoading);
          onErrorChange(error);
        }
      }
    
      return { signup };
    }