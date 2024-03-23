import React,{useState, useRef} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();
  
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );

      emailjs.sendForm('service_8t36h0h', 'template_z2j4m5j', form.current, '8lfk4ySzGZECv_SRn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
      <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">

        <div className="flex justify-center items-center text-center mb-8">
          <Title line="CONTACT" />
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start">
          <ContactLeft />
          <div className="w-full lg:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 px-4 lg:px-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 py-2" ref={form} onSubmit={handleSend}>
              {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
              )}
              {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
              )}
              <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                      name="name"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="contactInput"
                      type="text"
                      placeholder="Enter your name"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                      name="phone"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className="contactInput"
                      type="text"
                      placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="contactInput"
                    type="email"
                    placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className="contactInput"
                    type="text"
                    placeholder="Enter subject"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="contactTextArea"
                    rows="8"
                    placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );

}

export default Contact