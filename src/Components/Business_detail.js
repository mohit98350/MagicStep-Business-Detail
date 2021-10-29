import React from 'react';
import { useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { BsCameraFill,BsHouseDoor,BsGeoAlt } from 'react-icons/bs';
import {BiStreetView} from 'react-icons/bi'

const Business_detail = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [ProimagePreview, setProImagePreview] = useState("");

  const fileHandle = e => {
    const reader = new FileReader();           // babel javascript class
    reader.onloadend = () => {
      setImagePreview(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }
  const ProfileHandle = e => {
    const reader = new FileReader();           // babel javascript class
    reader.onloadend = () => {
      setProImagePreview(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }
  return (
    <div>
      <section className="business ">
        <div className="container">
          <div className="cover-img border m-auto position-relative">
            <div className="imagePreview">
              {imagePreview ? <img src={imagePreview} /> : ''}
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <h4 className="text" varient="secondary"><b>Add Cover Image </b></h4>
              <label className="cover-icon position-relative" for="cover-pic">
                <BsCameraFill size={30} />
              </label>
              <input className="d-none" type="file" name="file" id="cover-pic" onChange={fileHandle} />

            </div>

            <div className="description border m-auto bg-white extra-desk-view position-absolute">

              <div className="upload-profile-img border border-white position-absolute ">
                <div className="proimagePreview">
                  {ProimagePreview ? <img src={ProimagePreview} /> : ''}
                </div>
                <h5 style={{ padding: 10 }} varient="secondary" ><b>Add Profile Image/Logo</b></h5>
                <label className="pro-icon position-absolute" for="profile-pic" >
                  <BsCameraFill size={20} />
                </label>
                <input className="d-none" type="file" name="file" id="profile-pic" onChange={ProfileHandle} />
              </div>
              <Form >
                <Form.Group className="mb-2 mt-5" controlId="">
                  <br />
                  <Form.Text className="text-muted">
                    <h4>Business Details</h4>
                  </Form.Text>
                  <Form.Control as="select" className="input-select">
                    <option>Type of business</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <br />
                  <Form.Control as="select" className="input-select">
                    <option>Choose Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <br />
                  <Form.Text className="text-muted">
                    <h4>Business Address</h4>
                  </Form.Text>
                  <Form.Control as="select" className="input-select">
                    <option>Select Country</option>
                    <option value="1">India</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Nepal</option>
                  </Form.Control>
                  <br />
                  <Form.Control as="select" className="input-select">
                    <option>Select State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <br />
                  <Form.Control as="select" className="input-select" >
                    <option>Select City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <br />
                  <Form.Text className="text-muted">
                    <h4>Pickup Address</h4>
                  </Form.Text>

                  <InputGroup >

                    <FormControl
                      type="text"
                      placeholder="House/Building Name"
                      style={{ paddingLeft: '40px' }}
                      className="light-text"
                    />
                    <div className="Icon">
                    <BsHouseDoor/>
                     
                    </div>

                  </InputGroup>

                  <br />
                  <InputGroup >

                    <FormControl
                      type="text"
                      placeholder="Street"
                      style={{ paddingLeft: '40px' }}
                      className="light-text"
                    />
                    <div className="Icon">
                    <BiStreetView/>
                    </div>

                  </InputGroup>
                  <br />
                  <InputGroup >

                    <FormControl
                      type="text"
                      placeholder="Pincode/Zipcode"
                      style={{ paddingLeft: '40px' }}
                      className="light-text"
                    />
                    <div className="Icon">
                   <BsGeoAlt/>


                    </div>

                  </InputGroup>
                  
                </Form.Group>
                

              </Form>
             < div class="icon float-right form-group">
                  <h3><button style={{ border: 'none', background: 'transparent' }}><i class="fa fa-arrow-right bg-success text-white pl-3 pr-3 pt-3 pb-3 mt-2 rounded-circle" aria-hidden="true"></i></button></h3>
                </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Business_detail

