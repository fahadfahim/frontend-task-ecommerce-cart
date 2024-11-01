import loading from '../../assets/loading.gif'
const Loader = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>
            <img src={loading} alt='Loading' className='h-[300px] w-[300px]' />
        </div>
    )
}

export default Loader
export { }