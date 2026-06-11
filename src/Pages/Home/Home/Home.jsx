import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import FeatureItem from "../Feature Item/FeatureItem"
import PopularMenu from "../PopularMenu/PopularMenu"
import Service_infomation from "../Service/Service_infomation"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Service_infomation></Service_infomation>
      <PopularMenu></PopularMenu>


      <FeatureItem></FeatureItem>
    </div>
  )
}

export default Home
