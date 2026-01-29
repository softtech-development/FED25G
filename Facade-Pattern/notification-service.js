export class NotificationService {
  sendEmail(to, subject, body) {
    console.log(
      `Skickar bekräftelse mejl till ${to} med rubrik: ${subject}. Meddelande ${body}`,
    );
    return { emailId: 'email_' + Math.random().toString(36).substring(2, 9) };
  }

  sendSMS(phoneNumber, message) {
    console.log(`Skickar SMS till ${phoneNumber} meddelande: ${message}`);
    return { smsId: 'sms_' + Math.random().toString(36).substring(2, 9) };
  }
}
