import { useState } from "react"

const Req = ({props}) => {

  const token = localStorage.getItem("jwt")
  const [request, setRequests] = useState(props)

 


  const handleApprove = () => {
    fetch(`https://enventory-management.herokuapp.com/requests/${request.id}`, {
      method: "PATCH",
      mode: "cors",

      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Approved"
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          alert("Success");
          setRequests(r);
        });
      } else {
        alert("Something went wrong");
      }
    });
  }

  

  const handleRejected = () => {
    fetch(`https://enventory-management.herokuapp.com/requests/${request.id}`, {
      method: "PATCH",
      mode: "cors",

      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Rejected",
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          alert("Success")
          setRequests(r)
        });
      } else {
        alert("Something went wrong");
      }
    });
  }

  console.log("this are requests",request);
// let { user: {name},username} = request
  
  

  return (
    
    <tr
      key={request.id}
      className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {request.asset_id}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {request.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {request.category}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {/* {  } */}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {request.quantity}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {request.urgency}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {request.status}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button onClick={handleApprove} className="hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2CAE66"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143"
            />
          </svg>
        </button>
        <button onClick={handleRejected} className="hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m-15 0l15 15"
            />
          </svg>
        </button>
      </td>
    </tr>
  );

}

export default Req