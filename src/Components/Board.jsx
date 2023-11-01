export default function Board() {
  return (
    <button className="w-91.1 h-5 flex items-center pl-15 mt-2.5 rounded-lg">
      <div>
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.93504 14.1387C6.72247 14.3603 6.43415 14.4848 6.13352 14.4848C5.83289 14.4848 5.54458 14.3603 5.332 14.1387C5.11942 13.9171 5 13.6165 5 13.303C5 12.9896 5.11942 12.689 5.332 12.4674C5.54458 12.2457 5.83289 12.1212 6.13352 12.1212L8.40057 9.75758C8.40057 9.44414 8.51999 9.14354 8.73257 8.9219C8.94515 8.70027 9.23346 8.57576 9.53409 8.57576C9.83472 8.57576 10.123 8.70027 10.3356 8.9219C10.5482 9.14354 10.6676 9.44414 10.6676 9.75758L11.9749 11.1442H12.0959L14.8239 8.3C14.8202 8.2607 14.8202 8.22112 14.8239 8.18182C14.8239 7.94808 14.8903 7.71958 15.0149 7.52524C15.1395 7.33089 15.3165 7.17941 15.5236 7.08996C15.7307 7.00051 15.9586 6.97711 16.1785 7.02271C16.3984 7.06831 16.6004 7.18087 16.7589 7.34615C16.9174 7.51143 17.0254 7.72201 17.0691 7.95126C17.1129 8.18051 17.0904 8.41813 17.0046 8.63408C16.9188 8.85003 16.7735 9.0346 16.5871 9.16446C16.4007 9.29432 16.1816 9.36364 15.9574 9.36364L13.2067 12.2552V12.3182C13.2067 12.6316 13.0873 12.9322 12.8747 13.1539C12.6621 13.3755 12.3738 13.5 12.0732 13.5C11.7726 13.5 11.4842 13.3755 11.2717 13.1539C11.0591 12.9322 10.9397 12.6316 10.9397 12.3182V12.2552L9.72301 10.9867H9.54921H9.3754L7.26705 13.1848C7.27073 13.2241 7.27073 13.2637 7.26705 13.303C7.26705 13.6165 7.14762 13.9171 6.93504 14.1387Z"
            fill="white"
            stroke="white"
          />
          <path
            d="M19.9444 2H3.05556C2.47259 2 2 2.63426 2 3.41667V17.5833C2 18.3657 2.47259 19 3.05556 19H19.9444C20.5274 19 21 18.3657 21 17.5833V3.41667C21 2.63426 20.5274 2 19.9444 2Z"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="pl-15">
        <h1 className="text-white font-bold">Board</h1>
      </div>
    </button>
  );
}
