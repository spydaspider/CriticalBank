export function searchAccountHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
  
    async function searchAccount(accountNumber) {
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
      const {token} = JSON.parse(localStorage.getItem('user'));

      try {
        const response = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/accounts/allAccounts', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}`},
          
        });
  
        const json = await response.json();
        
  
         if (!response.ok) {
          isLoading = false;
          error = json.error || 'Account not found';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
        
  
        // Success
        isLoading = false;
        onLoadingChange(isLoading);
        //pass only that account.
        const account = json.find((account)=>account.accountNumber === accountNumber);
        if(!account)
        {
          onErrorChange('Account not found');
          return;
        }
        
        onSuccess(account); 
      } catch (err) {
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    }
  
    return { searchAccount };
  }