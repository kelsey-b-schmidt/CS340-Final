import React from 'react'
import CustomerComponent from "./CustomerComponent";

export default function CustomerListComponent(
    {customers, setCustomers}) {
    return (
        <div>
            <h3>Table</h3>
            <CustomerComponent/>
        </div>
    )
}

//{ customers }
//<tbody>
//                 {customers.map((customer, i) =>
//                 <CustomerComponent
//                     customer={customer}
//                     key={i} />)}
//             </tbody>


//<table>
//             <thead>
//             <tr>
//                 <th>Customer ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th colSpan="4">Actions</th>
//             </tr>
//             </thead>
//
//         </table>