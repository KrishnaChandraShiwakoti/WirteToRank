const PrimaryHeader = ({ title }) => {
  return (
    <>
      <span className="bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent">
        {title}
      </span>
    </>
  );
};

export default PrimaryHeader;
