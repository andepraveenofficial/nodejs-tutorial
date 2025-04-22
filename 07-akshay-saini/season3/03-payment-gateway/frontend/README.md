# Razorpay

1. call CreateOrder api
2. Open Razorpay Dialog box -> Then Pay the Money
   - Add this in head tag in index.js of frontend application
   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   ```
3. alert with razorpay webhook
4. call verify-payment api

### Don't

- Don't send amount from frontend, some hackers do man-in-middle attack

```

```
