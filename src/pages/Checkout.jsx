import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);

  const [shippingToggle, setShippingToggle] = useState(false);

  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo , setShippingInfo] = useState({
    name:' ',
    address : ' ',
    city : ' ',
    zip : ' '
  })

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()

  const handleChange = (e) => {
  const { name, value } = e.target;
  setShippingInfo(prevState => ({
    ...prevState,
    [name]: value
  }));
};

const handleOrder = () => {
  const newOrder = {
    products: cart.products,
    orderNumber: "1234",
    shippingInformation: shippingInfo,
    totalPrice: cart.totalPrice
  };
  
  // تتأكد من أن shippingInfo غير فارغ قبل التحديث
  if (shippingInfo.name && shippingInfo.address && shippingInfo.city && shippingInfo.zip) {
    setOrder(newOrder);
    navigate('/order-confirmation');
  } else {
    alert("Please fill in all the shipping information!");
  }
};

  

  

  return (
    <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb:-4">CHECKOUT</h3>
      <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
        <div className="md:w-2/3">
          <div className="p-2 mb-6 border">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                  onClick={(e) => setShippingInfo({...shippingInfo , name: e.target.value})}
                    onChange={handleChange}
                  
                />
              </div>
              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    className="w-full px-3 py-2 border"
                    onClick={(e) => setShippingInfo({...shippingInfo , zip: e.target.value})}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*shipping*/}
          <div className="p-2 mb-6 border">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onClick={(e) => setShippingInfo({...shippingInfo , address: e.target.value})}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                    onClick={(e) => setShippingInfo({...shippingInfo , city: e.target.value})}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Zip Code</label>
                  <input
                    type="text"
                    name="code"
                    placeholder="Enter Code"
                    className="w-full px-3 py-2 border"
                    onClick={(e) => setShippingInfo({...shippingInfo , zip: e.target.value})}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*payment method*/}
          <div className="p-2 mb-6 border">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block ml-2 text-gray-700">
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block ml-2 text-gray-700">Debit Card</label>
              </div>
            </div>
            {paymentMethod === "dc" && (
              <div className="p-4 mb-4 bg-gray-100 rounded-lg">
                <h3 className="mb-4 text-xl font-semibold">
                  Debit Card Information
                </h3>
                <div className="mb-4">
                  <label
                    className="block mb-2 font-semibold text-gray-700"
                    htmlFor=""
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 font-semibold text-gray-700"
                    htmlFor=""
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter card holder name"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block mb-2 font-semibold text-gray-700 "
                      htmlFor=""
                    >
                      Expire Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      className="block mb-2 font-semibold text-gray-700"
                      htmlFor=""
                    >
                      cvv
                    </label>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-md md:w-1/3">
          <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="object-contain w-16 h-16 rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-md">{product.name}</h3>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price} x {product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 mt-4 border-t">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full py-2 mt-6 text-white bg-red-600 hover:bg-red-800"
          onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
