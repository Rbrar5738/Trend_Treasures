const paypal = require("@paypal/checkout-server-sdk");
const orderService = require("../services/order.service.js");

// PayPal environment setup
let clientId =
  "AeUm7QUe-l16a6HPLSoTAngxEvW4S-3Uz8DHUl1BdIGyMv7u3IQC0Jr1-MG9ubvIKSgUGFI5tHIPml1P";
let clientSecret =
  "EKc324oeMpIjFTjr344cGzBhek8iF9DX0LLYVt2XO-PuHncxt95SGNkUYcY0xWHWADQoRLv44m-mMaCm";

// Environment setup for sandbox or live
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
// let environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

// Create order
async function createOrder(orderId) {
  const order = await orderService.findOrderById(orderId);
  let request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "CAD",
          value: order.totalPrice,
        },
      },
    ],
  });

  try {
    const order = await client.execute(request);
    // console.log(order);
    return order.result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Capture payment
async function capturePayment(orderId) {
  let request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});
  // console.log("capture payment orderId ", orderId);

  try {
    const capture = await client.execute(request);
    // const order = await orderService.findOrderById(orderId);
    // order.orderStatus = "PLACED";
    // await order.save();

    // console.log(capture);
    return capture.result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = { createOrder, capturePayment };
