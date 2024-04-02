import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Form } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';

const ContactForm = ({ subject }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    contactNo: '',
    email: '',
    city: '',
    indosNo: '',
    subject: subject,
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const isBlank = (str) => {
    return !str.trim();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // if (isBlank(formData.firstname) || isBlank(formData.contactNo) || isBlank(formData.email) || isBlank(formData.city) || isBlank(formData.indosNo)) {
    //   setError('Please fill in all required fields.');
    //   setIsSubmitting(false);
    //   return;
    // }

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      if (file) {
        formDataToSend.append('resume', file);
      }

      const response = await axios.post('https://beta.nautilusshipping.com/wp-json/contact-form-7/v1/contact-forms/9373/feedback',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      console.log(response)
      if (response.data.status === 'mail_sent') {
        setFormVisible(false); // Hide the form
        setSuccessMessage(true);
      } else if (response.data.status == 'validation_failed') {
        const fieldErrors = {};
        const { status, invalid_fields } = response.data;
        invalid_fields.forEach((field) => {
            fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
        //console.log(fieldErrors);
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
    {successMessage ? '' : (<h3>Submit a CV/Resume:</h3>)}              
    <div className="form-bg mb-5">
      {formVisible ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Col>
              <div className="mb-3">
                <input type="text" name="firstname" className={`form-control ${errors && errors.firstname ? 'is-invalid' : ''}`} placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                {errors && errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <input type="text" name="contactNo" className={`form-control ${errors && errors.contactNo ? 'is-invalid' : ''}`} placeholder="Contact No" value={formData.contactNo} onChange={handleChange} />
                {errors && errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <input type="email" name="email" className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`} placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors && errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <input type="text" name="city" className={`form-control ${errors && errors.city ? 'is-invalid' : ''}`} placeholder="City" value={formData.city} onChange={handleChange} />
                {errors && errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <input type="text" name="indosNo" className={`form-control ${errors && errors.indosNo ? 'is-invalid' : ''}`} placeholder="Indos no" value={formData.indosNo} onChange={handleChange} />
                {errors && errors.indosNo && <div className="invalid-feedback">{errors.indosNo}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" onChange={handleFileChange} className="custom-file-input"/>
              </Form.Group>
              <p style={{lineHeight:'16px',fontSize:'12px'}}>Make completing your job application easier by uploading your resume or CV. Upload either DOC, DOCX, PDF, RTF or TXT file types 4 MB max</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <button type="submit" className="btn btn-primary register" disabled={isSubmitting}>
                Submit
                {isSubmitting && (
                  <RotatingLines strokeColor="white" strokeWidth="3" animationDuration="1" width="20" visible={true} />
                )}
              </button>
            </Col>
          </Row>
          {/* {error && <p className="error">{error}</p>} */}
        </form>
      ) : (
        <div className="mt-5 text-center mb-5">
          <h3 className="fs-4">Thank you for your interest in Nautilus Shipping.</h3>
          <h3 className="fs-4">We will get in touch with you as soon as possible.</h3>
        </div>
      )}
    </div>
    </>
  );
};

export default ContactForm;