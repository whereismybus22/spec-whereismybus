function shareApp() {
  const message = `Hello!!
Now you can track your Institution buses' location 24/7 — from anywhere! 🚍
🔗 Visit: https://spec-whereismybus.vercel.app
👤 Username: SPEC@2007
🔒 Password: SPEC@2007`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
