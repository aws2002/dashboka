import { AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { GiRotaryPhone } from "react-icons/gi";
import MultilanguageBtn from "../Tools/MultilanguageBtn";
export default function NavCommunication() {
  const navCommunication = [
    {
      id: 1,
      href: "#",
      icon: <AiOutlineInstagram className="text-lg"/>,
    },
    {
      id: 2,
      href: "#",
      icon: <FiYoutube className="text-lg"/>,
    },
    {
      id: 3,
      href: "#",
      icon: <FiFacebook className="text-lg"/>,
    },
    {
      id: 4,
      href: "#",
      text: "+1 985 983 9823",
      icon: <GiRotaryPhone className=" inline -mt-2 text-lg"/>,
    },
  ];
  return (
    <section className="communication bg-color_2 px-4 py-1 border-b-2">
      <div className=" pl-8">
        <div className=" grid grid-cols-2">
          <div className=" lg:col-span-1 col-span-full flex items-center">
            <ul>
              {navCommunication.map(({ id, href, icon, text }) => (
                <li key={id} className=" inline-block mr-4 transition-all text-color_1 hover:text-main">
                  <a href={href}>
                    {icon}
                    <p className="inline">{text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:col-span-1 col-span-full lg:text-right text-center">
            <ul>
              <li className=" inline-block transition-all hover:text-main text-color_1 mr-4"><a href="">For Business</a></li>
              <li className=" inline-block text-color_1 mr-4 transition-all hover:text-main  border-r-2 border-l-2 px-8 border-color_1"><a href="">Help</a></li>
              <li className=" inline-block"><MultilanguageBtn/></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
