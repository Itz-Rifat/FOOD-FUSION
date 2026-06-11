



const SectionTitle = ({heading, subheading}) => {
  return (
    <div className="text-center mx-auto w-3/12 my-4">
      <p className="italic text-yellow-600 mb-2">--- {subheading} ---</p>
      <h2 className="text-4xl border-y-4 border-gray-400 text-center py-2">{heading}</h2>
    </div>
  )
}

export default SectionTitle
