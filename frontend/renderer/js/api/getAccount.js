export async function getAccounts() {
    try {
      const response = await fetch('http://localhost:4000/api/accounts/allAccounts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const accounts = await response.json();
      return accounts;
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return [];
    }
  }