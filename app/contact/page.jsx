import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const page = () => {
  return (
    <>
      <div className="bg-transparent shadow-lg shadow-black h-[500px] m-4 p-8 flex justify-center">
        <div className="bg-amber-300 h-[400px] w-[30%] p-4">
          <h1 className="text-3xl text-center text-white p-2 m-2 font-bold">
            Let's Get In Touch
          </h1>
          <h3 className=" text-center text-white p-2 m-2">
            We are here to serve you better services...
          </h3>

          <div className="text-xl mx-4 p-3 flex items-center text-white">
            <FaLocationDot className="m-2" />
            Lahore bhati chowk
          </div>
          <div className="text-xl mx-4 p-3 flex items-center text-white">
            <FaPhone className="m-2" />
            +923499953535
          </div>
          <div className="text-xl mx-4 p-3 flex items-center text-white">
            <MdEmail className="m-2" />
            example@gmail.com
          </div>
        </div>

        <div className=" shadow-xl h-[400px] w-[50%] ">
          <h1 className="text-center text-3xl font-bold">Reach Out Us</h1>
          <div>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message Here"
                minRows={2}
                style={{ width: "100%", padding: "10px" }}
              />
            </Box>
            
             <Box className=" p-4 rounded-lg">
              <Button variant="contained" className="mx-4" color="warning" endIcon={<SendIcon />}>
                Send
              </Button>
             </Box>
              
            
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
