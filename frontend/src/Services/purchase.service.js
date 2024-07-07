

const API = 'http://localhost:3000/purchases'

export const fetchPurchaseHistorial = async () => {
	try {
	  const res = await fetch(`${API}/history`, { credentials: 'include' });
      
	  if (!res.ok) {
	    const errorDetails = await res.json();
	    throw new Error(errorDetails.message || 'Network response was not ok');
	  }
      
	  const data = await res.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching purchase history:', error.message);
	  throw error;
	}
      };
      






// Services/purchase.service.js

// export const makePurchase = async (purchaseData) => {
// 	try {
// 		const response = await fetch(`${API}/create`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(purchaseData)
// 		});

// 		if (!response.ok) {
// 			throw new Error('Error making purchase');
// 		}

// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.error('Error making purchase:', error);
// 		return { success: false, message: error.message };
// 	}
// };

