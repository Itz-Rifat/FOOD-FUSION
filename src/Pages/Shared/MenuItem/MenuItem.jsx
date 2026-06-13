


const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="flex gap-4 p-4 items-center duration-500 hover:-translate-y-2 hover:shadow-xl border rounded-lg bg-white shadow-sm">
            
                <img src={image} className="w-20 h-20 object-cover rounded-tr-full rounded-bl-full rounded-br-full" alt={name} />
                <div className="flex-1">
                    <h3 className="uppercase font-semibold">{name}-------------</h3>
                    <p className="text-sm text-gray-600">{recipe}</p>
               
            </div>
            <p className="flex items-start text-yellow-500 font-bold">${price}</p>
        </div>
    )
}

export default MenuItem
