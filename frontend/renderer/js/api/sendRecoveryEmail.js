export function sendRecoveryEmailHandler({ onLoadingChange, onErrorChange, onSuccess}) {
    let isLoading = false;
    let error = null;
  
    async function sendRecoveryEmail(email) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
  
      
      try {
        const response = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/users/forgotPassword', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email})
        });
  
        const json = await response.json();
        
       
        /* if(json.loginLockUntil)
            {
                try{
                onLock(json.loginLockUntil);
                }
                catch(error)
                {
                  console.error("Error in onLock:", lockError);

                }
                isLoading = false;
                error = json.error || 'System is locked. Too many failed login attempts, try again after'+json.loginLockUntil;

                onLoadingChange(isLoading);
                onErrorChange(error);
                return;
            } */
         if (!response.ok) {
          isLoading = false;
          error = json.error || 'Failed to send the recovery email';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
        /* if(!json.emailVerified)
            {
                isLoading = false;
                error = 'Please click the link we sent to you to verify your email';
                onLoadingChange(isLoading);
                onErrorChange(error);
                return 
            } */
       
       
        // Successs
        isLoading = false;
/*         localStorage.setItem('user', JSON.stringify(json));
 */        onLoadingChange(isLoading);
        onSuccess(json); 
      } catch (err) {
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    }
  
    return { sendRecoveryEmail };
  }