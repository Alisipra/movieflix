import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const page = () => {
  return (
    <div className="bg-transparent shadow-lg shadow-black m-4 p-4 md:p-8 flex flex-col lg:flex-row justify-center items-center gap-6">
      {/* Left Section - Contact Info */}
      <div className="bg-amber-300 rounded-lg w-full lg:w-[35%] p-4">
        <h1 className="text-2xl md:text-3xl text-center text-white p-2 font-bold">
          Let's Get In Touch
        </h1>
        <h3 className="text-center text-white p-2">
          We are here to serve you better services...
        </h3>

        <div className="text-lg md:text-xl p-3 flex items-center text-white">
          <FaLocationDot className="mr-2" />
          Lahore Bhati Chowk
        </div>
        <div className="text-lg md:text-xl p-3 flex items-center text-white">
          <FaPhone className="mr-2" />
          +92 349 9953535
        </div>
        <div className="text-lg md:text-xl p-3 flex items-center text-white">
          <MdEmail className="mr-2" />
          example@gmail.com
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[60%] shadow-xl rounded-lg p-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Reach Out To Us</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "100%",
              maxWidth: "100%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField label="Subject" variant="outlined" fullWidth className="md:col-span-2" />
          </div>
          <TextareaAutosize
            aria-label="message"
            placeholder="Message Here"
            minRows={4}
            className="w-full mt-4 p-2 border border-gray-300 rounded"
          />
          <Box className="mt-4 text-center">
            <Button
              variant="contained"
              color="warning"
              endIcon={<SendIcon />}
              className="w-full sm:w-auto"
            >
              Send
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default page;
