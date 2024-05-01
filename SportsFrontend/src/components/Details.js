import React, { useState } from "react";
import axios from "axios";

export default function Details() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/query/contactus",
        formData
      );

      if (response.status === 200) {
        console.log("Form submitted successfully");
        // Handle success, maybe show a success message
      } else {
        console.error("Form submission failed");
        // Handle error, maybe show an error message
      }
    } catch (error) {
      console.error("An error occurred during form submission", error);
      // Handle error, maybe show an error message
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="mt-5">
      <section className="details py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-center text-md-start">
                <h3>For More Information</h3>
                <p>Please leave your contact details, we'll get back to you.</p>
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Your Phone"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="email" placeholder="Your Email" required/>
          </div>
          <div class="mb-3">
            <input type="tel" class="form-control" id="phoneNumber" placeholder="Your Phone" required/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
          </div>
          <button id='details-submit' type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      </section>
    </div>
  );
}
