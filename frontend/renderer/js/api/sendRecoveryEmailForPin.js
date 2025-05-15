export function sendRecoveryEmailPinHandler({ onLoadingChange, onErrorChange, onSuccess}) {
    let isLoading = false;
    let error = null;
  
    async function sendRecoveryEmailPin(email) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      const {token} = JSON.parse(localStorage.getItem('user'));

      
      try {
        const response = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/accounts/forgotPin', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({email})
        });
  
        const json = await response.json();
        
       
       
         if (!response.ok) {
          isLoading = false;
          error = json.error || 'Failed to send the recovery email';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
       
       
       
        // Successs
        isLoading = false;
        onLoadingChange(isLoading);
        onSuccess(json); 
      } catch (err) {
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    }
  
    return { sendRecoveryEmailPin };
  }