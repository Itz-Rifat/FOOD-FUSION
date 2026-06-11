import Chef_service from "../../../assets/home/chef-service.jpg";



const Service_infomation = () => {
  return (
    <div className="relative my-8 max-w-[1320px] mx-auto">
      <img src={Chef_service} alt="Service Information" className="block w-full" />
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 text-center text-black shadow-lg">
      {/* <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-900/70 p-8 text-center text-white shadow-lg"> */}
        <h2 className="text-3xl font-bold">FOOD FUSION</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic impedit at quo cum perspiciatis laudantium libero sapiente labore sed reprehenderit.</p>
      </div>
    </div>
  )
}

export default Service_infomation
