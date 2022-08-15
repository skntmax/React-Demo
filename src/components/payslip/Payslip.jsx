import React from 'react';

export default function Payslip() {
  return (
    <div>
    <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-12">
            <div className=" text-center lh-1 mb-2 ">
                <h6 className="fw-bold">Payslip</h6> <span className="fw-normal">Payment slip for the month of June 2021</span>
            </div>
            <div className="d-flex justify-content-end "> <span>Working Branch:ROHINI</span> </div>
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">EMP Code</span> <small className="ms-3">39124</small> </div>
                        </div>
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">EMP Name</span> <small className="ms-3">Ashok</small> </div>
                        </div>
                    </div>
                     
                    <div className="row">
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">PF No.</span> <small className="ms-3">101523065714</small> </div>
                        </div>
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">NOD</span> <small className="ms-3">28</small> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">ESI No.</span> <small className="ms-3"></small> </div>
                        </div>
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">Mode of Pay</span> <small className="ms-3">SBI</small> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">Designation</span> <small className="ms-3">Marketing Staff (MK)</small> </div>
                        </div>
                        <div className="col-md-6">
                            <div> <span className="fw-bolder">Ac No.</span> <small className="ms-3">*******0701</small> </div>
                        </div>
                    </div>
                </div>
                 
                <table className="mt-4 table table-bordered " style={{ borderWidth:"2px", borderColor:"black" }} >
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">Earnings</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Deductions</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Basic</th>
                            <td>16250.00</td>
                            <td>PF</td>
                            <td>1800.00</td>
                        </tr>
                        <tr>
                            <th scope="row">DA</th>
                            <td>550.00</td>
                            <td>ESI</td>
                            <td>142.00</td>
                        </tr>
                        <tr>
                            <th scope="row">HRA</th>
                            <td>1650.00 </td>
                            <td>TDS</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">WA</th>
                            <td>120.00 </td>
                            <td>LOP</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">CA</th>
                            <td>0.00 </td>
                            <td>PT</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">CCA</th>
                            <td>0.00 </td>
                            <td>SPL. Deduction</td>
                            <td>500.00</td>
                        </tr>
                        <tr>
                            <th scope="row">MA</th>
                            <td>3000.00</td>
                            <td>EWF</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">Sales Incentive</th>
                            <td>0.00</td>
                            <td>CD</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">Leave Encashment</th>
                            <td>0.00</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <th scope="row">Holiday Wages</th>
                            <td>500.00</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <th scope="row">Special Allowance</th>
                            <td>100.00</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <th scope="row">Bonus</th>
                            <td>1400.00</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <th scope="row">Individual Incentive</th>
                            <td>2400.00</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr className="border-top">
                            <th scope="row">Total Earning</th>
                            <td>25970.00</td>
                            <td>Total Deductions</td>
                            <td>2442.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-4"> <br/> <span className="fw-bold">Net Pay : 24528.00</span> </div>
                <div className="border col-md-8">
                    <div className="d-flex flex-column"> <span>In Words</span> <span>Twenty Five thousand nine hundred seventy only</span> </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="d-flex flex-column mt-2"> <span className="fw-bolder">For Kalyan Jewellers</span> <span class="mt-4">Authorised Signatory</span> </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}
