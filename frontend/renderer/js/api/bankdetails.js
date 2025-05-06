
export function detailsHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
    
  
    async function details() {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      //get account number of this user
      let accountNumber = "";
      //get token from localhost 
      const {token} = JSON.parse(localStorage.getItem('user'));
     
    
           
        
            fetch('http://localhost:4000/api/accounts', {
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
                  error = json.error || 'Failed to get account';
                  onLoadingChange(isLoading);
                  onErrorChange(error);
                  return;
                }
          
                // Success
                isLoading = false;
                onLoadingChange(isLoading);
                //check all transactions with this account number 
                onSuccess(json);
              });
            })
            .catch(err => {
              isLoading = false;
        
              onLoadingChange(isLoading);
              onErrorChange(err);
            });
          
         
        
        }

    
      
      

   
    return { details };
  }