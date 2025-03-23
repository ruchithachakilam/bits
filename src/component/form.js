// // import React, { useState } from 'react';
// // import { Form, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
// // import ApiCaller from './apicaller.js';
// // import '../App.css';

// // export function Myform() {
// //   const clearContainer = () => {
// //     setImageUrls([]);
// //   };
// //   const [formData, setFormData] = useState({
// //     prompts: [],
// //   });

// //   /*Speech bubble texts array*/
// //   const speechBubbleTexts = [
// //     "Wow!",
// //     "Hurray!",
// //     "This is awesome! ",
// //     "Hey!",
// //     "I am good",
// //     "Bang",
// //     "Arhhhh!",
// //     "Looks amazing",
// //     "Good Work Nik!",
// //     "Dashtoon is Amazing!"
// //   ];

// //   // Declare and initialize Arrays
// //   const [imageUrls, setImageUrls] = useState([]);


// //   /*========================================================
// //   Function:: handleChange
// //   Use:: This function is used for taking input prompt values 
// //         and adding it to a list/array to be sent to apicaller.js 
// //         to be processed one by one.
// //   ==========================================================*/

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     // If the input name is 'prompts[index]', update the corresponding index in the array
// //     if (name.startsWith('prompts[') && name.endsWith(']')) {

// //       const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);

// //       setFormData((prevFormData) => {
// //         const updatedPrompts = [...prevFormData.prompts];
// //         updatedPrompts[index] = value;
// //         return {
// //           ...prevFormData,
// //           prompts: updatedPrompts,
// //         };
// //       });
// //     } else {
// //       // If it's not a prompts[index] input, update the value directly
// //       setFormData((prevFormData) => ({
// //         ...prevFormData,
// //         [name]: value,
// //       }));
// //     }
// //   };


// //   /*========================================================
// //     Function:: handleApiSuccess
// //     Use:: This function convert response blob packet received to URL Image URL 
// //           so that, it can be displayed to user on UI.
// //           In case error occurs, it gives feedback to user.
// //     ==========================================================*/

// //   const handleApiSuccess = async (responseBlob) => {
// //     try {
// //       // Check if the response is an image
// //       if (responseBlob.type.startsWith('image/')) {
// //         // If it's an image, create a URL for the blob and set it in the array
// //         const imageUrl = URL.createObjectURL(responseBlob);
// //         setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
// //         // Show a pop-up (e.g., using alert, or you can use your modal here)
// //       } else {
// //         // If it's not an image, handle it accordingly
// //         console.warn('Received data is not an image.');
// //         alert('Data Received from API is not an Image.');
// //       }
// //     } catch (error) {
// //       console.error('Error handling image response:', error);
// //     }
// //   };


// //   /*========================================================
// //   Function:: handleApiError
// //   Use:: This function Handled Error received from API.
// //   ==========================================================*/

// //   const handleApiError = (error) => {
// //     // Handle the API call error
// //     console.error('Error calling API:', error);
// //   };

// //   return (
// //     <>
// //       <div class="main-form-container">
// //         <Row >
// //           {/* Form Container on the Left */}
// //           <Col className="prompt-col" md={3}>
// //             <Form>
// //             <h5 className='prompt-title'>Describe your Comic Sequence</h5>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[0]"
// //                       value={formData.prompts[0]}
// //                       placeholder='Prompt 1'
// //                       onChange={handleChange}
// //                       style={{ width: '100%' }}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[1]"
// //                       value={formData.prompts[1]}
// //                       placeholder='Prompt 2'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[2]"
// //                       value={formData.prompts[2]}
// //                       placeholder='Prompt 3'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[3]"
// //                       value={formData.prompts[3]}
// //                       placeholder='Prompt 4'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[4]"
// //                       value={formData.prompts[4]}
// //                       placeholder='Prompt 5'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[5]"
// //                       value={formData.prompts[5]}
// //                       placeholder='Prompt 6'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[6]"
// //                       value={formData.prompts[6]}
// //                       placeholder='Prompt 7'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[7]"
// //                       value={formData.prompts[7]}
// //                       placeholder='Prompt 8'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[8]"
// //                       value={formData.prompts[8]}
// //                       placeholder='Prompt 9'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className="mb-2 mx-3">
// //                   <Col>
// //                     <Form.Control
// //                       required
// //                       type="text"
// //                       name="prompts[9]"
// //                       value={formData.prompts[9]}
// //                       placeholder='Prompt 10'
// //                       onChange={handleChange}
// //                     />
// //                   </Col>
// //                 </Row>
// //                 <Row className='submitButton'>
// //                   <ApiCaller
// //                     data={formData}
// //                     onSuccess={handleApiSuccess}
// //                     onError={handleApiError}
// //                     clear={clearContainer}
// //                   />
// //                 </Row>
// //             </Form>
// //           </Col>

