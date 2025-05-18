import { useEffect } from "react";


function check_url() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function get_id() {
  const id = check_url();
  if (id == null) {
    return 0
  }
  return id
}

function set_content() {
  const is_id = get_id();
  if (is_id != 0) {
    document.getElementById("courseid").value = is_id
  }
} 

export default function Home() {
    useEffect(() => {
      set_content();
    }, []);
    return (
      <div>
        
        <div className="flex justify-center items-center flex-col m-5">
          
          <div className="border-3 w-100 flex flex-col">

            <h1 className="text-3xl m-4">Register</h1>
            <input className="m-4 p-2" type="text" placeholder="First name" />
            <input className="m-4 p-2" type="text" placeholder="Last name" />
            <input className="m-4 p-2" type="email" placeholder="Email" />
            <input className="m-4 p-2" type="password" placeholder="Phone" />
            <input className="m-4 p-2" type="text" placeholder="CourseID" id="courseid"/>
            <input className="m-4 p-2" type="date" placeholder="DOB" />

            <button className="bg-[#143c71] text-white p-2 m-4 rounded hover:translate-y-1 hover:cursor-pointer" onClick={() => { window.location.href = "/register" }}>Register</button>

          </div>

        </div>


      </div>
    )
  }
  