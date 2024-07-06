import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Cursor from "../components/cursor";

const ContactusPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!name || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid.");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_w99fya6",
        "template_14r5jlg",
        templateParams,
        "7Q3XENp64KRaPrw67"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setError("");
          setSuccess("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <Cursor zIndex={9999} />
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 p-4">
        <motion.h1
          className="text-white font-pixel text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>

        <motion.form
          className="w-full max-w-md bg-gray-800 p-8 rounded-lg space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onSubmit={sendEmail}
        >
          {error && (
            <motion.div
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.div>
          )}
          {success && (
            <motion.div
              className="text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {success}
            </motion.div>
          )}

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <label className="text-white mb-2">Name</label>
            <motion.input
              type="text"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.01 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <label className="text-white mb-2">Email</label>
            <motion.input
              type="email"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.01 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <label className="text-white mb-2">Message</label>
            <motion.textarea
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              whileFocus={{ scale: 1.01 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-2 rounded bg-blue-500 text-white mt-4 hover:bg-blue-700"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactusPage;
