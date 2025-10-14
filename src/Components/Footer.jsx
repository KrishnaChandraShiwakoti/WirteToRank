import Logo from "../assets/svg/Logo.svg";
const Footer = () => {
  return (
    <div className=" mx-auto my-3 w-8/12   py-4 border-t-1">
      <div className=" ml-5 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="h-5" />
        </a>
        <div className=" gap-4 hidden lg:flex">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Learn</a>
          <a href="#">Integration</a>
        </div>
        <p>&copy; 2025 Writetorank.</p>
      </div>
    </div>
  );
};

export default Footer;
