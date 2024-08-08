import axios from "axios";
import { useEffect } from "react";
import { MdMarkEmailRead } from "react-icons/md";


function Design() {

    useEffect(() => {
        async function call() {
          const token = localStorage.getItem("token");
          await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
            headers: {
              Authorization: token,
            },
          });
        }
        call();
      }, []);

      
  return (
    <div className="dark:text-white text-zinc-500 bg-zinc-100 dark:bg-black flex justify-center items-center h-screen flex-col">
      <div className="bg-blue-500 p-6 rounded-full">
      <MdMarkEmailRead className="dark:text-white text-white text-8xl"/> 
      </div>
      <div className="text-2xl my-8 font-semibold text-blue-800 dark:text-white">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="text-zinc-500 text-sm">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default Design;
