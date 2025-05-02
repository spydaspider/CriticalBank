

export function transactionsHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
    
  
    async function transactions() {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      //get account number of this user
      let accountNumber = "";
      //get token from localhost 
      const {token,userId} = JSON.parse(localStorage.getItem('user'));
      //get the accountNumber with userId from accounts.
      try{
          const accountsResponse = await fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/accounts/allAccounts', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}`},
        
      });
      const accountsJson = await accountsResponse.json();
      if(!accountsResponse.ok)
      {
        isLoading = false;
        onLoadingChange(isLoading);
        error = "Couldn't get response";

        onErrorChange(error);
        return;
        
      }
      //success
     const userAccount = accountsJson.find((account)=>account.user === userId)
     if(!userAccount)
     {
        isLoading = false;
        onLoadingChange(isLoading);
        error = "You have not created a bank account";
        onErrorChange(error);
        return;
     }
         accountNumber = userAccount.accountNumber;
    }
    catch(error)
    {
        error = "Network error";
        onErrorChange(error);
        return;
    }
      
        console.log(accountNumber);
           
        
            fetch('https://criticalbankbackend-4a0be9a2198b.herokuapp.com/api/transactions', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            
            })
            .then(response => {
              return response.json().then(json => {
                if (!response.ok) {
                  isLoading = false;
                  error = json.error || 'Failed to get transactions';
                  onLoadingChange(isLoading);
                  onErrorChange(error);
                  return;
                }
          
                // Success
                isLoading = false;
                onLoadingChange(isLoading);
                //check all transactions with this account number 
                let userTransactions = json.filter((userTransaction)=>userTransaction.accountNumber === accountNumber);
                onSuccess(userTransactions);
              });
            })
            .catch(err => {
              isLoading = false;
        
              onLoadingChange(isLoading);
              onErrorChange(err);
            });
          
         
        
        }

    
      
      

   
    return { transactions };
  }