import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../Components/Section Title/SectionTitle"
import useMenu from "../../../Hooks/useMenu"
import Cover from "../Cover/Cover"
import MenuCategory from "../MenuCategory/MenuCategory"




const Menu = () => {
    
    const [menu, loading] = useMenu()

    if (loading) return <div className="text-center py-20"><p>Loading menu...</p></div>

    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle heading="Don't miss" subheading={"today's offer"}></SectionTitle>
            <MenuCategory category={offered}></MenuCategory>
            <MenuCategory category={dessert} title={"desserts"} description='description' img={dessertImg}></MenuCategory>
            <MenuCategory category={pizza} title={"pizza"} description='description' img={pizzaImg}></MenuCategory>
            <MenuCategory category={salad} title={"salads"} description='description' img={saladImg}></MenuCategory>
            <MenuCategory category={soup} title={"soups"} description='description' img={soupImg}></MenuCategory>
            
        </div>
    )
}

export default Menu
