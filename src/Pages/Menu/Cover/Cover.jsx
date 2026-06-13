


const Cover = ({ img, title, description }) => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage:
                    `url(${img})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
                    {description && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae ullam modi consequatur et provident, saepe quod debitis odio eveniet.</p>}
                </div>
            </div>
        </div>
    )
}

export default Cover
