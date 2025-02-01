import React from "react";

const Calendar = () => {
  const dayMap = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const rowOne = [
    {
      value: "",
      visible: false,
      isRed: false,
    },
    {
      value: "",
      visible: false,
      isRed: false,
    },
    {
      value: "",
      visible: false,
      isRed: false,
    },
    {
      value: "",
      visible: false,
      isRed: false,
    },
    {
      value: "1",
      visible: true,
      isRed: false,
    },
    {
      value: "2",
      visible: true,
      isRed: false,
    },
    {
      value: "3",
      visible: true,
      isRed: false,
    },
  ];
  const rowTwo = [
    {
      value: "4",
      visible: true,
      isRed: true,
    },
    {
      value: "5",
      visible: true,
      isRed: true,
    },
    {
      value: "6",
      visible: true,
      isRed: true,
    },
    {
      value: "7",
      visible: true,
      isRed: false,
    },
    {
      value: "8",
      visible: true,
      isRed: false,
    },
    {
      value: "9",
      visible: true,
      isRed: false,
    },
    {
      value: "10",
      visible: true,
      isRed: false,
    },
  ];
  const rowThree = [
    {
      value: "11",
      visible: true,
      isRed: true,
    },
    {
      value: "12",
      visible: true,
      isRed: false,
    },
    {
      value: "13",
      visible: true,
      isRed: false,
    },
    {
      value: "14",
      visible: true,
      isRed: false,
    },
    {
      value: "15",
      visible: true,
      isRed: false,
    },
    {
      value: "16",
      visible: true,
      isRed: false,
    },
    {
      value: "17",
      visible: true,
      isRed: false,
    },
  ];
  const rowFour = [
    {
      value: "18",
      visible: true,
      isRed: true,
    },
    {
      value: "19",
      visible: true,
      isRed: false,
    },
    {
      value: "20",
      visible: true,
      isRed: false,
    },
    {
      value: "21",
      visible: true,
      isRed: false,
    },
    {
      value: "22",
      visible: true,
      isRed: false,
    },
    {
      value: "23",
      visible: true,
      isRed: false,
    },
    {
      value: "24",
      visible: true,
      isRed: false,
    },
  ];
  const rowFive = [
    {
      value: "25",
      visible: true,
      isRed: true,
    },
    {
      value: "26",
      visible: true,
      isRed: false,
    },
    {
      value: "27",
      visible: true,
      isRed: false,
    },
    {
      value: "28",
      visible: true,
      isRed: false,
    },
    {
      value: "29",
      visible: true,
      isRed: false,
    },
    {
      value: "30",
      visible: true,
      isRed: false,
    },
    {
      value: "31",
      visible: true,
      isRed: false,
    },
  ];

  return (
    <section className="flex h-screen w-full flex-col items-center gap-8 bg-purple-300 p-5 font-notokr text-text-base">
      <div className="flex w-full flex-[1] flex-col items-center font-notokr">
        <h1 className="text-lg italic">WEDDING DAY</h1>
        <h3 className="text-4xl">2025</h3>
        <h3 className="text-4xl">5/24</h3>
        <h3 className="text-lg">토요일 오후 1시 10분</h3>
      </div>

      <div className="header flex w-full flex-[2] flex-col">
        <div className="h-[1px] w-full bg-black" />
        <div className="days grid grid-cols-7 py-4">
          {dayMap.map((item, index) => {
            const isRed = item === "SUN";
            return (
              <div
                key={index}
                className="flex w-full items-center justify-center"
              >
                <p
                  className={`font-notokr ${isRed ? "text-red-600" : "text-text-base"}`}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <div className="h-[1px] w-full bg-black" />

        <div className="flex w-full flex-col gap-5 py-10">
          <div className="grid-row-1 grid w-full grid-cols-7">
            {rowOne.map((item, index) => {
              const isRed = item.isRed;

              return (
                <div
                  key={index}
                  className="flex w-full items-center justify-center"
                >
                  <p
                    className={`font-notokr ${isRed ? "text-red-600" : "text-text-base"}`}
                    key={index}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid-row-2 grid w-full grid-cols-7">
            {rowTwo.map((item, index) => {
              const isRed = item.isRed;

              return (
                <div
                  key={index}
                  className="flex w-full items-center justify-center"
                >
                  <p
                    className={`font-notokr ${isRed ? "text-red-600" : "text-text-base"}`}
                    key={index}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid-row-3 grid w-full grid-cols-7">
            {rowThree.map((item, index) => {
              const isRed = item.isRed;

              return (
                <div
                  key={index}
                  className="flex w-full items-center justify-center"
                >
                  <p
                    className={`font-notokr ${isRed ? "text-red-600" : "text-text-base"}`}
                    key={index}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid-row-4 grid w-full grid-cols-7">
            {rowFour.map((item, index) => {
              const isRed = item.isRed;
              const isTargetDay = item.value === "24";

              return (
                <div
                  key={index}
                  className={`flex aspect-square w-full items-center justify-center ${isTargetDay ? "rounded-[50%] border-[1px] border-black" : null}`}
                >
                  <p
                    className={`font-notokr ${isTargetDay ? "text-blue-500" : isRed ? "text-red-600" : "text-text-base"}`}
                    key={index}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid-row-5 grid w-full grid-cols-7">
            {rowFive.map((item, index) => {
              const isRed = item.isRed;

              return (
                <div
                  key={index}
                  className="flex w-full items-center justify-center"
                >
                  <p
                    className={`font-notokr ${isRed ? "text-red-600" : "text-text-base"}`}
                    key={index}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[1px] w-full bg-black" />
      </div>
    </section>
  );
};

export default Calendar;
