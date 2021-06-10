import { useState } from "react";
import axios from "axios";

function App() {
  const [data,setData]=useState({
    name:'',
    title: '',
    email:'',
    message: ''})
  
  const [successMsg, setSuccessMsg] = useState();
  
  // taking the data value from the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  // sending the contact data to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.name, data.email, data.message);

    axios
      .post("http://localhost:8000/contact/email", data)
      .then((response) => {
        const successMsg = response.data;
        console.log(successMsg);
        setSuccessMsg(response.data);
      });

  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>contact</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {successMsg != null && (
                <h4>{successMsg}</h4>
              )}
              <form validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={data.name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        placeholder="Subject"
                        required
                        onChange={handleChange}
                        value={data.title}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={data.email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={data.message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default App;
