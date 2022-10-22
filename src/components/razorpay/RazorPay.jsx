import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RazorPay() {

    const [amount, setamount] = useState('')

    function pay(e) { 

        e.preventDefault()
        let model = { amount: amount }

        axios.post('pay/', model).then(res => {
            debugger

            let data = {
                amount: res.data.amount,
                amount_due: res.data.amount_due,
                order_id: res.data.id
            }
            debugger

            let options = {
                "key": "rzp_test_tFfRCOxEaSQ07h", // Enter the Key ID generated from the Dashboard
                "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Test client ",
                "description": "Anything client want ",
                "image": "https://example.com/your_logo",
                "order_id": data.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: function (response) {
                    toast.success(response.razorpay_order_id, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setTimeout(() => {
                        toast.success(response.razorpay_signature, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }, 2000)

                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            debugger

            var rzp1 = (window).Razorpay(options);
            rzp1.open();

            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });



        }).catch(err => {
            console.log("err ", err);
        })

    }

    return (
        <div>
            <h4 className="text-center"> Razor pay</h4>

            <form onSubmit={pay}>
                <div class="form-group">
                    <label for="exampleInputEmail1"> Input </label>
                    <input type="number" class="form-control"
                        id="exampleInputEmail1" onChange={(e) => setamount(e.target.value)}
                        aria-describedby="emailHelp" placeholder="0" />
                    <small id="emailHelp" class="form-text text-muted"> amount  </small>
                </div>


                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1"> Check me out </label>
                </div>
                <button type="submit" class="btn btn-primary btn-block"> Pay </button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


        </div>
    )
}

export default RazorPay
