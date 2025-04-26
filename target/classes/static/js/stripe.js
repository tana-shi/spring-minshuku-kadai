const stripe = Stripe('pk_test_51RGefHFkxK3vzEHmYBUNDcawhWgTwxpbsZWHRLgMIflvqlES5FKpry0ahlzzAPTUYqUoGOwqVUwcGd5WAAhzcHID00ZRCYrxUi');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});