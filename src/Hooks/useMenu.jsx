import { useEffect, useState } from "react";



const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch("menu.json")
                const data = await res.json()
                // console.log(data)
                setMenu(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching menu:", error)
                setLoading(false)
            }
        }
        fetchMenu()
    }, [])

    return [menu, loading];
}

export default useMenu
