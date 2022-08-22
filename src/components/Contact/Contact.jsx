import React, { useRef } from 'react'
import'./Contact.css'
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ejhzye', 'template_gjsx60y', form.current, '0fLhxFwW7KsCqNXNQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
        <div className='contact-container' id='contact'>
<div className='contact-heading'>
  <h1>Take A Coffee And Chat With Me</h1>
</div>

<div className='contact-main-section' >
<div className='contact-left'>
  <img src="https://grocurv.com/media/original_images/step3.png" alt="" />
</div>
<div className='contact-right'>

<div className='form-input'>
  <form  ref={form} onSubmit={sendEmail}>
    <input type="text" placeholder='name' />
    <input type="email" placeholder='email' />
    <input type="text" placeholder='subject' />

    <div id='messege-input'>
      
    <textarea type="text"  placeholder='message' /> <br />
    </div>
    <button type='submit'>SEND</button>
  </form>
</div>

</div>
</div>

</div>
    </div>
  )
}
