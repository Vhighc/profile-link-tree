import Ingressive from '../Images/I4G.svg'
// import slack from '../Images/slack.svg'

const footer = () => {
  return (
    <div>
      <div>
        <hr className='w-[95%]  mx-[auto] text-[#667085] mb-[0.5%] max-sm:w-[90%]'/>
        <div className='w-[95%] max-lg:w-[85%] max-md:-[75%] mx-[auto] flex flex-wrap justify-between'>
          <h2 className='mt-[0] text-[20px] font-bold'>Zuri<span className='text-[50px] text-[#E7332B]'>.</span>Internship</h2>
          <p className='mt-[30px] max-[425px]:mt-[0px] font-normal text-[16px] text-[#667085]'>HNG Internship 9 Frontend Task</p>
          <img className='max-[425px]:mt-[20px]' src={Ingressive} alt='ingressive' />
        </div>
      </div>
    </div>
  )
}

export default footer;