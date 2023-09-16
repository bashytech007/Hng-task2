import { Link } from "react-router-dom";
import logo from "../assets/svg/tv.svg";
import { Home2, Calendar, Video, Like1 } from "iconsax-react";

export default function SideBar() {


  return (
    <>
      <section className="page-transition flex [&>*]:flex  flex-col gap-12 py-8 lg:w-[15%] border-r-4 h-[100vh] rounded-r-2xl lg:rounded-r-[48px]">
        <Link to="/">
          <div
           
            className="flex cursor-pointer lg:[&>p]:block [&>p]:hidden px-4 justify-start items-center gap-2"
          >
            <img src={logo} alt="movie box logo" />
            <p className="font-bold text-xl">MovieBox</p>
          </div>
        </Link>
        <nav className="[&>*]:cursor-pointer lg:[&>*>p]:block text-lg font-medium flex-col gap-8 [&>*>p]:hidden [&>div]:flex lg:[&>div]:px-8 [&>div]:px-4 [&>div]:justify-start [&>div]:items-center [&>div]:p-[1rem] [&>div]:gap-4">
          <div >
            <Home2 size="28" />
            <p>Home</p>
          </div>
          <div>
            <Video size="28" />
            <p>Movies</p>
          </div>
          <div>
            <Like1 size="28" />
            <p>Favorites</p>
          </div>
          <div>
            <Calendar size="28" />
            <p>Upcoming</p>
          </div>
        </nav>
      </section>
      <>
       
      </>
    </>
  );
}
