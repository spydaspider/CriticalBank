export function resetPinHandler({ onLoadingChange, onErrorChange, onSuccess}) {
    let isLoading = false;
    let error = null;
  
    async function resetPin(email,pinOTP,newPin) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      const { token } = JSON.parse(localStorage.getItem('user'));
      
      try {
        const response = await fetch('http://localhost:4000/api/accounts/resetPin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({email,pinOTP,newPin})
        });
  
        const json = await response.json();
        console.log(json);
       
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
          error = json.error || 'Failed to update the pin';
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
  
    return { resetPin };
  }