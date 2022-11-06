import { useState } from "react";
import ContactMe from './ContactMe';
import Footer from "../../components/Footer/footer";

const ContactForm = () => {

  const [values, setValues] = useState ({
    firstname:'',
    lastname:'',
    emails:'',
    messages:'',
  })

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };


  const handleSubmit = (e) =>{
    if(values){
      alert("Send Message!!")
    }
  }

  const [focused, setFocused] =useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };


 console.log(values.emails);

  return (
    <div>
      <ContactMe />
      <form  className="mx-[auto] w-[50%] max-xl:w-[80%] max-sm:w-[90%]" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-[15px] max-sm:block">
          <div className="basis-[48%] max-sm:mb-[15px]">
            <label className="text-[#1c2129] text-[14px] font-medium">
              First name
            </label>
            <input
              id="first_name"
              name="firstname"
              value={values.firstname}
              className="outline-[#84CAFF] rounded-[8px] border-[1px] border-solid border-[#D0D5DD]
               h-[44px] pl-[3%] w-[100%] font-normal text-[16px] text-[#667085] max-sm:placeholder:text-[14px] max-sm:pl-[4%]"
              type="text"
              placeholder="Enter your first name"
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern="^[A-Za-z]+$"
              required={true}
            />
            <span id='first-name-error' className='text-[#F83F23] text-[14px] hidden font-medium'>Firstname is required</span>
          </div>

          <div className="basis-[48%]">
            <label className="text-[#344054] text-[14px] font-medium">
              Last name
            </label>
            <input
              id="last_name"
              name="lastname"
              value={values.lastname}
              className="outline-[#84CAFF] rounded-[8px] border-[1px] border-solid border-[#D0D5DD]
               h-[44px] pl-[3%] w-[100%] font-normal text-[16px] text-[#667085] max-sm:placeholder:text-[14px] max-sm:pl-[4%]"
              type="text"
              placeholder="Enter your last name"
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              pattern="^[A-Za-z]+$"
              required={true}            
            />
            <span id='last-name-error' className='hidden text-[#F83F23] text-[14px] font-medium'>Lastname is required</span>
          </div>
        </div>

        <div className="mb-[15px]">
          <div>
            <label className="text-[#344054] text-[14px] font-medium">
              Email
            </label>
            <input
              id="email"
              name="emails"
              value={values.emails}
              className="outline-[#84CAFF] rounded-[8px] border-[1px] border-solid border-[#D0D5DD]
              h-[44px] pl-[2%] w-[100%] font-normal text-[16px] text-[#667085] max-sm:placeholder:text-[14px] max-sm:pl-[3%]"
              type="email"
              placeholder="yourname@email.com"
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              required={true}
            />
            <span id='email-error' className='hidden text-[#F83F23] text-[14px] font-medium' >Email is required</span>
          </div>
        </div>

        <div>
          <label className="text-[#344054] text-[14px] font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="messages"
            value={values.messages}
            className="outline-[#84CAFF] rounded-[8px] border-[1px] border-solid border-[#D0D5DD] pl-[2%] 
            pt-[2%] w-[100%] font-normal text-[16px] text-[#667085] max-sm:placeholder:text-[14px] max-sm:pt-[3%] max-sm:pl-[3%]"
            rows="5"
            placeholder="Send me a message and i'll reply you as soon as possible"
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required={true}
          ></textarea>
          <span className='hidden text-[#F83F23] text-[14px] font-medium'>Please enter a message</span>
        </div>

        <div>
          <input
            className="rounded-[6px] w-[20px] h-[20px] mt-[15px] max-sm:w-[15px]
             max-sm:h-[15px] max-sm:rounded-[4px]"
            type="checkbox"
            name=""
            id=""
            required
          />
          <label className="ml-[2%] relative bottom-1 text-[#475467] text-[16px] font-normal max-sm:text-[14px]">
            You agree to providing your data to (name) who may contact you
          </label>
          <br></br>
        </div>

        <button
          id="btn__submit"
          className="rounded-[8px] h-[48px] mt-[20px] w-[100%] text-[16px] text-[#FFFFFF] font-semibold bg-[#1570EF]"
          type="submit"
        >
          Send Message
        </button>
      </form>
      {/* <div className="mt-[7%] "> */}
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default ContactForm;
