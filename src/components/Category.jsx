import './Category.css'

const Category = () => {
  return (
    <div className='category'>
      <div className="heading">
        <p className='chooseBy'>Choose By </p>
        <p className='category-title'>Category</p>
      </div>
        
        <ul>
            <li>Eye</li>
            <li>Lips</li>
            <li>Face</li>
        </ul>
    </div>
  )
}

export default Category