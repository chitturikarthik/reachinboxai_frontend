import { useEffect, useState } from "react";
import axios from "axios";
import Inbox from "./Inbox";
import Design from "./Design";
import Right from "./Right";

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);
  
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Loading ...
      </div>
    );
  }

  const loadMail = async (threadId) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-gray-50 dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4">
        <Inbox data={datas} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        <Design selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <Right />
      </div>
    </div>
  );
}

export default MainPage;
