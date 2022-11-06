// import { ExternalLink } from 'react-external-link';

// const links = ({links}) => {
//   return (
//     <div>
//     {/* <div className='w-[100%]'> */}
//     {links.map((link) => (
//     // <div key={link.id} className='w-[90%] max-lg:w-[85%] h-[76px] text-center mx-[auto] bg-gray-fade hover:bg-gray-bold hover:text-neutral-400 mb-[1.5%] leading-[76px] rounded-[8px]  max-sm:mb-[5%]  max-[425px]:h-[65px] max-[425px]:leading-[65px]  max-sm:w-[90%]'>
//     <div key={link.id} className='pt-[2%] w-[90%] max-lg:w-[85%] h-[100px]  text-center mx-[auto] bg-gray-fade hover:bg-gray-bold hover:text-neutral-400 mb-[1.5%]  rounded-[8px]  max-sm:mb-[5%]  max-[425px]:h-[65px] max-[425px]:leading-[65px]  max-sm:w-[90%] max-sm:pt-[0]'>
//         <ExternalLink href={link.page}>
//           <h2 className=' text-[18px] max-sm:text-[16px] text-[#101828] hover:text-white-teal font-semibold'>{link.name}</h2>
//           <p className=' text-[16px] max-sm:text-[14px] max-sm:hidden'>{link.text}</p>
//         </ExternalLink>
//     </div>
//     ))}
//     </div>
//   )
// }

// export default links;



// import { useState } from "react";
// import ContactMe from './ContactMe';
// import Footer from "../../components/Footer/footer";

// const ContactForm = () => {

//   const [values, setValues] = useState ({
//     firstname:'',
//     lastname:'',
//     emails:'',
//     messages:'',
//   })

//   const onChange = (e) => {
//     setValues({...values, [e.target.name]: e.target.value});
//   };


//   const handleSubmit = (e) =>{
//     // e.preventDefault();
//     if(values){
//       alert("message sent successfully!!")
//     }
       
//     // const data =new FormData(e.target)
//     // console.log(Object.fromEntries(data.entries()))
//   }

//   const [focused, setFocused] =useState(false);

//   const handleFocus = (e) => {
//     setFocused(true);
//   };


//  console.log(values.emails);

//   return (
//     <div>
//       <ContactMe />
//       <form  className="mx-[auto] w-[50%] max-xl:w-[80%] max-sm:w-[90%]" onSubmit={handleSubmit}>
//         <div className="flex justify-between mb-[15px] max-sm:block">
//           <div className="basis-[48%] max-sm:mb-[15px]">
//             <label className="text-[#1c2129] text-[14px] font-medium">
//               First name
//             </label>
//             <input
//               id="first_name"
//               name="firstname"
//               value={values.firstname}
//               className=" rounded-[8px] border-[1px] border-solid border-[#D0D5DD] h-[44px] pl-[3%] w-[100%] font-normal text-[16px] text-[#667085]"
//               type="text"
//               placeholder="Enter your first name"
//               onChange={onChange}
//               onBlur={handleFocus}
//               focused={focused.toString()}
//               pattern="^[A-Za-z]+$"
//               required={true}
//             />
//             <span id='first-name-error' className='text-[red] text-[14px] absolute right-[51%] bottom-[66%] hidden'>Firstname required</span>
//           </div>

//           <div className="basis-[48%]">
//             <label className="text-[#344054] text-[14px] font-medium">
//               Last name
//             </label>
//             <input
//               id="last_name"
//               name="lastname"
//               value={values.lastname}
//               className="rounded-[8px] border-[1px] border-solid border-[#D0D5DD] h-[44px] pl-[3%] w-[100%] font-normal text-[16px] text-[#667085]"
//               type="text"
//               placeholder="Enter your last name"
//               onChange={onChange}
//               onBlur={handleFocus}
//               focused={focused.toString()}
//               pattern="^[A-Za-z]+$"
//               required={true}
             
//             />
//             <span id='last-name-error' className='hidden text-[red] text-[14px] absolute left-[64%] bottom-[66%]'>lastname required</span>
//           </div>
//         </div>

//         <div className="mb-[15px]">
//           <div>
//             <label className="text-[#344054] text-[14px] font-medium">
//               Email
//             </label>
//             <input
//               id="email"
//               name="emails"
//               value={values.emails}
//               className="rounded-[8px] border-[1px] border-solid border-[#D0D5DD] h-[44px] pl-[2%] w-[100%] font-normal text-[16px] text-[#667085]"
//               type="email"
//               placeholder="yourname@email.com"
//               onChange={onChange}
//               onBlur={handleFocus}
//               focused={focused.toString()}
//               required={true}
//             />
//             <span id='email-error' className='hidden text-[red] text-[14px] absolute left-[66%] bottom-[55%]' >Email is required</span>
//           </div>
//         </div>

//         <div>
//           <label className="text-[#344054] text-[14px] font-medium">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="messages"
//             value={values.messages}
//             className="rounded-[8px] border-[1px] border-solid border-[#D0D5DD] pl-[2%] pt-[2%] w-[100%] font-normal text-[16px] text-[#667085]"
//             rows="5"
//             placeholder="Send me a message and i'll reply you as soon as possible"
//             onChange={onChange}
//             onBlur={handleFocus}
//             focused={focused.toString()}
//             required={true}
//           ></textarea>
//           <span className='hidden text-[red] text-[14px] absolute left-[67%] bottom-[30%]'>Please enter a message</span>
//         </div>

//         <div>
//           <input
//             className="rounded-[6px] w-[20px] h-[20px] mt-[15px]"
//             type="checkbox"
//             name=""
//             id=""
//             required
//           />
//           <label className="ml-[2%] relative bottom-1 text-[#475467] text-[16px] font-normal">
//             You agree to providing your data to (name) who may contact you
//           </label>
//           <br></br>
//           {/* <span id='checkbox-error' className='text-rose-800 text-[14px]'>Check the box to continue{submitError}</span> */}
//         </div>

//         <button
//           id="btn__submit"
//           className="rounded-[8px] h-[48px] mt-[20px] w-[100%] text-[16px] text-[#FFFFFF] font-semibold bg-[#1570EF]"
//           type="submit"
//         >
//           Send Message
//         </button>
//         {/* <button id='btn__submit' onClick={handleClick} className="rounded-[8px] h-[48px] mt-[20px] w-[100%] text-[16px] text-[#FFFFFF] font-semibold bg-[#1570EF]" type="submit">Send Message</button> */}
//         {/* <span id='submit-error' className='text-rose-800 text-[14px]' >please fix error</span> */}
//       </form>
//       <div className="mt-[5%]">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
