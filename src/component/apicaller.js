// // import React from 'react';
// // import { Button } from 'react-bootstrap';

// // /*========================================================
// //   Function:: query
// //   Use:: This function sends a prompt to Hugging Face API 
// //         and returns the generated image as a blob.
// //   ==========================================================*/

// // async function query(data) {
// //   const response = await fetch(
// //     "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
// //     {
// //       headers: {
// //         "Accept": "image/png",
// //         "Authorization": "Bearer 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",
// //         "Content-Type": "application/json",
// //       },
// //       method: "POST",
// //       body: JSON.stringify(data),
// //     }
// //   );
// //   const result = await response.blob();
// //   return result;
// // }

// // /*=========================================================
// //   Component:: ApiCaller
// //   Use:: Calls the API for each prompt in a loop and returns
// //         the result to onSuccess or onError callbacks.
// //   ==========================================================*/

// // export default function ApiCaller({ data, onSuccess, onError, clear }) {

// //   const handleApiCall = async () => {
// //     try {
// //       clear();
// //       if (data && data.prompts) {
// //         for (const prompt of data.prompts) {
// //           console.log(`Prompt: ${prompt}`);
// //           const result = await query({ inputs: prompt });
// //           console.log(`Image Size: ${result.size}`);
          
// //           if (result.size === 842) {
// //             alert('API responded with a blank image.');
// //           }

// //           onSuccess(result);
// //         }
// //       } else {
// //         console.error('Missing prompts property in data.');
// //       }
// //     } catch (error) {
// //       console.error('Error during API call:', error);
// //       onError(error);
// //     }
// //   };

// //   return (
// //     <Button
// //       variant="outline-light"
// //       type="button"
// //       className="custom-button"
// //       style={{
// //         display: 'block',
// //         width: '70%',
// //         margin: 'auto',
// //       }}
// //       onClick={handleApiCall}
// //     >
// //       Generate It
// //     </Button>
// //   );
// // }




























// // import React from 'react';
// // import { Button } from 'react-bootstrap';

// // /*========================================================
// //   Function:: query
// //   Use:: This function sends a prompt to Hugging Face API 
// //         and returns the generated image as a blob.
// //   ==========================================================*/

// // async function query(data) {
// //   const response = await fetch(
// //     "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
// //     {
// //       headers: {
// //         "Accept": "image/png",
// //         "Authorization": "Bearer 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", // You should use environment variables for this in production
// //         "Content-Type": "application/json",
// //       },
// //       method: "POST",
// //       body: JSON.stringify(data),
// //     }
// //   );
  
// //   if (!response.ok) {
// //     throw new Error(`API request failed with status ${response.status}`);
// //   }
  
// //   const result = await response.blob();
// //   return result;
// // }

// // /*=========================================================
// //   Component:: ApiCaller
// //   Use:: Calls the API for each prompt in a loop and returns
// //         the result to onSuccess or onError callbacks.
// //   ==========================================================*/

// // export default function ApiCaller({ data, onSuccess, onError, clear }) {
// //   const [isLoading, setIsLoading] = React.useState(false);

// //   const handleApiCall = async () => {
// //     try {
// //       // Check if there are any prompts entered
// //       if (!data || !data.prompts || data.prompts.filter(Boolean).length === 0) {
// //         alert('Please enter at least one prompt to generate images.');
// //         return;
// //       }

// //       setIsLoading(true);
// //       clear();

// //       // Process each prompt that has content
// //       for (let i = 0; i < data.prompts.length; i++) {
// //         const prompt = data.prompts[i];
        
// //         // Skip empty prompts
// //         if (!prompt) continue;
        
// //         console.log(`Generating image for prompt ${i+1}: ${prompt}`);
        
// //         // Enhance the prompt for better comic-style images
// //         const enhancedPrompt = `comic style illustration of ${prompt}, high quality, detailed, vibrant colors`;
        
// //         const result = await query({ inputs: enhancedPrompt });
        
// //         // Check if we got a valid image (size check is a simple way to detect blank or error images)
// //         if (result.size < 1000) {
// //           console.warn(`Warning: Image size is small (${result.size} bytes), might be an error response`);
// //           onError(new Error(`Failed to generate image for prompt ${i+1}`));
// //           continue;
// //         }
        
// //         await onSuccess(result);
// //       }
// //     } catch (error) {
// //       console.error('Error during API call:', error);
// //       onError(error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <Button
// //       variant="outline-light"
// //       type="button"
// //       className="custom-button"
// //       style={{
// //         display: 'block',
// //         width: '70%',
// //         margin: 'auto',
// //       }}
// //       onClick={handleApiCall}
// //       disabled={isLoading}
// //     >
// //       {isLoading ? 'Generating...' : 'Generate It'}
// //     </Button>
// //   );
// // }
// import React from 'react';
// import { Button } from 'react-bootstrap';

