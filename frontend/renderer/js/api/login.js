export function loginHandler({ onLoadingChange, onErrorChange, onSuccess, onLock }) {
    let isLoading = false;
    let error = null;
  
    async function login(email, password) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
  
      
      try {
        const response = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email, password})
        });
  
        const json = await response.json();
        
         if (!response.ok) {
          isLoading = false;
          error = json.error || 'Login failed';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
        if(!json.emailVerified)
        {
            isLoading = false;
            error = 'Please click the link we sent to you to verify your email';
            return 
        }
        if(json.loginLockUntil)
        {
            onLock(json);
        }
        // Successs
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
  
    return { login };
  }