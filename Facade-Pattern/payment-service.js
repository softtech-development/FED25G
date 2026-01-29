export class PaymentService {
  processPayment(amount, currency) {
    console.log(`Bearbetar betalning ${amount}${currency}`);
    return {
      transactionId: 'tx_' + Math.random().toString(36).substring(2, 9),
    };
  }

  refundPayment(transactionId) {
    console.log(`Återbetalar beställning ${transactionId}`);
    return { refundId: 'ref_' + Math.random().toString(36).substring(2, 9) };
  }
}
