# Payment Gateway

- When we work with payment gateways, do code in very secure way.

### Razorpay Gateway

- Razorpay is a very famous Provide Payment Gateway Provider

### Problems

- user made the payment but on my end didn't receive the payment.

### Payment Flow

1. Create Order
2. Payment Verification

### Theory

1. Frontend PayNow Button ask the Backend to createOrder

### Backend APIs

1. Create Order
2. Verify Payment

### Razorpay Flow

- razorpay install : `npm install razorpay`

### Razorpay Resource

The resources can be accessed using the instance. All the methods invocations follow the namespaced signature:

```js
// API signature
// {razorpayInstance}.{resourceName}.{methodName}(resourceId [, params])
// example

instance.payments.fetch(paymentId);
```
