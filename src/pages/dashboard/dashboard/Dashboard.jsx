import { PiArrowUpRightThin } from "react-icons/pi";
import chart from "../../../assets/images/chart.png";
import WorldMap from "../../../shared/map/WorldMap";
import MyChart from "./MyChart";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>Dashboard | Cargo-Core</title>
    </Helmet>
      <div className="w-full my-5 pr-5">
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold">
          <p>Overview</p>
        </div>
        <div className="flex gap-4">
          <button className="flex gap-[10px] items-center border-2 border-textColor rounded-xl font-semibold pl-6 pr-6 pt-3 pb-3 ">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 12.1667C14.8877 12.1667 15.0996 12.0789 15.2559 11.9226C15.4122 11.7663 15.5 11.5543 15.5 11.3333C15.5 11.1123 15.4122 10.9004 15.2559 10.7441C15.0996 10.5878 14.8877 10.5 14.6667 10.5C14.4457 10.5 14.2337 10.5878 14.0774 10.7441C13.9211 10.9004 13.8333 11.1123 13.8333 11.3333C13.8333 11.5543 13.9211 11.7663 14.0774 11.9226C14.2337 12.0789 14.4457 12.1667 14.6667 12.1667ZM14.6667 15.5C14.8877 15.5 15.0996 15.4122 15.2559 15.2559C15.4122 15.0996 15.5 14.8877 15.5 14.6667C15.5 14.4457 15.4122 14.2337 15.2559 14.0774C15.0996 13.9211 14.8877 13.8333 14.6667 13.8333C14.4457 13.8333 14.2337 13.9211 14.0774 14.0774C13.9211 14.2337 13.8333 14.4457 13.8333 14.6667C13.8333 14.8877 13.9211 15.0996 14.0774 15.2559C14.2337 15.4122 14.4457 15.5 14.6667 15.5ZM11.3333 11.3333C11.3333 11.5543 11.2455 11.7663 11.0893 11.9226C10.933 12.0789 10.721 12.1667 10.5 12.1667C10.279 12.1667 10.067 12.0789 9.91074 11.9226C9.75446 11.7663 9.66667 11.5543 9.66667 11.3333C9.66667 11.1123 9.75446 10.9004 9.91074 10.7441C10.067 10.5878 10.279 10.5 10.5 10.5C10.721 10.5 10.933 10.5878 11.0893 10.7441C11.2455 10.9004 11.3333 11.1123 11.3333 11.3333ZM11.3333 14.6667C11.3333 14.8877 11.2455 15.0996 11.0893 15.2559C10.933 15.4122 10.721 15.5 10.5 15.5C10.279 15.5 10.067 15.4122 9.91074 15.2559C9.75446 15.0996 9.66667 14.8877 9.66667 14.6667C9.66667 14.4457 9.75446 14.2337 9.91074 14.0774C10.067 13.9211 10.279 13.8333 10.5 13.8333C10.721 13.8333 10.933 13.9211 11.0893 14.0774C11.2455 14.2337 11.3333 14.4457 11.3333 14.6667ZM6.33333 12.1667C6.55435 12.1667 6.76631 12.0789 6.92259 11.9226C7.07887 11.7663 7.16667 11.5543 7.16667 11.3333C7.16667 11.1123 7.07887 10.9004 6.92259 10.7441C6.76631 10.5878 6.55435 10.5 6.33333 10.5C6.11232 10.5 5.90036 10.5878 5.74408 10.7441C5.5878 10.9004 5.5 11.1123 5.5 11.3333C5.5 11.5543 5.5878 11.7663 5.74408 11.9226C5.90036 12.0789 6.11232 12.1667 6.33333 12.1667ZM6.33333 15.5C6.55435 15.5 6.76631 15.4122 6.92259 15.2559C7.07887 15.0996 7.16667 14.8877 7.16667 14.6667C7.16667 14.4457 7.07887 14.2337 6.92259 14.0774C6.76631 13.9211 6.55435 13.8333 6.33333 13.8333C6.11232 13.8333 5.90036 13.9211 5.74408 14.0774C5.5878 14.2337 5.5 14.4457 5.5 14.6667C5.5 14.8877 5.5878 15.0996 5.74408 15.2559C5.90036 15.4122 6.11232 15.5 6.33333 15.5Z"
                fill="#3A3C3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.33464 1.9585C6.5004 1.9585 6.65937 2.02434 6.77658 2.14155C6.89379 2.25876 6.95964 2.41774 6.95964 2.5835V3.21933C7.5113 3.2085 8.1188 3.2085 8.78714 3.2085H12.2146C12.8838 3.2085 13.4913 3.2085 14.043 3.21933V2.5835C14.043 2.41774 14.1088 2.25876 14.226 2.14155C14.3432 2.02434 14.5022 1.9585 14.668 1.9585C14.8337 1.9585 14.9927 2.02434 15.1099 2.14155C15.2271 2.25876 15.293 2.41774 15.293 2.5835V3.27266C15.5096 3.28933 15.7146 3.31016 15.9088 3.336C16.8855 3.46766 17.6763 3.74433 18.3005 4.36766C18.9238 4.99183 19.2005 5.78266 19.3321 6.75933C19.4596 7.70933 19.4596 8.92183 19.4596 10.4535V12.2135C19.4596 13.7452 19.4596 14.9585 19.3321 15.9077C19.2005 16.8843 18.9238 17.6752 18.3005 18.2993C17.6763 18.9227 16.8855 19.1993 15.9088 19.331C14.9588 19.4585 13.7463 19.4585 12.2146 19.4585H8.78797C7.2563 19.4585 6.04297 19.4585 5.0938 19.331C4.11714 19.1993 3.3263 18.9227 2.70214 18.2993C2.0788 17.6752 1.80214 16.8843 1.67047 15.9077C1.54297 14.9577 1.54297 13.7452 1.54297 12.2135V10.4535C1.54297 8.92183 1.54297 7.7085 1.67047 6.75933C1.80214 5.78266 2.0788 4.99183 2.70214 4.36766C3.3263 3.74433 4.11714 3.46766 5.0938 3.336C5.28797 3.31016 5.4938 3.28933 5.70964 3.27266V2.5835C5.70964 2.41774 5.77548 2.25876 5.89269 2.14155C6.0099 2.02434 6.16888 1.9585 6.33464 1.9585ZM5.25964 4.57516C4.42214 4.68766 3.9388 4.89933 3.5863 5.25183C3.2338 5.60433 3.02214 6.08766 2.90964 6.926C2.89047 7.06766 2.87464 7.21766 2.8613 7.37516H18.1413C18.128 7.21683 18.1121 7.06766 18.093 6.92516C17.9805 6.08766 17.7688 5.60433 17.4163 5.25183C17.0638 4.89933 16.5805 4.68766 15.7421 4.57516C14.8863 4.46016 13.7571 4.4585 12.168 4.4585H8.83464C7.24547 4.4585 6.11714 4.46016 5.25964 4.57516ZM2.79297 10.5002C2.79297 9.7885 2.79297 9.16933 2.8038 8.62516H18.1988C18.2096 9.16933 18.2096 9.7885 18.2096 10.5002V12.1668C18.2096 13.756 18.208 14.8852 18.093 15.7418C17.9805 16.5793 17.7688 17.0627 17.4163 17.4152C17.0638 17.7677 16.5805 17.9793 15.7421 18.0918C14.8863 18.2068 13.7571 18.2085 12.168 18.2085H8.83464C7.24547 18.2085 6.11714 18.2068 5.25964 18.0918C4.42214 17.9793 3.9388 17.7677 3.5863 17.4152C3.2338 17.0627 3.02214 16.5793 2.90964 15.741C2.79464 14.8852 2.79297 13.756 2.79297 12.1668V10.5002Z"
                fill="#3A3C3F"
              />
            </svg>

            <p>June 01 2023 - June 20 2024</p>
          </button>
          <button className="flex items-center bg-primaryColor rounded-xl text-white font-semibold pl-6 pr-6 pt-3 pb-3 ">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 13.498H11.5V18.498C11.5 18.7633 11.3946 19.0176 11.2071 19.2052C11.0196 19.3927 10.7652 19.498 10.5 19.498C10.2348 19.498 9.98043 19.3927 9.79289 19.2052C9.60536 19.0176 9.5 18.7633 9.5 18.498V13.498H4.5C4.23478 13.498 3.98043 13.3927 3.79289 13.2052C3.60536 13.0176 3.5 12.7633 3.5 12.498C3.5 12.2328 3.60536 11.9785 3.79289 11.7909C3.98043 11.6034 4.23478 11.498 4.5 11.498H9.5V6.49805C9.5 6.23283 9.60536 5.97848 9.79289 5.79094C9.98043 5.6034 10.2348 5.49805 10.5 5.49805C10.7652 5.49805 11.0196 5.6034 11.2071 5.79094C11.3946 5.97848 11.5 6.23283 11.5 6.49805V11.498H16.5C16.7652 11.498 17.0196 11.6034 17.2071 11.7909C17.3946 11.9785 17.5 12.2328 17.5 12.498C17.5 12.7633 17.3946 13.0176 17.2071 13.2052C17.0196 13.3927 16.7652 13.498 16.5 13.498Z"
                fill="white"
              />
            </svg>

            <span>New Shipment</span>
          </button>
          <button className="flex items-center border-2 border-textColor  rounded-xl  font-semibold pl-6 pr-6 pt-3 pb-3 ">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1999 13.3C18.9878 13.3 18.7843 13.3842 18.6342 13.5343C18.4842 13.6843 18.3999 13.8878 18.3999 14.1V16.4999C18.3999 17.1365 18.1471 17.7469 17.697 18.197C17.2469 18.6471 16.6365 18.8999 15.9999 18.8999H7.99998C7.36346 18.8999 6.75302 18.6471 6.30293 18.197C5.85285 17.7469 5.59999 17.1365 5.59999 16.4999V8.49998C5.59999 7.86346 5.85285 7.25302 6.30293 6.80293C6.75302 6.35285 7.36346 6.09999 7.99998 6.09999H12C12.2121 6.09999 12.4156 6.01571 12.5656 5.86568C12.7157 5.71565 12.8 5.51217 12.8 5.3C12.8 5.08782 12.7157 4.88434 12.5656 4.73431C12.4156 4.58429 12.2121 4.5 12 4.5H7.99998C6.93951 4.50127 5.92284 4.9231 5.17297 5.67297C4.4231 6.42284 4.00127 7.43951 4 8.49998V16.4999C4.00127 17.5604 4.4231 18.5771 5.17297 19.327C5.92284 20.0768 6.93951 20.4987 7.99998 20.4999H15.9999C17.0604 20.4987 18.0771 20.0768 18.827 19.327C19.5768 18.5771 19.9987 17.5604 19.9999 16.4999V14.1C19.9999 13.8878 19.9156 13.6843 19.7656 13.5343C19.6156 13.3842 19.4121 13.3 19.1999 13.3Z"
                fill="#3A3C3F"
              />
              <path
                d="M8.00791 13.4135C8.03214 13.5823 8.10962 13.7388 8.22906 13.8604C8.3485 13.982 8.50365 14.0623 8.67191 14.0895C8.71421 14.0965 8.75702 14.1 8.79991 14.0999C8.94857 14.1 9.09431 14.0587 9.22078 13.9805C9.34725 13.9024 9.44945 13.7905 9.5159 13.6575C10.5087 11.6712 13.1503 11.552 14.3999 11.6264V13.2999C14.3999 13.4581 14.4468 13.6128 14.5348 13.7443C14.6227 13.8758 14.7476 13.9783 14.8938 14.0389C15.0399 14.0994 15.2007 14.1153 15.3559 14.0844C15.5111 14.0536 15.6536 13.9774 15.7655 13.8655L19.7655 9.86556C19.845 9.78603 19.9069 9.6906 19.9471 9.58551C19.9873 9.48043 20.0049 9.36804 19.9987 9.2557C19.9925 9.14336 19.9627 9.03359 19.9112 8.93356C19.8597 8.83352 19.7877 8.74548 19.6999 8.67517L15.6999 5.47518C15.5822 5.38097 15.4403 5.32192 15.2905 5.30484C15.1407 5.28775 14.9892 5.31334 14.8533 5.37864C14.7175 5.44394 14.6028 5.5463 14.5226 5.67392C14.4424 5.80154 14.3998 5.94923 14.3999 6.09998V7.63437C12.1599 7.52957 10.4479 8.06237 9.3271 9.21756C8.82403 9.78456 8.44645 10.4515 8.21911 11.1746C7.99177 11.8977 7.91979 12.6607 8.00791 13.4135Z"
                fill="#3A3C3F"
              />
            </svg>
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <div className="w-full pl-7 pr-7 pt-6 pb-6 border-2 border-borderColor rounded-2xl">
          <h4 className="font-semibold mb-3">Total Shipment</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-[14px]">
              <div className="bg-[#E9F3FE] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26549)">
                    <path
                      d="M23.39 16.91C22.9 16.33 22.18 16 21.42 16H19.71C19.81 15.59 19.89 15.09 19.89 14.58C19.89 12.81 18.91 12 18 12C16.57 12 16.57 13.49 16.57 14.12C16.57 14.66 16.17 15.18 15.73 15.58C15.9 15.92 16 16.3 16 16.7V22.5C16 22.78 15.95 23.04 15.87 23.29C16.71 23.64 18.07 24 20.05 24H20.89C22.16 24 23.22 23.09 23.43 21.86L23.96 19C24.09 18.25 23.88 17.49 23.39 16.91Z"
                      fill="#76A4EE"
                    />
                    <path
                      d="M13.5 24C12.672 24 12 23.328 12 22.5V16.696C12 15.868 12.672 15.196 13.5 15.196C14.328 15.196 15 15.868 15 16.696V22.5C15 23.328 14.328 24 13.5 24Z"
                      fill="#76A4EE"
                    />
                    <path
                      d="M9.22005 0L4.36005 0.02C3.73005 0.02 3.14005 0.37 2.84005 0.92L0.300049 5.52L8.73005 5.5L9.22005 0Z"
                      fill="#76A4EE"
                    />
                    <path
                      d="M19.68 5.47998L17.11 0.87998C16.8 0.32998 16.22 -0.0200195 15.58 -0.0200195L10.72 -1.95317e-05L11.23 5.49998L19.68 5.47998Z"
                      fill="#76A4EE"
                    />
                    <path
                      d="M20 10.6C19.39 10.2 18.69 9.99997 18 9.99997C17.25 9.99997 14.92 10.26 14.61 13.39C14.26 13.27 13.89 13.2 13.5 13.2C11.57 13.2 9.99999 14.77 9.99999 16.7V20L1.60999 20.03C1.59999 20.03 1.59999 20.03 1.59999 20.03C0.73999 20.03 0.0299902 19.32 0.0299902 18.45L-0.0100098 7.01997L9.23999 6.99997H10.74L19.99 6.96997L20 10.6Z"
                      fill="#76A4EE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26549">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span className="text-[28px] font-semibold">587</span>
            </div>
            <div className="flex items-center text-[10px] font-medium  text-[#15994E]">
              <span className="mr-1">12%</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9L9 2.5M9 2.5V8.74M9 2.5L2.76 2.5"
                  stroke="#15994E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full pl-7 pr-7 pt-6 pb-6 border-2 border-borderColor rounded-2xl">
          <h4 className="font-semibold mb-3">Total On-Time Deliveries</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-[14px]">
              <div className="bg-[#FFF6E7] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26566)">
                    <path
                      d="M23.6269 11.6858L21.7532 7.71727C21.4169 6.82371 20.5425 6.21822 19.5816 6.21822H16.3049V4.31567C16.3049 3.03772 15.2672 2 13.9892 2H3.03497C1.75696 2 0.719238 3.03772 0.719238 4.31567V17.749C0.719238 19.0366 1.75696 20.0744 3.03497 20.0744H3.69799C3.69799 17.9508 5.41803 16.2308 7.54156 16.2308C9.65554 16.2308 11.3851 17.9508 11.3851 20.0744H14.9116C14.9116 17.9508 16.6316 16.2308 18.7552 16.2308C20.7731 16.2308 22.4354 17.797 22.5892 19.7862C23.3003 19.3922 23.7807 18.6234 23.7807 17.749V12.5121C23.7807 12.2334 23.7327 11.9548 23.6269 11.6858ZM11.1161 8.65893L7.58004 10.7249C7.36861 10.8402 7.12839 10.8787 6.89778 10.8306C6.65756 10.7825 6.43657 10.6384 6.29241 10.4174L5.31228 8.92801C5.02403 8.48603 5.14895 7.89017 5.59098 7.59235C6.03295 7.30415 6.6287 7.42896 6.91702 7.87105L7.39747 8.60122L10.1552 6.9966C10.6164 6.73714 11.2026 6.89092 11.4716 7.35213C11.731 7.80384 11.5773 8.38985 11.1161 8.65893ZM21.4265 12.4833C21.2535 12.7427 20.9557 12.8965 20.6386 12.8965H17.2658C16.7373 12.8965 16.3049 12.464 16.3049 11.9356V9.1009C16.3049 8.57248 16.7373 8.14001 17.2658 8.14001H19.1972C19.6008 8.14001 19.9563 8.38985 20.0908 8.75511L21.5322 11.5897C21.6475 11.8876 21.6091 12.2238 21.4265 12.4833Z"
                      fill="#ECB860"
                    />
                    <path
                      d="M9.45979 20.0779C9.45979 21.1447 8.59544 22 7.53803 22C6.47136 22 5.61621 21.1447 5.61621 20.0779C5.61621 19.0205 6.47136 18.1563 7.53803 18.1563C8.59544 18.1562 9.45979 19.0205 9.45979 20.0779Z"
                      fill="#ECB860"
                    />
                    <path
                      d="M20.6724 20.0779C20.6724 21.1447 19.8081 22 18.7507 22C17.684 22 16.8289 21.1447 16.8289 20.0779C16.8289 19.0205 17.684 18.1563 18.7507 18.1563C19.8081 18.1562 20.6724 19.0205 20.6724 20.0779Z"
                      fill="#ECB860"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26566">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span className="text-[28px] font-semibold">560</span>
            </div>
            <div className="flex items-center text-[10px] font-medium  text-[#15994E]">
              <span className="mr-1">55%</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9L9 2.5M9 2.5V8.74M9 2.5L2.76 2.5"
                  stroke="#15994E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full pl-7 pr-7 pt-6 pb-6 border-2 border-borderColor rounded-2xl">
          <h4 className="font-semibold mb-3">Total Late Deliveries</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-[14px]">
              <div className="bg-[#E9F3FE] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C6.19997 1 1.5 5.70002 1.5 11.5C1.5 17.3 6.19997 22 12 22C12.25 22 12.495 21.99 12.74 21.97C11.9296 20.805 11.4968 19.4191 11.5 18C11.5004 16.1436 12.238 14.3633 13.5506 13.0506C14.8633 11.738 16.6436 11.0004 18.5 11C19.9191 10.9968 21.305 11.4296 22.47 12.24C22.49 11.995 22.5 11.75 22.5 11.5C22.5 5.70002 17.8001 1 12 1ZM13 11.5C13 11.7652 12.8947 12.0196 12.7071 12.2071C12.5196 12.3947 12.2652 12.5 12 12.5H7.5C7.23597 12.4982 6.98336 12.3921 6.7973 12.2047C6.61124 12.0174 6.50682 11.7641 6.50682 11.5C6.50682 11.236 6.61124 10.9827 6.7973 10.7953C6.98336 10.608 7.23597 10.5018 7.5 10.5H11V5.00003C10.9991 4.86813 11.0243 4.73736 11.0742 4.61524C11.124 4.49312 11.1975 4.38207 11.2905 4.28848C11.3834 4.19489 11.494 4.12062 11.6157 4.06993C11.7375 4.01925 11.8681 3.99315 12 3.99315C12.1319 3.99315 12.2625 4.01925 12.3843 4.06993C12.5061 4.12062 12.6166 4.19489 12.7096 4.28848C12.8025 4.38207 12.876 4.49312 12.9259 4.61524C12.9757 4.73736 13.0009 4.86813 13 5.00003V11.5Z"
                    fill="#60B0C2"
                  />
                  <path
                    d="M18.5 13C17.5111 13 16.5444 13.2932 15.7222 13.8427C14.8999 14.3921 14.259 15.173 13.8806 16.0866C13.5022 17.0002 13.4031 18.0056 13.5961 18.9755C13.789 19.9454 14.2652 20.8363 14.9645 21.5356C15.6637 22.2348 16.5547 22.711 17.5246 22.904C18.4945 23.0969 19.4998 22.9979 20.4134 22.6194C21.3271 22.241 22.108 21.6001 22.6574 20.7779C23.2068 19.9556 23.5 18.9889 23.5 18C23.5 17.3434 23.3707 16.6932 23.1194 16.0866C22.8682 15.48 22.4999 14.9288 22.0356 14.4645C21.5713 14.0002 21.0201 13.6319 20.4134 13.3806C19.8068 13.1293 19.1566 13 18.5 13ZM18.5 21.5C18.3022 21.5 18.1089 21.4414 17.9444 21.3315C17.78 21.2216 17.6518 21.0655 17.5761 20.8827C17.5004 20.7 17.4806 20.4989 17.5191 20.3049C17.5577 20.1109 17.653 19.9327 17.7928 19.7929C17.9327 19.653 18.1109 19.5578 18.3049 19.5192C18.4988 19.4806 18.6999 19.5004 18.8827 19.5761C19.0654 19.6518 19.2216 19.78 19.3315 19.9444C19.4414 20.1089 19.5 20.3022 19.5 20.5C19.5 20.7652 19.3946 21.0196 19.2071 21.2071C19.0196 21.3947 18.7652 21.5 18.5 21.5ZM19.5 18C19.5 18.2652 19.3946 18.5196 19.2071 18.7071C19.0196 18.8946 18.7652 19 18.5 19C18.2348 19 17.9805 18.8946 17.7929 18.7071C17.6054 18.5196 17.5 18.2652 17.5 18V15.5C17.5 15.2348 17.6054 14.9805 17.7929 14.7929C17.9805 14.6054 18.2348 14.5 18.5 14.5C18.7652 14.5 19.0196 14.6054 19.2071 14.7929C19.3946 14.9805 19.5 15.2348 19.5 15.5V18Z"
                    fill="#60B0C2"
                  />
                </svg>
              </div>

              <span className="text-[28px] font-semibold">27</span>
            </div>
            <div className="flex items-center text-[10px] font-medium text-primaryColor">
              <span className="mr-1">80%</span>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3L3.5 9.5M3.5 9.5V3.26M3.5 9.5H9.74"
                  stroke="#E66161"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full pl-7 pr-7 pt-6 pb-6 border-2 border-borderColor rounded-2xl">
          <h4 className="font-semibold mb-3">Total Shipment</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-[14px]">
              <div className="bg-[#FEECE8] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3611 8.66666C13.3611 9.89389 12.3661 10.8889 11.1388 10.8889C9.91161 10.8889 8.91661 9.89389 8.91661 8.66666C8.91661 7.43944 9.91161 6.44444 11.1388 6.44444C12.3661 6.44444 13.3611 7.43944 13.3611 8.66666ZM20.0277 17C20.0294 19.1478 18.2899 20.8905 16.1422 20.8922C14.8461 20.8933 13.6344 20.2483 12.9111 19.1722L12.8666 19.1C12.4622 18.4744 12.2483 17.745 12.2499 17C12.2499 14.8717 13.9605 13.1383 16.0888 13.1111H16.1388C18.2866 13.1111 20.0277 14.8522 20.0277 17ZM18.2999 15.4278C18.0833 15.2122 17.7333 15.2122 17.5166 15.4278L15.5499 17.3889L14.7611 16.6055C14.5444 16.39 14.1944 16.39 13.9777 16.6055C13.7599 16.8217 13.7583 17.1733 13.9744 17.3911C13.9755 17.3922 13.9766 17.3933 13.9777 17.3944L15.1555 18.5722C15.3716 18.79 15.7233 18.7917 15.9411 18.5755C15.9422 18.5744 15.9433 18.5733 15.9444 18.5722L18.2999 16.2167C18.5177 16.0005 18.5194 15.6489 18.3033 15.4311C18.3022 15.43 18.3011 15.4289 18.2999 15.4278ZM11.7716 19.4111C11.9672 19.7655 12.1877 20.09 12.4611 20.3889C11.9499 21.2167 11.6111 21.7389 11.6055 21.75C11.5022 21.9067 11.3266 22.0011 11.1388 22C10.9499 21.9994 10.7744 21.9033 10.6722 21.7444C10.4222 21.3555 4.47217 12.1667 4.47217 8.66666C4.47217 4.985 7.45717 2 11.1388 2C14.8205 2 17.8055 4.985 17.8055 8.66666C17.7144 9.84166 17.4094 10.99 16.9055 12.0556C16.6516 12.02 16.3955 12.0017 16.1388 12C15.9983 11.9917 15.8572 11.9917 15.7166 12C12.9649 12.2344 10.9249 14.655 11.1594 17.4067C11.2183 18.1 11.4216 18.7733 11.7555 19.3833L11.7716 19.4111ZM14.4722 8.66666C14.4722 6.82555 12.9799 5.33333 11.1388 5.33333C9.29772 5.33333 7.8055 6.82555 7.8055 8.66666C7.8055 10.5078 9.29772 12 11.1388 12C12.9799 12 14.4722 10.5078 14.4722 8.66666Z"
                    fill="#D3867D"
                  />
                </svg>
              </div>

              <span className="text-[28px] font-semibold">587</span>
            </div>
            <div className="flex items-center text-[10px] font-medium text-[#15994E]">
              <span className="mr-1">12%</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9L9 2.5M9 2.5V8.74M9 2.5L2.76 2.5"
                  stroke="#15994E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-4">
        <div className="w-3/5 p-[18px] border-2 border-borderColor rounded-2xl">
          <div>
            <div className="flex justify-between">
              <select
                name=""
                id=""
                className="w-fit text-[#6C757D] text-[14px] border-none outline-none"
              >
                <option value="Average Delivery">Average Delivery</option>
              </select>
              <div className="w-fit bg-[#F8F9FB] rounded">
                <button className="pl-3 pr-3 pt-1 pb-1 rounded">1D</button>
                <button className="pl-3 pr-3 pt-1 pb-1 rounded">5D</button>
                <button className="pl-3 pr-3 pt-1 pb-1 rounded">1M</button>
                <button className="pl-3 pr-3 pt-1 pb-1 rounded bg-white shadow">
                  1Y
                </button>
                <button className="pl-3 pr-3 pt-1 pb-1 rounded">ALL</button>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-8">
              Avg Delivery Time (hours) Route (km)
            </h3>
          </div>
          {/* here will be chart */}
          <MyChart/>
        </div>
        <div className="relative w-2/5 border-2 border-borderColor rounded-2xl">
          <div className="absolute top-4 left-3 z-10">
            <h3 className="text-lg font-semibold  mb-2">
              Track Recent Shipment
            </h3>
            <select className="border-none outline-none bg-transparent" name="" id="">
              <option value="In Transit">In Transit</option>
            </select>
          </div>
          {/* here will be map */}
          <WorldMap />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
