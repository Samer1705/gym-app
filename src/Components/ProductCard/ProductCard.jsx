import ProductImg from '../../assets/images/shop-single-1-img-768x886.png'
const ProductCard = () => {
  return (
    <div className='text-center bg-white border border-black p-2'>
        <img src={ProductImg} className='w-100' alt="" />
        <h4 className='lead'>Product Type</h4>
        <h3 className="">Product Name</h3>
        <p>00 EGP</p>
    </div>
  )
}

export default ProductCard