// //           {/* Image Display Component on the Right */}
// //           <Col className="images-col" md={9}>
// //             <Row className="mb-4"></Row>
// //             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
// //             <Container style={{ border: "2px solid purple", minWidth: "400px", minHeight: "400px" }}>
// //               <div className="image-grid">
// //                 {imageUrls.map((imageUrl, index) => (
// //                   <div key={index} className="image-container">
// //                     <img
// //                       src={imageUrl}
// //                       alt={`API Response Image ${index + 1}`}
// //                       className="grid-image"
// //                     />
// //                     <div className="speech-bubble">
// //                       <p className="speech-text">{speechBubbleTexts[index]}</p>
// //                     </div>
// //                     <p className="image-label">Prompt: {index + 1}</p>
// //                     {console.log(formData.prompts)}
// //                   </div>
// //                 ))}
// //               </div>
// //             </Container>
// //             </div>
// //             <Row><h5 style={{ marginBottom: '25px' , marginLeft:'20px'}} class='frame-title'>Comic Strip Frame</h5></Row>
// //           </Col>
// //         </Row>
// //       </div>
// //     </>
// //   );
// // }







// import React, { useState } from 'react';
// import { Form, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
// import ApiCaller from './apicaller'; // Make sure the import path matches your file structure
// import '../App.css';

// export function Myform() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     prompts: Array(10).fill(''),
//   });

//   /*Speech bubble texts array*/
//   const speechBubbleTexts = [
//     "Wow!",
//     "Hurray!",
//     "This is awesome!",
//     "Hey!",
//     "I am good",
//     "Bang",
//     "Arhhhh!",
//     "Looks amazing",
//     "Good Work!",
//     "Dashtoon is Amazing!"
//   ];

//   // Declare and initialize Arrays
//   const [imageUrls, setImageUrls] = useState([]);
//   const [error, setError] = useState(null);

//   const clearContainer = () => {
//     setImageUrls([]);
//     setError(null);
//     setLoading(true);
//   };

//   /*========================================================
//   Function:: handleChange
//   Use:: This function is used for taking input prompt values 
//         and adding it to a list/array to be sent to ApiCaller.js 
//         to be processed one by one.
//   ==========================================================*/
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // If the input name is 'prompts[index]', update the corresponding index in the array
//     if (name.startsWith('prompts[') && name.endsWith(']')) {
//       const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);

//       setFormData((prevFormData) => {
//         const updatedPrompts = [...prevFormData.prompts];
//         updatedPrompts[index] = value;
//         return {
//           ...prevFormData,
//           prompts: updatedPrompts,
//         };
//       });
//     } else {
//       // If it's not a prompts[index] input, update the value directly
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value,
//       }));
//     }
//   };

//   /*========================================================
//     Function:: handleApiSuccess
//     Use:: This function convert response blob packet received to URL Image URL 
//           so that, it can be displayed to user on UI.
//           In case error occurs, it gives feedback to user.
//     ==========================================================*/
//   const handleApiSuccess = async (responseBlob) => {
//     try {
//       // Check if the response is an image
//       if (responseBlob.type.startsWith('image/')) {
//         // If it's an image, create a URL for the blob and set it in the array
//         const imageUrl = URL.createObjectURL(responseBlob);
//         setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
        
//         // Once all images are loaded, set loading to false
//         if (imageUrls.length === formData.prompts.filter(Boolean).length - 1) {
//           setLoading(false);
//         }
//       } else {
//         // If it's not an image, handle it accordingly
//         console.warn('Received data is not an image.');
//         setError('Data Received from API is not an Image.');
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error('Error handling image response:', error);
//       setLoading(false);
//     }
//   };

//   /*========================================================
//   Function:: handleApiError
//   Use:: This function Handled Error received from API.
//   ==========================================================*/
//   const handleApiError = (error) => {
//     // Handle the API call error
//     console.error('Error calling API:', error);
//     setError(`Error generating images: ${error.message}`);
//     setLoading(false);
//   };

//   // Direct button click handler if ApiCaller component isn't working
//   const handleGenerateClick = () => {
//     // You can implement the API calling logic directly here if needed
//     console.log("Generate button clicked!");
    
//     // For testing, we'll just call the clearContainer function
//     clearContainer();
    
//     // Here you would normally call your API
//     // ...
//   };

//   return (
//     <>
//       <div className="main-form-container">
//         <Row>
//           {/* Form Container on the Left */}
//           <Col className="prompt-col" md={3}>
//             <Form>
//               <h5 className='prompt-title'>Describe your Comic Sequence</h5>
//               {Array.from({ length: 10 }).map((_, index) => (
//                 <Row className="mb-2 mx-3" key={index}>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       name={`prompts[${index}]`}
//                       value={formData.prompts[index] || ''}
//                       placeholder={`Prompt ${index + 1}`}
//                       onChange={handleChange}
//                       style={{ width: '100%' }}
//                     />
//                   </Col>
//                 </Row>
//               ))}
              
//               {/* First approach: using ApiCaller component */}
//               <Row className='submitButton'>
//                 <ApiCaller
//                   data={formData}
//                   onSuccess={handleApiSuccess}
//                   onError={handleApiError}
//                   clear={clearContainer}
//                 />
//               </Row>
              
