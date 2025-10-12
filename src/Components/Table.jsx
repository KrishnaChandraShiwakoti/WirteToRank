import Logo from "../assets/svg/Logo.svg";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
const Table = ({ profile }) => {
  return (
    <div className=" bg-primary-50 -top-80 relative w-8/12 mx-auto rounded-3xl p-4">
      <div className="w-full bg-white shadow-sm rounded-3xl pb-20">
        {/* Header Bar */}
        <div className=" bg-white rounded-t-3xl shadow-lg p-2">
          <div className=" ml-5 flex justify-between items-center">
            <a href="#">
              <img src={Logo} alt="" className="h-5" />
            </a>
            <div className="flex gap-4 p-2 border-2 rounded-3xl border-primary-600">
              <a
                href="#"
                className="bg-primary-500 text-white rounded-2xl px-2 py-1">
                City Page
              </a>
              <a href="#" className="bg-neutral-200 rounded-2xl px-2 py-1 ">
                Seo Heist
              </a>
            </div>
            <div className="mr-5 flex gap-4 justify-center items-center">
              {/* profile */}
              {profile ? (
                <img src={profile} alt="" />
              ) : (
                <IoPerson className="h-8 w-8" />
              )}
              <p>Welcome,User</p>
              <IoIosSettings className="h-8 w-8" />
              <button
                className="px-4 py-2 rounded-[10px] text-white bg-gradient-to-r 
      from-primary-700 via-primary-400 to-primary-700 transition duration-800 hover:cursor-pointer  hover:from-primary-500 hover:via-primary-700 hover:to-primary-500   ">
                LogOut
              </button>
            </div>
          </div>
        </div>
        {/*Detail  */}
        <div className="mt-5 w-12/13 mx-auto">
          <p className="text-xl font-semibold">Your Business Profile</p>
          <p className="text-sm text-neutral-500">
            View Your detailed business profile
          </p>
        </div>
        {/* Table */}
        <div className="mt-5 w-12/13 mx-auto rounded-2xl shadow-sm overflow-hidden">
          <table className="min-w-full rounded-2xl shadow-md">
            <thead>
              <tr className="bg-white shadow-2xl">
                <th>ID</th>
                <th>Business</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2">453367122</td>
                <td className="px-4 py-2">Beyond Himalayan Tech</td>
                <td className="px-4 py-2">Information Technology</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-white border-2 rounded-sm cursor-pointer text-black">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-primary-600 text-white border-0 rounded-sm cursor-pointer">
                      Enter
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Pagination */}
          <div className="absolute right-10 mt-5 flex">
            <button className="mx-1 px-2 py-1  shadow-sm text-neutral-500 border-0 rounded-sm cursor-pointer">
              Prev
            </button>
            <div className="flex">
              <p className="mx-1 px-3 py-1 shadow-sm text-white border-0 rounded-sm cursor-pointer bg-primary-600">
                1
              </p>
              <p className="mx-1 px-3 py-1 shadow-sm text-black border-0 rounded-sm cursor-pointer">
                2
              </p>
              <p className="mx-1 px-3 py-1  shadow-sm text-black border-0 rounded-sm cursor-pointer">
                3
              </p>
              <p className="mx-1 px-3 py-1  shadow-sm text-black border-0 rounded-sm cursor-pointer">
                ...
              </p>
              <p className="mx-1 px-3 py-1  shadow-sm text-black border-0 rounded-sm cursor-pointer">
                10
              </p>
            </div>
            <button className="mx-1 px-3 py-1 text-black border-0 rounded-sm shadow-sm cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
