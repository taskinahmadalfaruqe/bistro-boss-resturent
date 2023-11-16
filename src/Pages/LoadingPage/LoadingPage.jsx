import loderIcon from '../../assets/others/cupcake.gif'

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center text-center flex-col'>
            <div>
                <img src={loderIcon} alt="LoderImg" />
            </div>
            <div className='max-w-[500px] text-4xl font-semibold'>
                <p>Welcome to Bistro Boss Restaurant</p>
            </div>
        </div>
    );
};

export default LoadingPage;