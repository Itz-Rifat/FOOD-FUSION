import feature_img from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/Section Title/SectionTitle'
import "./FeaturedItem.css"



const FeatureItem = () => {
    return (
        <div className='featured_item text-white pt-1'>
            <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className='md:flex mb-8 max-w-6xl mx-auto py-8 items-center'>
                <div>
                    <img className='w-200' src={feature_img} alt="Featured Item" />
                </div>
                <div className='w-fit ml-10'>
                    <h2 className='text-3xl font-semibold border-b-2 w-fit border-white'>17 June 2026</h2>
                    <h3 className='text-2xl uppercase'>Where Can I Get Some?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores aspernatur. Ab quis velit earum ad nisi quaerat sint minima!</p>
                    <button className='btn hover:bg-orange-500 hover:text-white hover:border-none border-b-4 border-gray-300 btn-outline border-0  mt-4'>Read More...</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureItem
