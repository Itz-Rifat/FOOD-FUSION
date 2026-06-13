import MenuItem from "../../Shared/MenuItem/MenuItem"
import Cover from "../Cover/Cover"


const MenuCategory = ({category, img, title, description}) => {
    if (!category || category.length === 0) return null;
    
    return (
        <div className="my-8">
            {img && title && description && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid w-[1320px] mx-auto grid-cols-1 md:grid-cols-2 gap-4 my-8 ">
                {
                    category.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

                {/* <button className="uppercase border-b-4 border-gray-400">order your favourite food</button> */}
            </div>
                <div className="flex justify-center"><button className="uppercase text-lg font-semibold btn btn-ghost hover:bg-orange-400 hover:text-black hover:border-none  border-0 border-b-4 border-gray-400">order your favourite food</button></div>

        </div>
    )
}

export default MenuCategory
