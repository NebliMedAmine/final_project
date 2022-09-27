

const Contact=()=>{
    function myFunction() {
        alert("Your message has been sent");
      }
    
 return(
    <div className=".card">
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>Contact Us</h3></div>
        <div className="card-body">
        <form action="/"  encType="multipart/form-data" autoComplete="off">
        <div className="form-group">
          <label className="mb-0">Your name<span className="text-danger">*</span></label>
          <input name="name" type="text" className="form-control" placeholder="Name" />
          </div><br/>
          <div className="form-group">
          <label className="mb-0">Your email<span className="text-danger">*</span></label>
          <input name="email" type="email" className="form-control" placeholder="Email"  />
          </div><br/>
          <div className="form-group">
          <label className="mb-0">Your contact number (Optional)</label>
          <input name="contact" type="text" className="form-control" placeholder="Contact"   /><br/>
          <div className="form-group">
          <label className="mb-0">Message<span className="text-danger">*</span></label>
          <textarea name="message" type="text" className="form-control" placeholder="Message"/><br/>
          
          </div>
        </div>
        </form>
        <p className="text-center mb-0"><button onClick={myFunction} className="btn btn-primary btn-lg w-100 text-uppercase">Submit</button></p>
        </div>
    </div>
    </div>
)}
export default Contact