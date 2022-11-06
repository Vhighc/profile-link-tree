import Profile from '../components/Profiles/profile'
import Tree from '../components/TREE/tree'
import Footer from '../components/Footer/socialicons';

const linkTree = () => {

  return (
    <div>
      <div className='mb-[3%]'><Profile /></div>
      <Tree />
      <div className='mt-[3.5%]'><Footer /></div>
    </div>
  )
}

export default linkTree;
