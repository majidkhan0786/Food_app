import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Container, FormGroup, Label, Input } from "reactstrap";
import { Row, Col, Button, Form } from "reactstrap";
import { Fade } from "react-reveal";

// store
// import { loginCiamUser } from "store/actions";

//Component
// import LoaderAnimation from "component/Loader";

const Signin = () => {
  //   const dispatch = useDispatch();
  //   const { loading } = useSelector((state) => state.CiamAuth);
  const [showMFACodeField, setshowMFACodeField] = useState(false);
  const [loading, setloading] = useState(false);
  const [passwordEye, setpasswordEye] = useState(false);
  const [fields, setfields] = useState({
    email: "",
    password: "",
    mfaCode: "",
  });

  const handleChange = (name) => (evt) => {
    setfields((prevState) => ({
      ...prevState,
      [name]: evt.target.value,
    }));
  };

  const togglePasswordEye = () => {
    setpasswordEye((prevState) => !prevState);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (loading) return;
    // let data = {
    //   email: fields.email,
    //   password: fields.password,
    // };
    // const callback = (err, res) => {
    //   if (!!err) {
    //     console.log(err.message, "err.message");
    //     toast.error(err.message);
    //   } else {
    //     if (!!res?.hasMFAEnabled) {
    //       setshowMFACodeField(true);
    //     } else if (!!res?.setUpMFA) {
    //       navigate("/mfa-auth");
    //     } else {
    //       navigate("/home");
    //     }
    //   }
    // };
    // if (showMFACodeField) {
    //   data.mfaCode = fields.mfaCode;
    // }
    // dispatch(loginCiamUser(data, callback));
  };

  return (
    <section className="common_sign_main sign_in d-flex align-items-center justify-content-center">
      <Container fluid className="px-md-5">
        <div className="common_sign_inner">
          <Row className="justify-content-between">
            <Col lg={7} sm={12} className="">
              <Fade>
                <div className="right_gradient_part position-relative pe-lg-5">
                  <h2 className="heading_grand text-center">
                    Welcome back Outlaw!
                  </h2>

                  <div className="signingimg_bottom">
                    <video
                      className="w-100 img-fluid"
                      muted
                      autoPlay={"autoplay"}
                      preLoad="auto"
                      loop
                    >
                      <source
                        src="https://wild-admin-backend-v2.s3.amazonaws.com/usdc-cryptocurrency-golden-coin-falling-rain-loop-2021-09-17-17-43-02-utc.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://wild-admin-backend-v2.s3.amazonaws.com/usdc-cryptocurrency-golden-coin-falling-rain-loop-2021-09-17-17-43-02-utc.mov"
                        type="video/ogg"
                      />
                    </video>
                  </div>
                </div>
              </Fade>
            </Col>

            <Col lg={5} sm={12} className="">
              <Fade>
                <div className="left_form_part sign_in_right pe-lg-5 ">
                  <Form
                    autoComplete="new-password"
                    className="form_sign_inout pe-lg-5 pt-lg-3"
                    onSubmit={handleSubmit}
                  >
                    <Row className="mt-5 pt-lg-3">
                      {!showMFACodeField ? (
                        <>
                          <Col lg={12} sm={12}>
                            <FormGroup>
                              <Label>Email Address</Label>
                              <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={fields.email}
                                onChange={handleChange("email")}
                                required
                              />
                            </FormGroup>
                          </Col>

                          <Col lg={12} sm={12}>
                            <FormGroup className="position-relative">
                              <Label>Password</Label>
                              <div className="position-relative">
                                <Input
                                  type={passwordEye ? "text" : "password"}
                                  name="password"
                                  placeholder="Enter your keys to the kingdom"
                                  value={fields.password}
                                  onChange={handleChange("password")}
                                  required
                                />
                                <Button
                                  type="button"
                                  className="eye_btn"
                                  onClick={togglePasswordEye}
                                >
                                  {!passwordEye ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="12"
                                      viewBox="0 0 18 12"
                                      fill="none"
                                    >
                                      <path
                                        d="M1.60019 11.844C1.49348 11.7579 1.4277 11.6467 1.41333 11.5283C1.39895 11.4099 1.4369 11.2912 1.52105 11.1915L1.54743 11.1628L14.5392 0.887009C14.5549 0.875012 14.5682 0.861327 14.5788 0.846391C14.5957 0.833965 14.6106 0.820036 14.6232 0.804871L15.4492 0.152276C15.5109 0.103963 15.5846 0.0656439 15.6658 0.039492C15.747 0.01334 15.8342 -9.78845e-05 15.9223 5.36747e-07C16.0086 0.000163319 16.0939 0.0136589 16.1733 0.039661C16.2527 0.0656631 16.3246 0.103644 16.3845 0.151375C16.5118 0.249331 16.5833 0.382146 16.5833 0.5206C16.5833 0.659055 16.5118 0.791813 16.3845 0.889769L14.7864 2.15428C16.1636 3.1825 17.2415 4.42356 17.9489 5.79555C18.017 5.92713 18.017 6.07382 17.9489 6.2054C16.0651 9.67129 12.7202 11.7361 8.99712 11.7361H8.98759C7.27315 11.7221 5.60891 11.2892 4.23559 10.5001L2.53068 11.8477C2.47025 11.8958 2.3979 11.934 2.31788 11.9602C2.23786 11.9863 2.15188 11.9999 2.06492 12C1.97759 12.0004 1.89112 11.9868 1.81108 11.9599C1.73105 11.9331 1.65913 11.8935 1.60019 11.844ZM7.01624 8.2932C7.39492 8.49683 7.82273 8.64013 8.27458 8.7146C8.72644 8.78906 9.19313 8.79318 9.6471 8.72676C10.1011 8.66035 10.5332 8.52475 10.9179 8.32791C11.3026 8.13107 11.632 7.87698 11.8869 7.58067C12.2947 7.11312 12.5088 6.56154 12.5006 5.99864C12.5024 5.44368 12.2937 4.90032 11.9003 4.43504L10.9397 5.19563C11.1026 5.44475 11.1869 5.71983 11.1858 5.99864C11.1942 6.45114 10.9687 6.8877 10.5588 7.21251C10.1489 7.53732 9.58818 7.72379 8.99961 7.73108C8.64415 7.73269 8.29379 7.6661 7.9803 7.53729L7.01624 8.2932ZM0.0526815 6.2054C-0.0175605 6.07445 -0.0175605 5.92746 0.0526815 5.79651C1.93283 2.33523 5.2789 0.272272 8.99477 0.272272H9.00195C10.2561 0.274755 11.4912 0.508376 12.6038 0.953485L9.67187 3.2748C9.45115 3.24404 9.22743 3.22769 9.00312 3.2259C8.05791 3.2366 7.15702 3.5355 6.49845 4.05686C5.83988 4.57822 5.47765 5.27936 5.49145 6.00602C5.49334 6.18299 5.5137 6.35951 5.55256 6.53395L2.30147 9.10545C1.36372 8.23183 0.603452 7.25408 0.0466726 6.2054H0.0526815Z"
                                        fill="#FFD739"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      height="25px"
                                      version="1.1"
                                      viewBox="0 0 32 32"
                                      width="21px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <title />
                                      <desc />
                                      <defs />
                                      <g
                                        fill="none"
                                        fillRule="evenodd"
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth={1}
                                      >
                                        <g fill="#FFD739" id="icon-22-eye">
                                          <path
                                            d="M16,9 C7,9 3,16 3,16 C3,16 7,23.000001 16,23 C25,22.999999 29,16 29,16 C29,16 25,9 16,9 L16,9 L16,9 Z M16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 8,22.0000006 16,22 C24,21.999999 27.8000488,16 27.8000488,16 C27.8000488,16 24,10 16,10 L16,10 L16,10 Z M16,20 C18.2091391,20 20,18.2091391 20,16 C20,13.7908609 18.2091391,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,18.2091391 13.7908609,20 16,20 L16,20 L16,20 Z M16,19 C17.6568543,19 19,17.6568543 19,16 C19,14.3431457 17.6568543,13 16,13 C14.3431457,13 13,14.3431457 13,16 C13,17.6568543 14.3431457,19 16,19 L16,19 L16,19 Z M16,17 C16.5522848,17 17,16.5522848 17,16 C17,15.4477152 16.5522848,15 16,15 C15.4477152,15 15,15.4477152 15,16 C15,16.5522848 15.4477152,17 16,17 L16,17 L16,17 Z"
                                            id="eye"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  )}
                                </Button>
                              </div>
                            </FormGroup>
                          </Col>
                        </>
                      ) : (
                        <Fade>
                          <Col lg={12} sm={12}>
                            <FormGroup className="position-relative">
                              <Label>MFA code</Label>
                              <div className="position-relative">
                                <Input
                                  type={passwordEye ? "text" : "password"}
                                  name="password"
                                  placeholder="Enter MFA code"
                                  value={fields.mfaCode}
                                  onChange={handleChange("mfaCode")}
                                  required
                                />
                                <Button
                                  type="button"
                                  className="eye_btn"
                                  onClick={togglePasswordEye}
                                >
                                  {!passwordEye ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="12"
                                      viewBox="0 0 18 12"
                                      fill="none"
                                    >
                                      <path
                                        d="M1.60019 11.844C1.49348 11.7579 1.4277 11.6467 1.41333 11.5283C1.39895 11.4099 1.4369 11.2912 1.52105 11.1915L1.54743 11.1628L14.5392 0.887009C14.5549 0.875012 14.5682 0.861327 14.5788 0.846391C14.5957 0.833965 14.6106 0.820036 14.6232 0.804871L15.4492 0.152276C15.5109 0.103963 15.5846 0.0656439 15.6658 0.039492C15.747 0.01334 15.8342 -9.78845e-05 15.9223 5.36747e-07C16.0086 0.000163319 16.0939 0.0136589 16.1733 0.039661C16.2527 0.0656631 16.3246 0.103644 16.3845 0.151375C16.5118 0.249331 16.5833 0.382146 16.5833 0.5206C16.5833 0.659055 16.5118 0.791813 16.3845 0.889769L14.7864 2.15428C16.1636 3.1825 17.2415 4.42356 17.9489 5.79555C18.017 5.92713 18.017 6.07382 17.9489 6.2054C16.0651 9.67129 12.7202 11.7361 8.99712 11.7361H8.98759C7.27315 11.7221 5.60891 11.2892 4.23559 10.5001L2.53068 11.8477C2.47025 11.8958 2.3979 11.934 2.31788 11.9602C2.23786 11.9863 2.15188 11.9999 2.06492 12C1.97759 12.0004 1.89112 11.9868 1.81108 11.9599C1.73105 11.9331 1.65913 11.8935 1.60019 11.844ZM7.01624 8.2932C7.39492 8.49683 7.82273 8.64013 8.27458 8.7146C8.72644 8.78906 9.19313 8.79318 9.6471 8.72676C10.1011 8.66035 10.5332 8.52475 10.9179 8.32791C11.3026 8.13107 11.632 7.87698 11.8869 7.58067C12.2947 7.11312 12.5088 6.56154 12.5006 5.99864C12.5024 5.44368 12.2937 4.90032 11.9003 4.43504L10.9397 5.19563C11.1026 5.44475 11.1869 5.71983 11.1858 5.99864C11.1942 6.45114 10.9687 6.8877 10.5588 7.21251C10.1489 7.53732 9.58818 7.72379 8.99961 7.73108C8.64415 7.73269 8.29379 7.6661 7.9803 7.53729L7.01624 8.2932ZM0.0526815 6.2054C-0.0175605 6.07445 -0.0175605 5.92746 0.0526815 5.79651C1.93283 2.33523 5.2789 0.272272 8.99477 0.272272H9.00195C10.2561 0.274755 11.4912 0.508376 12.6038 0.953485L9.67187 3.2748C9.45115 3.24404 9.22743 3.22769 9.00312 3.2259C8.05791 3.2366 7.15702 3.5355 6.49845 4.05686C5.83988 4.57822 5.47765 5.27936 5.49145 6.00602C5.49334 6.18299 5.5137 6.35951 5.55256 6.53395L2.30147 9.10545C1.36372 8.23183 0.603452 7.25408 0.0466726 6.2054H0.0526815Z"
                                        fill="#FFD739"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      height="25px"
                                      version="1.1"
                                      viewBox="0 0 32 32"
                                      width="21px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <title />
                                      <desc />
                                      <defs />
                                      <g
                                        fill="none"
                                        fillRule="evenodd"
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth={1}
                                      >
                                        <g fill="#FFD739" id="icon-22-eye">
                                          <path
                                            d="M16,9 C7,9 3,16 3,16 C3,16 7,23.000001 16,23 C25,22.999999 29,16 29,16 C29,16 25,9 16,9 L16,9 L16,9 Z M16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 8,22.0000006 16,22 C24,21.999999 27.8000488,16 27.8000488,16 C27.8000488,16 24,10 16,10 L16,10 L16,10 Z M16,20 C18.2091391,20 20,18.2091391 20,16 C20,13.7908609 18.2091391,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,18.2091391 13.7908609,20 16,20 L16,20 L16,20 Z M16,19 C17.6568543,19 19,17.6568543 19,16 C19,14.3431457 17.6568543,13 16,13 C14.3431457,13 13,14.3431457 13,16 C13,17.6568543 14.3431457,19 16,19 L16,19 L16,19 Z M16,17 C16.5522848,17 17,16.5522848 17,16 C17,15.4477152 16.5522848,15 16,15 C15.4477152,15 15,15.4477152 15,16 C15,16.5522848 15.4477152,17 16,17 L16,17 L16,17 Z"
                                            id="eye"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  )}
                                </Button>
                              </div>
                            </FormGroup>
                          </Col>
                        </Fade>
                      )}
                    </Row>
                    {!showMFACodeField && (
                      <div className="remember_mer justify-content-end">
                        <p to="/forgot-password">Forgot password?</p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="btn_sign_in mx-auto w-100"
                    >
                      {
                        !loading
                          ? `${showMFACodeField ? "Submit" : "Login"} `
                          : "Animation Loader"
                        // <LoaderAnimation />
                      }
                    </Button>
                  </Form>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Signin;
