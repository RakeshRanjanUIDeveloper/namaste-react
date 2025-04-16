const Shimmer = () => {
    return (
        <>
            {Array(8).fill("").map((_, index) => (
                <div className='shimmer-card' key={index}>
                    <div className="shimmer-img shimmer-effect"></div>
                    <h3 className="shimmer-effect"></h3>
                    <h4 className="shimmer-effect"></h4>
                    <h4 className="shimmer-effect"></h4>
                    <p className="shimmer-effect"></p>
                </div>
            ))}
        </>
    );
};

export default Shimmer;