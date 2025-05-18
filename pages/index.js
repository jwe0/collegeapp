export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl ">IT courses we provide.</h1>

      <div className="flex gap-x-4 justify-center">

        <div className="border-3 w-1/4 rounded m-4 flex flex-col justify-center items-center">
          <img className="w-70 m-4 rounded border-2" src="51654883994_40cc7bdae0_k.jpg"></img>
          <h1>Level 2 IT intermediate</h1>
          <p className="m-4">This course is perfect for people interested in gaining a fundamental understanding of the IT field.</p>
          <h2 className="m-4 text-2 underline">What we provide</h2>
          <ul>
            <li>Programming experience</li>
            <li>Website design</li>
            <li>Social media management</li>
          </ul>
          <p className="m-4">Course ID: 1</p>
          <button className="bg-[#143c71] text-white p-2 m-4 rounded hover:translate-y-1 hover:cursor-pointer" onClick={() => { window.location.href = "/register?id=1" }}>Register</button>
        </div>

        <div className="border-3 w-1/4 rounded m-4 flex flex-col justify-center items-center">
          <img className="w-70 m-4 rounded border-2" src="rsz__50a3308-1.jpg"></img>
          <h1>Level 3 T Level</h1>
          <p className="m-4">This course is the next step after the Level 2 and is made for people that are serious about getting into the IT field.</p>
          <h2 className="m-4 text-2 underline">What we provide</h2>
          <ul>
            <li>Detailed and in depth programming experience</li>
            <li>Website design</li>
            <li>Networking experience</li>
            <li>Real world work experience in a real IT company</li>
          </ul>
          <p className="m-4">Course ID: 2</p>
          <button className="bg-[#143c71] text-white p-2 m-4 rounded hover:translate-y-1 hover:cursor-pointer" onClick={() => { window.location.href = "/register?id=2" }}>Register</button>
        </div>

      </div>



    </div>
  );
}
