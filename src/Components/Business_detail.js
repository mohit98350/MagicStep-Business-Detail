import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import {BsFillArrowRightCircleFill,BsCameraFill } from 'react-icons/bs';

const Business_detail = () => {
  return (
    <div>
      <section className="business">
        <div className="container">

          <div className="cover-img border m-auto position-relative">

            <div className="d-flex justify-content-center mt-5 mb-5">
              <h4 varient="secondary"><b>Add Cover Image</b></h4>
                <label className="cover-icon" for="cover-pic">
               <BsCameraFill size={30}/>
                </label>
              <input className="d-none" type="file" name="file" id="cover-pic" />
            </div>



            <div className="description border m-auto bg-white extra-desk-view">

              <div className="upload-profile-img border border-white position-absolute">
                <h5 style={{padding:10}} varient="secondary" ><b>Add Profile Image/Logo</b></h5>
                  <label className="pro-icon" for="profile-pic" >
               <BsCameraFill size={20}/>
                </label>
                <input className="d-none" type="file" name="file" id="profile-pic" />
              </div>
              <Form>
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
                  <Form.Control as="select"className="input-select">
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
                  <Form.Control type="text" placeholder="House/Building Name" className="light-text" />
                  <br />
                  <Form.Control type="text" placeholder="Street" className="light-text" />
                  <br />

                  <Form.Control type="text" placeholder="Pincode/Zipcode" className="light-text" />
                </Form.Group>
                <div className="icon float-right">
                 
               <h3><Button variant="success" text-white style={{ border: 0 }}><BsFillArrowRightCircleFill size={30}/> </Button></h3> 
                </div>

              </Form>
            

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Business_detail

