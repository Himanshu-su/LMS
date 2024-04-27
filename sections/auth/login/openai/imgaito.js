import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import OpenAI from "openai";



export const Imgaauto = () => {
 
const openai=new OpenAI({
    apiKey: "sk-proj-Wzce53IiSsUNabONVOrLT3BlbkFJKNruLPKqjxlIjpMRxuaF ",
    dangerouslyAllowBrowser: true
})


  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [responseError, setResponseError] = useState(null);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Clear any previous error message
    setResponseError(null);
  };

  const handleSubmit = async () => {
console.log(prompt)
    // try {
    //   const response = await axios.post(
    //     'https://api.openai.com/v1/images/generations',
        
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer sk-proj-rH99MtQXiTEEJuLWv9ydT3BlbkFJZJAwUfDmXYOUQ6r3EUQ5',
      
    //       },
    //       body:JSON.stringify({
    //         prompt,
    //         n:1,
    //         size:'512*512'
    //       })
    //     }
    //   );
    //   // Handle the response here
    //   console.log(response.data);
    // }
    // console.log(object)
    try{
      const response=await openai.images.generate({
        prompt:prompt,
        n:1,
        size:'512x512'
      })
      console.log(response.data.data[0].url)
    }
     catch (error) {
      console.error('Error generating image:', error);
      // Set the error message
      setResponseError(error.message);
    }
  
    handleClose(); // Close the dialog after submitting
  };

  return (
    <div>
      <h4 className='mb-4'>ImageAuto</h4>
      <Button onClick={handleOpen}>Add Post</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
        {/* Display the error message if any */}
        {responseError && <p style={{ color: 'red' }}>{responseError}</p>}
      </Dialog>
    </div>
  );
}
