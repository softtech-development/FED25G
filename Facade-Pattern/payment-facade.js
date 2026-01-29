import { NotificationService } from './notification-service.js';
import { PaymentService } from './payment-service.js';

export class PaymentFacade {
  constructor() {
    this.paymentService = new PaymentService();
    this.notificationService = new NotificationService();
  }

  processPayment(userInfo, paymentData) {
    try {
      // 1. Behandla betalning...
      const paymentResult = this.paymentService.processPayment(
        paymentData.amount,
        paymentData.currency,
      );

      // 2. Skicka bekräftelse...
      this.notificationService.sendEmail(
        userInfo.email,
        'Orderbekräftelse',
        `Betalning ${paymentData.amount}${paymentData.currency} lyckades.`,
      );

      // 3. Returnera ett förenklat svar
      return { success: true, transationsId: paymentResult.transactionId };
    } catch (error) {
      console.log(error);
    }
  }
}
