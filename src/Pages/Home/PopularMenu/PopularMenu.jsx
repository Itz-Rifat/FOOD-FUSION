import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {

  // const [menu, setMenu] = useState([]);
  const [tempMenu, setTempMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const items = data.filter((item) => item.category === "popular")
        setTempMenu(items)
      })
  }, [])

  // useEffect(() => {
  //   if (tempMenu.length > 0) {
  //     // Copy tempMenu into menu without mutating state directly.
  //     setMenu([...tempMenu])
  //   }
  // }, [tempMenu])
  const menu = [...tempMenu]

  return (
    <div className="mx-auto max-w-[1320px] mb-8 px-4">
      <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {
          menu.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="justify-center flex">
        <button className='btn hover:border-none border-b-4 border-gray-600 btn-outline border-0  mt-4'>View Full Menu</button>
      </div>
    </div>
  )
}

export default PopularMenu
