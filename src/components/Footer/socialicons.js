import Footer from './footer'
import Slack from '../Images/slack.svg'
import {
    FaGithub,
} from 'react-icons/fa'

const socialicons = () => {
  return (
    <div>
        <div className='justify-center flex space-x-[30px] mx-[auto] w-[30%] text-2xl mb-[5%] max-mb:mb-[8%]  max-sm:mb-[15%] max-sm:mt-[12%]'>
            <img src={Slack} alt="slack" />
            <FaGithub />
        </div>
        <Footer />
    </div>
  )
}

export default socialicons;