const PrimaryHeader = ({ title }) => {
  return (
    <>
      <span className='bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent'>
        {title}
      </span>
    </>
  );
};

export default PrimaryHeader;
