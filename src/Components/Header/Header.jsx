import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-auto w-11/12 py-2 border-b-2'>
            <h1 className='text-4xl'>knowledge cafe</h1>
            <img className='w-12 h-12' src={profile} alt="" />
        </div>
    );
};

export default Header;