// /*========================================================
//   Function:: query
//   Use:: This function sends a prompt to Hugging Face API 
//         and returns the generated image as a blob.
//   ==========================================================*/

// async function query(data) {
//   const response = await fetch(
//     "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
//     {
//       headers: {
//         "Accept": "image/png",
//         "Authorization": "Bearer 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", // You should use environment variables for this in production
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   );
  
//   if (!response.ok) {
//     throw new Error(`API request failed with status ${response.status}`);
//   }
  
//   const result = await response.blob();
//   return result;
// }

// /*=========================================================
//   Component:: ApiCaller
//   Use:: Calls the API for each prompt in a loop and returns
//         the result to onSuccess or onError callbacks.
//   ==========================================================*/

// export default function ApiCaller({ data, onSuccess, onError, clear }) {
//   const [isLoading, setIsLoading] = React.useState(false);

//   const handleApiCall = async () => {
//     try {
//       // Check if there are any prompts entered
//       if (!data || !data.prompts || data.prompts.filter(Boolean).length === 0) {
//         alert('Please enter at least one prompt to generate images.');
//         return;
//       }

//       setIsLoading(true);
//       clear();

//       // Process each prompt that has content
//       for (let i = 0; i < data.prompts.length; i++) {
//         const prompt = data.prompts[i];
        
//         // Skip empty prompts
//         if (!prompt) continue;
        
//         console.log(`Generating image for prompt ${i+1}: ${prompt}`);
        
//         // Enhance the prompt for better comic-style images
//         const enhancedPrompt = `comic style illustration of ${prompt}, high quality, detailed, vibrant colors`;
        
//         const result = await query({ inputs: enhancedPrompt });
        
//         // Check if we got a valid image (size check is a simple way to detect blank or error images)
//         if (result.size < 1000) {
//           console.warn(`Warning: Image size is small (${result.size} bytes), might be an error response`);
//           onError(new Error(`Failed to generate image for prompt ${i+1}`));
//           continue;
//         }
        
//         await onSuccess(result);
//       }
//     } catch (error) {
//       console.error('Error during API call:', error);
//       onError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Button
//       variant="outline-light"
//       type="button"
//       className="custom-button"
//       style={{
//         display: 'block',
//         width: '70%',
//         margin: 'auto',
//       }}
//       onClick={handleApiCall}
//       disabled={isLoading}
//     >
//       {isLoading ? 'Generating...' : 'Generate It'}
//     </Button>
//   );
// }
import React from 'react';
import { Button } from 'react-bootstrap';


/*========================================================
  Function:: query
  Use:: This function sends a prompt to the Hugging Face API 
        using Flux.1 [schnell] and returns the generated image as a blob.
=========================================================*/
async function query(data) {
  const apiUrl = process.env.REACT_APP_API_URL || "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnellthis";
  const apiKey = process.env.REACT_APP_HF_API_KEY || "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";

  console.log("Using API URL:", apiUrl);
  console.log("Using API KEY:", apiKey.substring(0, 10) + '...');

  const response = await fetch(apiUrl, {
    headers: {
      "Accept": "image/png",
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API request failed with status ${response.status}: ${errorText}`);
  }

  const result = await response.blob();
  return result;
}



/*=========================================================
  Component:: ApiCaller
  Use:: Calls the API for each prompt in a loop and returns
        the result to onSuccess or onError callbacks.
=========================================================*/
export default function ApiCaller({ data, onSuccess, onError, clear }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleApiCall = async () => {
    try {
      // Check if there are any prompts entered
      if (!data || !data.prompts || data.prompts.filter(Boolean).length === 0) {
        alert('Please enter at least one prompt to generate images.');
        return;
      }

      setIsLoading(true);
      clear();

      // Process each prompt that has content
      for (let i = 0; i < data.prompts.length; i++) {
        const prompt = data.prompts[i];
        
        // Skip empty prompts
        if (!prompt) continue;
        
        console.log(`Generating image for prompt ${i + 1}: ${prompt}`);
        
        // Enhance the prompt for better comic-style images with Flux
        const enhancedPrompt = `comic style illustration of ${prompt}, high quality, detailed, vibrant colors`;
        
        const result = await query({ inputs: enhancedPrompt });
        
        // Check if we got a valid image (size check for error detection)
        if (result.size < 1000) {
          console.warn(`Warning: Image size is small (${result.size} bytes), might be an error response`);
          onError(new Error(`Failed to generate image for prompt ${i + 1}`));
          continue;
        }
        
        await onSuccess(result);
      }
    } catch (error) {
      console.error('Error during API call:', error);
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline-light"
      type="button"
      className="custom-button"
      style={{
        display: 'block',
        width: '70%',
        margin: 'auto',
      }}
      onClick={handleApiCall}
      disabled={isLoading}
    >
      {isLoading ? 'Generating...' : 'Generate It'}
    </Button>
  );
}