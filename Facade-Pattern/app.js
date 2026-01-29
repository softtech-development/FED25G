import { PaymentFacade } from './payment-facade.js';

const initApp = () => {
  const payment = new PaymentFacade();
  const userInfo = {
    email: 'testuser@gmail.com',
  };

  const paymentData = {
    amount: 20,
    currency: '€',
  };

  const result = payment.processPayment(userInfo, paymentData);
  console.log('');
  console.log(`Payment result: ${JSON.stringify(result)}`);
};

document.addEventListener('DOMContentLoaded', initApp);
