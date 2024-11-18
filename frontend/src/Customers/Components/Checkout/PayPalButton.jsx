import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, removeAllItems } from "../../../State/Cart/Action";

const PayPalButton = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPayPalScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AeUm7QUe-l16a6HPLSoTAngxEvW4S-3Uz8DHUl1BdIGyMv7u3IQC0Jr1-MG9ubvIKSgUGFI5tHIPml1P&currency=CAD`;
      script.addEventListener("load", () => {
        window.paypal
          .Buttons({
            createOrder: async (data, actions) => {
              try {
                const res = await axios.post(
                  `http://localhost:8000/paypal/create-order/${id}`
                );
                return res.data.id;
              } catch (error) {
                console.error("Error creating order:", error);
                return null;
              }
            },
            onApprove: async (data, actions) => {
              try {
                const res = await axios.post(
                  "http://localhost:8000/paypal/capture-payment",
                  {
                    orderId: data.orderID,
                  }
                );
                dispatch(removeAllItems());
                navigate(`/paymentsuccess/${id}`);
              } catch (error) {
                console.error("Error capturing payment:", error);
              }
            },
            onError: (err) => {
              console.error("Payment error:", err);
            },
            style: {
              layout: "vertical", // Optional: Adjusts button layout (vertical)
            },
            funding: {
              allowed: [window.paypal.FUNDING.PAYPAL], // Explicitly only PayPal
              disallow: [
                window.paypal.FUNDING.CREDIT,
                window.paypal.FUNDING.DEBIT,
              ], // Explicitly disallow Credit and Debit
            },
            // Explicitly enforce the correct button
            button: {
              shape: "rect", // Square buttons (optional)
              color: "gold", // Customize color if needed
            },
          })
          .render("#paypal-button-container");
      });
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      loadPayPalScript();
    } else {
      window.paypal
        .Buttons({
          createOrder: async (data, actions) => {
            try {
              const res = await axios.post(
                `http://localhost:8000/paypal/create-order/${id}`
              );
              return res.data.id;
            } catch (error) {
              console.error("Error creating order:", error);
              return null;
            }
          },
          onApprove: async (data, actions) => {
            try {
              const res = await axios.post(
                "http://localhost:8000/paypal/capture-payment",
                {
                  orderId: data.orderID,
                }
              );
              // console.log("Payment successful:", res.data);
            } catch (error) {
              console.error("Error capturing payment:", error);
            }
          },
          onError: (err) => {
            console.error("Payment error:", err);
          },
          style: {
            layout: "vertical",
          },
          funding: {
            allowed: [window.paypal.FUNDING.PAYPAL], // Explicitly only PayPal
            disallow: [
              window.paypal.FUNDING.CREDIT,
              window.paypal.FUNDING.DEBIT,
            ], // Explicitly disallow Credit and Debit
          },
        })
        .render("#paypal-button-container");
    }
  }, [id, dispatch]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