//               {/* Fallback button if the ApiCaller component isn't rendering properly */}
//               <Row className='submitButton mt-3'>
//                 <Button
//                   variant="primary"
//                   type="button"
//                   className="custom-button"
//                   style={{
//                     display: 'block',
//                     width: '70%',
//                     margin: 'auto',
//                     backgroundColor: '#6a1b9a',
//                     borderColor: '#6a1b9a'
//                   }}
//                   onClick={handleGenerateClick}
//                   disabled={loading}
//                 >
//                   {loading ? 'Generating...' : 'Generate It (Fallback)'}
//                 </Button>
//               </Row>
//             </Form>
//           </Col>

//           {/* Image Display Component on the Right */}
//           <Col className="images-col" md={9}>
//             <Row className="mb-4"></Row>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
//               <Container style={{ border: "2px solid purple", minWidth: "400px", minHeight: "400px", position: "relative" }}>
//                 {loading && (
//                   <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.7)" }}>
//                     <div className="text-center">
//                       <Spinner animation="border" variant="primary" />
//                       <p className="mt-2">Generating your comic strip...</p>
//                     </div>
//                   </div>
//                 )}
                
//                 {error && (
//                   <div className="alert alert-danger m-3">{error}</div>
//                 )}
                
//                 <div className="image-grid">
//                   {imageUrls.map((imageUrl, index) => (
//                     <div key={index} className="image-container">
//                       <img
//                         src={imageUrl}
//                         alt={`API Response Image ${index + 1}`}
//                         className="grid-image"
//                       />
//                       <div className="speech-bubble">
//                         <p className="speech-text">{speechBubbleTexts[index % speechBubbleTexts.length]}</p>
//                       </div>
//                       <p className="image-label">Prompt: {formData.prompts[index]}</p>
//                     </div>
//                   ))}
//                 </div>
//               </Container>
//             </div>
//             <Row><h5 style={{ marginBottom: '25px', marginLeft:'20px'}} className='frame-title'>Comic Strip Frame</h5></Row>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import ApiCaller from './apicaller';
import '../App.css';

export function Myform() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    prompts: Array(10).fill(''),
  });

  const speechBubbleTexts = [
    "Wow!",
    "Hurray!",
    "This is awesome!",
    "Hey!",
    "I am good",
    "Bang",
    "Arhhhh!",
    "Looks amazing",
    "Good Work!",
    "Dashtoon is Amazing!"
  ];

  const [imageUrls, setImageUrls] = useState([]);
  const [error, setError] = useState(null);

  const clearContainer = () => {
    setImageUrls([]);
    setError(null);
    setLoading(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('prompts[') && name.endsWith(']')) {
      const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);
      setFormData((prevFormData) => {
        const updatedPrompts = [...prevFormData.prompts];
        updatedPrompts[index] = value;
        return { ...prevFormData, prompts: updatedPrompts };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleApiSuccess = async (responseBlob) => {
    try {
      if (responseBlob.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(responseBlob);
        setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
      } else {
        console.warn('Received data is not an image.');
        setError('Data received from API is not an image.');
      }
    } catch (error) {
      console.error('Error handling image response:', error);
      setError('Error processing image response.');
    } finally {
      const expectedImages = formData.prompts.filter(Boolean).length;
      setLoading((prev) => imageUrls.length + 1 < expectedImages);
    }
  };

  const handleApiError = (error) => {
    console.error('Error calling API:', error);
    setError(`Error generating images: ${error.message}`);
    setLoading(false);
  };

  return (
    <>
      <div className="main-form-container">
        <Row>
          <Col className="prompt-col" md={3}>
            <Form>
              <h5 className="prompt-title">Describe your Comic Sequence</h5>
              {Array.from({ length: 10 }).map((_, index) => (
                <Row className="mb-2 mx-3" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name={`prompts[${index}]`}
                      value={formData.prompts[index] || ''}
                      placeholder={`Prompt ${index + 1}`}
                      onChange={handleChange}
                      style={{ width: '100%' }}
                    />
                  </Col>
                </Row>
              ))}
              <Row className="submitButton">
                <ApiCaller
                  data={formData}
                  onSuccess={handleApiSuccess}
                  onError={handleApiError}
                  clear={clearContainer}
                />
              </Row>
            </Form>
          </Col>

          <Col className="images-col" md={9}>
            <Row className="mb-4"></Row>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
              <Container style={{ border: "2px solid purple", minWidth: "400px", minHeight: "400px", position: "relative" }}>
                {loading && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.7)" }}>
                    <div className="text-center">
                      <Spinner animation="border" variant="primary" />
                      <p className="mt-2">Generating your comic strip...</p>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger m-3">{error}</div>
                )}
                <div className="image-grid">
                  {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="image-container">
                      <img
                        src={imageUrl}
                        alt={`API Response Image ${index + 1}`}
                        className="grid-image"
                      />
                      <div className="speech-bubble">
                        <p className="speech-text">{speechBubbleTexts[index % speechBubbleTexts.length]}</p>
                      </div>
                      <p className="image-label">Prompt: {formData.prompts[index]}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </div>
            <Row><h5 style={{ marginBottom: '25px', marginLeft: '20px' }} className="frame-title">Comic Strip Frame</h5></Row>
          </Col>
        </Row>
      </div>
    </>
  );
}