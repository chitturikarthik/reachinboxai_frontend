import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import PropTypes from "prop-types";

function Inbox({ data, loadMail }) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log("clicked");
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }

  return (
    <div className="border-r-2 bg-gray-100 dark:bg-black dark:border-gray-700 border-gray-300 h-full overflow-y-scroll no-scrollbar">
      <div className="px-4 pt-4 flex justify-between">
        <div className="px-4">
          <div className="text-2xl py-3 text-blue-600 font-semibold flex items-center">
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="dark:text-white text-black font-bold">
            {data.length}/25{" "}
            <span className="text-gray-500 font-normal">Inboxes selected</span>
          </div>
        </div>
        <div
          className="p-3 mt-3 dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-white" />
        </div>
      </div>

      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder="Search"
            className="w-full dark:bg-gray-900 bg-gray-100 rounded-md p-1 pl-8 border dark:border-gray-700 border-gray-300"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div className="dark:text-white text-black">
            <span className="dark:bg-gray-800 bg-gray-200 text-blue-500 px-2 py-1 rounded-3xl">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center dark:text-white text-black">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({ fromEmail, subject, threadId, loadMail }) {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="border-t-2 dark:border-gray-700 border-gray-400 mx-8 py-4 cursor-pointer"
      onClick={handleMailClick}
    >
      <div>
        <div className="flex justify-between">
          <div className="dark:text-white text-black text-lg font-normal">{fromEmail}</div>
          <div className="dark:text-gray-400 text-gray-500 font-thin pr-3">Mar 7</div>
        </div>
        <div className="py-2 dark:text-gray-300 text-gray-600 font-normal">
          {trimSubject(subject, 7)}
        </div>
        <div className="flex">
          <div className="dark:bg-gray-800 bg-gray-200 px-3 py-1 rounded-2xl text-green-500 text-sm flex items-center">
            <GoDotFill className="mr-1 text-lg" />
            Interested
          </div>
          <div className="flex items-center dark:bg-gray-800 bg-gray-200 px-3 py-1 rounded-2xl dark:text-white text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

Mail.propTypes = {
  fromEmail: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  threadId: PropTypes.number.isRequired,
  loadMail: PropTypes.func.isRequired,
};

Inbox.propTypes = {
  data: PropTypes.array.isRequired,
  loadMail: PropTypes.func.isRequired,
};

export default Inbox;
