// export default function Dashboard() {
//   return (
//     <div className="w-91.1 h-5 flex items-center pl-15 mt-2.5 bg-custom-yellow rounded-lg">
//       <div>
//         <svg
//           width="21"
//           height="21"
//           viewBox="0 0 21 21"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M2 19V5.1875C2 4.34212 2.33583 3.53137 2.9336 2.9336C3.53137 2.33583 4.34212 2 5.1875 2H15.8125C16.6579 2 17.4686 2.33583 18.0664 2.9336C18.6642 3.53137 19 4.34212 19 5.1875V11.5625C19 12.4079 18.6642 13.2186 18.0664 13.8164C17.4686 14.4142 16.6579 14.75 15.8125 14.75H6.25L2 19Z"
//             stroke="white"
//             stroke-width="2.5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M6.25 6.25H14.75"
//             stroke="white"
//             stroke-width="2.5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M6.25 10.5H12.625"
//             stroke="white"
//             stroke-width="2.5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </div>
//       <div className="pl-15">
//         <h1 className="text-white ">Messages</h1>
//       </div>
//     </div>
//   );
// }

export default function Messages() {
  let hasNewMessages = true;

  return (
    <button className="w-91.1 h-5 flex items-center pl-15 mt-2.5 rounded-lg">
      <div >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 19V5.1875C2 4.34212 2.33583 3.53137 2.9336 2.9336C3.53137 2.33583 4.34212 2 5.1875 2H15.8125C16.6579 2 17.4686 2.33583 18.0664 2.9336C18.6642 3.53137 19 4.34212 19 5.1875V11.5625C19 12.4079 18.6642 13.2186 18.0664 13.8164C17.4686 14.4142 16.6579 14.75 15.8125 14.75H6.25L2 19Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.25 6.25H14.75"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.25 10.5H12.625"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="pl-15">
        <h1 className="text-white font-bold">Messages</h1>
      </div>
      <div>
        {hasNewMessages && (
          <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
        )}
        </div>
    </button>
  );
}
