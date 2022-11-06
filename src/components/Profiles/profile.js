import Propic from '../Images/profilePic.svg'
import Backarrow from '../Images/arrowButton.svg';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';


const profile = () => {
  return (
    <div className='text-center'>
      <button className='max-sm:hidden bg-transparent border-hidden rounded-none mx-[auto] flex justify-end mt-[3%] w-[50%]'>
      <img className='relative top-6' src={Backarrow} alt="arrow button" />
      </button>
      <div className='hidden mx-[auto] max-sm:flex relative top-6 justify-end w-[50%] max-sm:w-[90%] max-sm:mt-[5%]'>
      <EllipsisHorizontalCircleIcon className='w-7' />
      </div>
      <div className='mx-[auto] w-[88px] h-[88px]'>
        <img id='profile_img' className='w-[100%] h-[100%]' src={Propic} alt={Propic} />
      </div>
      <h2 id='classes.twitter' className='font-bold text-[20px] mt-[1%] max-[425px]:mt-[5%] max-[425px]:mb-[7%]'>Victor Eneh</h2>
      <p id='classes.slack' className='hidden'>v-high-c</p>
    </div>
  )
}

export default profile;