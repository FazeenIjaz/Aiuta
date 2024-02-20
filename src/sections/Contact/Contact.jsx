import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative mt-[100px] ml-[50px] flex">
      {/* header */}
      <div className="">
        <div className="w-[28rem] mt-[1rem]">
          <h2 className="text-[1.875rem] leading-[2.125rem] ">
            <span className="text-[#4000ff] underline">
              <a href="mailto:jobs@aiuta.com">Join</a>
            </span>{" "}
            our journey <br />
            to the AI-assisted future
          </h2>
        </div>
        {/* cards */}
        <div className=" flex flex-col gap-[20px] mt-[20px]">
          {/* 1st card */}
          <div className="flex gap-[20px]">
            <div className="p-[1.375rem] text-[1.0625rem] text-[#555] rounded-[1.25rem] w-max bg-card-bg shadow-md">
              <h3 className="text-[#000] text-[1.125rem] font-[500]">USA</h3>
              Incorporated <br />
              in Delaware
            </div>
            <div className="p-[1.375rem] text-[1.0625rem] text-[#555] rounded-[1.25rem] w-max bg-card-bg shadow-md">
              <h3 className="text-[#000] text-[1.125rem] font-[500]">UK</h3>
              Office 103, 239 Kensington High <br />
              Street, London, W8 6SN
            </div>
          </div>
          <div className="p-[1.375rem] text-[1.0625rem] text-[#555] rounded-[1.25rem] w-max bg-card-bg shadow-md">
            <h3 className="text-[#000] text-[1.125rem] font-[500]">Cyprus</h3>
            403, Pamelva court, Georgiou Griva <br />
            Digeni 1, 3105, Limassol
          </div>
        </div>
      </div>
      {/* copy right */}
      <footer className="relative ml-[70px] before:bg-copy-right-before before:content-[''] before:w-[10rem] before:h-[30rem] before:bg-no-repeat before:absolute before:top-0 before:left-0 after:content-[''] after:w-[30rem] after:h-[30rem] after:bg-no-repeat after:absolute after:top-0 after:left-[500px] after:bg-man-footer-after text-[#555] after:bg-contain">
        <p className="mt-[70px] ml-[170px] ">
          Your first ever <br />
          personal AI-stylist
        </p>
        <img
          className="max-w-[22rem] ml-[100px] mt-[50px]"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTAiIGhlaWdodD0iNjkiIGZpbGw9Im5vbmUiPgogIDxwYXRoIGZpbGw9IiM0MDAwRkYiIGQ9Ik0yNC43OTYgMS42MDhhMTIuMjc1IDEyLjI3NSAwIDAgMSAxMi4xNDYgMGwxOC43MjIgMTAuNjc5YzMuNzU5IDIuMTQzIDYuMDc0IDYuMTA1IDYuMDc0IDEwLjM5MnYyMS4zNThjMCA0LjI4OC0yLjMxNSA4LjI1LTYuMDc0IDEwLjM5M0wzNi45NDIgNjUuMTA5YTEyLjI3NSAxMi4yNzUgMCAwIDEtMTIuMTQ2IDBMNi4wNzMgNTQuNDI5QzIuMzE1IDUyLjI4NyAwIDQ4LjMyNiAwIDQ0LjAzOFYyMi42OGMwLTQuMjg3IDIuMzE1LTguMjQ5IDYuMDczLTEwLjM5MmwxOC43MjMtMTAuNjhaIi8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuODA1IDE1LjA1Yy0yLjEyNSAwLTMuNzk2IDEuNjctMy43OTYgMy42NjYgMCAuODU3LS43IDEuNTUtMS41NjIgMS41NWExLjU1NiAxLjU1NiAwIDAgMS0xLjU2Mi0xLjU1YzAtMy43NjUgMy4xMjctNi43NjcgNi45Mi02Ljc2NyAzLjc5NCAwIDYuOTIgMy4wMDIgNi45MiA2Ljc2NyAwIDEuOTk0LS45MTggMy4zMzctMS45MyA0LjM5LS4zNzQuMzg5LS43OTQuNzcyLTEuMTggMS4xMjMtLjEwNi4wOTctLjIxLjE5LS4zMDguMjgyLS4zNjQuMzM1LS43MDQuNjYtMS4wMTYgMS4wMDMuMjEzLjQwOC42NTYgMS4wMDcgMS4zNjggMS43ODkgMS40MDMgMS41NDIgMy41NTkgMy40ODggNi4wNDcgNS41ODUgMi40NzcgMi4wODggNS4yMyA0LjI4MyA3LjgwMyA2LjMybDEuMDYuODRjMi4xNTYgMS43MDYgNC4xNCAzLjI3NSA1LjYyMyA0LjUxNC42Ni41NS43NDYgMS41MjkuMTkxIDIuMTg0YTEuNTcgMS41NyAwIDAgMS0yLjIuMTljLTEuNDUxLTEuMjExLTMuMzk2LTIuNzUtNS41NTctNC40NmwtMS4wNjUtLjg0M2MtMi41NzMtMi4wMzgtNS4zNi00LjI2LTcuODc3LTYuMzgxLTIuNTA0LTIuMTExLTQuNzk0LTQuMTY3LTYuMzQ0LTUuODctLjc2NC0uODQtMS40MjQtMS42NzYtMS44MjQtMi40NDQtLjItLjM4My0uMzg0LS44NDItLjQzNS0xLjMzNy0uMDU0LS41MjguMDQzLTEuMTU4LjQ4OC0xLjcuNTMyLS42NDcgMS4xMDItMS4xOTIgMS42MTMtMS42NjNsLjM3LS4zNGMuMzctLjMzNy42ODgtLjYyNi45ODMtLjkzMy43MTctLjc0NiAxLjA2Ny0xLjM2IDEuMDY3LTIuMjQ5IDAtMS45OTYtMS42NzEtMy42NjYtMy43OTctMy42NjZaTTI4LjQ4OSAyNy45MThhMS41OCAxLjU4IDAgMCAxLS4xNDggMi4xOTVMOS40NzcgNDYuOTE2YTEuNDk4IDEuNDk4IDAgMCAxLTIuMTQ3LS4xNTEgMS41OCAxLjU4IDAgMCAxIC4xNDgtMi4xOTVsMTguODY0LTE2LjgwNGExLjQ5OCAxLjQ5OCAwIDAgMSAyLjE0Ny4xNTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC40MjQgMzkuMzMzSDQ4LjI4djIuOTg3SDE0LjQyNHYtMi45ODdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNODEuNjU2IDQ0LjgyYy0uNDY2IDAtLjg3LS4xNjQtMS4yMTUtLjQ5NGExLjU4IDEuNTggMCAwIDEtLjUxNi0xLjE4MWMwLS4zNTcuMDg0LS43NDYuMjUxLTEuMTY4bDYuMjEyLTE0LjkxN2MuNC0uOTguODYtMS42OSAxLjM4MS0yLjEyOS41My0uNDQgMS4yMjQtLjY1OSAyLjA4LS42NTkuODU2IDAgMS41NDUuMjIgMi4wNjYuNjYuNTMuNDM5Ljk5NiAxLjE0OSAxLjM5NiAyLjEyOGw2LjIxMSAxNC45MTdjLjE3Ny40MTIuMjY1LjgwMi4yNjUgMS4xNjggMCAuNDU4LS4xNzIuODUxLS41MTYgMS4xODEtLjM0NC4zMy0uNzUuNDk1LTEuMjE0LjQ5NS0uOTAzIDAtMS40OTktLjM4LTEuNzg3LTEuMTRsLTEuNTIxLTMuODA1aC05Ljc4NWwtMS41MjIgMy44MDVjLS4zMDcuNzYtLjkwMiAxLjE0LTEuNzg2IDEuMTRabTQuNjYyLTguMzIzaDcuMDc3bC0zLjUzMi04LjgzMi0zLjU0NSA4LjgzMlpNMTA4Ljg0NCA0NC4yNzFjLS4zMzUuMzQtLjc3Mi41MDgtMS4zMTIuNTA4cy0uOTc3LS4xNjktMS4zMTItLjUwOGMtLjMyNi0uMzM5LS40ODktLjc3OC0uNDg5LTEuMzE4VjI2LjE4YzAtLjU0LjE2My0uOTc1LjQ4OS0xLjMwNS4zMzUtLjMzOC43NzItLjUwOCAxLjMxMi0uNTA4cy45NzcuMTcgMS4zMTIuNTA4Yy4zMzUuMzMuNTAzLjc2NS41MDMgMS4zMDV2MTYuNzcyYzAgLjU0LS4xNjguOTgtLjUwMyAxLjMxOFpNMTMzLjI5MiA0Mi42NWMtMS41MTcgMS40ODQtMy41NDEgMi4yMjYtNi4wNzIgMi4yMjZzLTQuNTU1LS43NDItNi4wNzItMi4yMjZjLTEuNTE3LTEuNDkyLTIuMjc1LTMuNDU2LTIuMjc1LTUuODkyVjI2LjE4YzAtLjUzLjE2Ny0uOTY2LjUwMi0xLjMwNS4zNDUtLjMzOC43ODctLjUwOCAxLjMyNi0uNTA4LjUzMSAwIC45NTkuMTcgMS4yODUuNTA4LjMzNS4zNC41MDIuNzc0LjUwMiAxLjMwNXYxMC4yMmMwIDEuNDc0LjQyOCAyLjY2IDEuMjg0IDMuNTU3Ljg1Ni44OTggMi4wMDYgMS4zNDYgMy40NDggMS4zNDYgMS40NTIgMCAyLjYwNi0uNDQ4IDMuNDYyLTEuMzQ2Ljg1Ni0uODk3IDEuMjg0LTIuMDgzIDEuMjg0LTMuNTU3VjI2LjE4YzAtLjUzLjE2My0uOTY2LjQ4OC0xLjMwNS4zMzUtLjMzOC43NjgtLjUwOCAxLjI5OC0uNTA4LjU0IDAgLjk3OC4xNyAxLjMxMy41MDguMzQ0LjM0LjUxNi43NzQuNTE2IDEuMzA1djEwLjU3N2MwIDIuNDM2LS43NjMgNC40LTIuMjg5IDUuODkyWk0xNDkuMzYzIDQ0Ljc4Yy0uNTMgMC0uOTYzLS4xNy0xLjI5OC0uNTA5LS4zMzUtLjMzOS0uNTAyLS43NzgtLjUwMi0xLjMxOFYyOC4xODdoLTQuOTk3Yy0uNTIxIDAtLjk1NC0uMTY1LTEuMjk4LS40OTUtLjMzNS0uMzMtLjUwMy0uNzUtLjUwMy0xLjI2NCAwLS41MTIuMTY4LS45MjkuNTAzLTEuMjUuMzQ0LS4zMy43NzctLjQ5NCAxLjI5OC0uNDk0aDEzLjYwOWMuNTIxIDAgLjk0OS4xNjUgMS4yODQuNDk0LjM0NS4zMjEuNTE3LjczOC41MTcgMS4yNSAwIC41MTMtLjE3Mi45MzQtLjUxNyAxLjI2NC0uMzM1LjMzLS43NjMuNDk1LTEuMjg0LjQ5NWgtNC45OTd2MTQuNzY2YzAgLjU0LS4xNjguOTgtLjUwMyAxLjMxOC0uMzM1LjM0LS43NzIuNTA4LTEuMzEyLjUwOFpNMTYxLjg2OCA0NC44MmMtLjQ2NSAwLS44Ny0uMTY0LTEuMjE1LS40OTRhMS41OCAxLjU4IDAgMCAxLS41MTYtMS4xODFjMC0uMzU3LjA4NC0uNzQ2LjI1MS0xLjE2OEwxNjYuNiAyNy4wNmMuNC0uOTguODYtMS42OSAxLjM4Mi0yLjEyOS41My0uNDQgMS4yMjMtLjY1OSAyLjA3OS0uNjU5Ljg1NiAwIDEuNTQ1LjIyIDIuMDY2LjY2LjUzMS40MzkuOTk2IDEuMTQ5IDEuMzk2IDIuMTI4bDYuMjExIDE0LjkxN2MuMTc3LjQxMi4yNjYuODAyLjI2NiAxLjE2OCAwIC40NTgtLjE3My44NTEtLjUxNyAxLjE4MS0uMzQ0LjMzLS43NDkuNDk1LTEuMjE0LjQ5NS0uOTAzIDAtMS40OTgtLjM4LTEuNzg3LTEuMTRsLTEuNTIxLTMuODA1aC05Ljc4NWwtMS41MjIgMy44MDVjLS4zMDcuNzYtLjkwMiAxLjE0LTEuNzg2IDEuMTRabTQuNjYyLTguMzIzaDcuMDc3bC0zLjUzMi04LjgzMi0zLjU0NSA4LjgzMloiLz4KICA8cGF0aCBmaWxsPSIjNDAwMEZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDMuNDczIDE2LjQyM2MwLTEuMDg0Ljc2OC0xLjk2MiAxLjcxNy0xLjk2Mmg0LjQxNWMuOTQ4IDAgMS43MTcuODc4IDEuNzE3IDEuOTYycy0uNzY5IDEuOTYyLTEuNzE3IDEuOTYyaC00LjQxNWMtLjk0OSAwLTEuNzE3LS44NzgtMS43MTctMS45NjJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBzdHJva2U9IiM0MDAwRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMzExLjM2MiAyNS44NmMtMy44NjIgMC02LjA2OCA0LjQxMy04LjI3NSAxMC41MTgtLjk5OCAyLjc2Mi0yLjQwNiA5LjAzNiAyLjc1NCA5LjU3NyA4LjI3OS44NjggMTIuNjkzLTkuNTc3IDEyLjY5My0xNC4wMjcgMC03LjIyNy0yLjQ5OS02LjA2OC0zLjg2Mi0zLjMxLTEuMzYzIDIuNzU4LS41NTIgOC44MjYgNS41MTYgNy43NiAzLjkzOS0uNjkyIDQuOTY1LTUuMDAyIDYuNjItNy43Nk0yOTguNzA2IDE3LjUwM2wtLjkyOSAzLjA5NSIvPgogIDxwYXRoIHN0cm9rZT0iIzQwMDBGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0yOTYuNTYzIDI2LjQwMmMtNC42NTggMTIuMTg2LTguMzU0IDE4LjI5NS0xLjE5OCAxOS4zMTcgMy44NjIuNTUyIDUuNjUxLTIuMTY4IDcuMTcxLTcuMTcxTTMzMi4zMjUgMzYuODkzYzEuOTI5LTQuMTkgNS40MDQtMTIuNDg1IDEyLjI1NC0xMC45NTUgNS4wNjMgMS4xMy0xLjA4MSAxNC4zNjMtMi4zMjQgMTcuMDIzLTIuMjA3IDQuOTY1IDIuNzU4IDUuNTE3IDYuMDY4IDEuNjU1Ii8+CiAgPHBhdGggc3Ryb2tlPSIjNDAwMEZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTMyOC40NjMgNDYuMjcxYzMuNDE0LTYuMDUyIDcuODE1LTE5LjY3NiAzLjMxLTIwLjk2My0zLjMxLS45NDUtMy44NjIgMS42NTUtNS41MTcgNC40MTNNMjI2LjEyMiAzMy40ODljMi4yOTctNC45MTUgNC44MTMtOS45OTcgOS44MTYtOC41NDcgNC42MDcgMS4zMzUgMy40NzIgNy4wMSAxLjUzNSAxMS4yMTgtMS45MzYgNC4yMDYtNC4zNCAxMS4xNS0xMS4yMTcgOS42MTUtNS4wODQtMS4xMzUtMS4zODItOS42MTUtLjEzNC0xMi4yODZaIi8+CiAgPHBhdGggc3Ryb2tlPSIjNDAwMEZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTI0My42ODEgMjUuODkzYy0zLjQyOCA2LjA3Ni0xMC43MDUgMTcuMjMzLTYuNjEgMTkuNTQ4IDMuODA2IDIuMTUzIDYuNjEgMCA4LjA5My00LjEzNU0yNDUuMTY0IDQxLjMwNmMzLjMxLTEwLjQgMTYuNjkyLTExLjk2OCAxOC4yMzItMTMuMzUxIDIuNzgtMi40OTgtMy4wOC0zLjc1LTUuNjQ2LTIuNzIzLTQuMzk0IDEuNzU4LTEuNTQgNS45NjYgMy4wOCA4LjcyNiA0LjE4MSAyLjQ5OCA1Ljc5NSA0LjY0MSA0LjYyIDguMzctMi4wNTQgNi41MTctMTUuOTkgNC40NjQtMTIuOTEtMi43MjNNMjI3LjUxMSAxOC4xMzdjNC40MTMtNC40MTQgMy44NjItOS4zNzktMi43NTgtOS4zNzktOC44MjcgMC0xMC41MTIgMTYuMTc5LTEyLjY4OSAyOS4yMzhDMjA1Ljk5NyA3NC40MDYgMTkwLjUgNjkgMTg3IDYwIi8+CiAgPHBhdGggc3Ryb2tlPSIjNDAwMEZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTIwNS40NDQgMjguNjE4Yy43MzYtMS40NzEgMy4zMS0zLjk3MiA3LjcyNC0yLjIwNyA1LjUxNiAyLjIwNyA3LjE3MSAyLjc1OSAxMC40ODEgME0yNzcuNzEyIDZjMCA5LjkzLTMuODYxIDI4LjEzNS03LjcyMyAzOS43MiIvPgogIDxwYXRoIHN0cm9rZT0iIzQwMDBGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0yNzQgMzFjMS41LTUuMTQgNS44NTEtNy4wMDggMTAuMzMyLTUuMTRDMjkwLjk1MiAyOC42MTggMjgwIDQzIDI4My41IDQ1LjVjMy4yNjggMi4zMzQgNy0xIDgtNU0yNTkuNjEgNDYuMjcxYzMuMzEgMCAxMC45My0zLjMxIDEyLjU4NS03LjcyMyIvPgo8L3N2Zz4K"
          alt=""
        />
        <p className="text-[.75rem] mt-[10rem] ml-[170px]">
          © 2023 Aiuta USA, Inc.
        </p>
      </footer>
      {/* footer */}
      <footer className="relative w-[555px pr-[px] pl-[280px] before:bg-footer-before before:content-[''] before:w-[34.625rem] before:h-[39.5rem] before:bg-no-repeat before:absolute before:top-0 before:left-[190px] before:-z-10 z-10 before:-mt-[100px] text-white">
        <p className="mt-[100px] ml-[100px] w-[220px] text-[20px] font-[500] ">
          Follow us for upcoming news & events
        </p>
        <div className="flex flex-col gap-10 ml-[100px]">
          {/* social links */}
          <div className="flex gap-[10px] mt-[30px]">
            <div className="w-[2rem] h-[2rem] hover:text-card-bg">
              <a
                href="https://www.linkedin.com/company/aiuta-inc/"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 29 30"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M14.246.677c-3.869 0-4.355.017-5.875.086-1.516.07-2.55.31-3.457.663a6.968 6.968 0 0 0-2.523 1.643A6.959 6.959 0 0 0 .748 5.592C.396 6.498.154 7.533.086 9.05.016 10.57 0 11.054 0 14.923c0 3.87.016 4.354.086 5.874.068 1.516.31 2.552.662 3.458a6.98 6.98 0 0 0 1.643 2.523 7.002 7.002 0 0 0 2.523 1.643c.906.352 1.943.593 3.459.662 1.52.07 2.004.086 5.873.086 3.87 0 4.354-.016 5.873-.086 1.518-.069 2.553-.31 3.46-.662a6.986 6.986 0 0 0 2.523-1.643 6.983 6.983 0 0 0 1.642-2.523c.352-.906.594-1.942.662-3.458.07-1.52.086-2.005.086-5.874 0-3.869-.015-4.354-.086-5.874-.068-1.516-.31-2.552-.662-3.457a6.978 6.978 0 0 0-1.642-2.524 6.985 6.985 0 0 0-2.524-1.643c-.906-.352-1.941-.593-3.459-.662-1.52-.07-2.004-.086-5.873-.086ZM8.96 24.5V11.775H4.73V24.5h4.23ZM6.846 10.037c1.474 0 2.392-.977 2.392-2.198C9.211 6.59 8.32 5.64 6.873 5.64S4.48 6.59 4.48 7.839c0 1.221.918 2.198 2.336 2.198h.03Zm8.683 14.462H11.3s.056-11.53 0-12.724h4.23v1.8c.563-.867 1.569-2.098 3.81-2.098 2.784 0 4.87 1.818 4.87 5.726V24.5h-4.23v-6.807c0-1.71-.613-2.877-2.142-2.877-1.168 0-1.863.787-2.17 1.546-.111.272-.139.652-.139 1.032V24.5Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-[2rem] h-[2rem] hover:text-card-bg">
              <a
                href="https://web.facebook.com/aiutacom?_rdc=1&_rdr"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 29 30"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M8.372.763c1.52-.07 2.005-.086 5.874-.086 3.869 0 4.354.016 5.874.086 1.516.069 2.552.31 3.458.662.937.364 1.73.851 2.523 1.643a6.975 6.975 0 0 1 1.643 2.524c.352.905.593 1.941.662 3.457.07 1.52.086 2.005.086 5.874 0 3.87-.016 4.354-.086 5.874-.069 1.516-.31 2.552-.662 3.458a6.98 6.98 0 0 1-1.643 2.523 6.977 6.977 0 0 1-2.523 1.643c-.906.352-1.942.593-3.458.662-.682.032-1.155.052-1.82.065v-10.22h3.77l.564-4.227h-4.335v-2.698c0-1.223.352-2.057 2.17-2.057h2.317v-3.78A32.885 32.885 0 0 0 19.409 6c-3.341 0-5.63 1.97-5.63 5.585v3.117H10v4.226h3.78V29.17c-3.445-.001-3.951-.019-5.407-.086-1.517-.069-2.552-.31-3.458-.662a6.983 6.983 0 0 1-2.524-1.643 6.977 6.977 0 0 1-1.643-2.523c-.352-.906-.593-1.942-.662-3.458C.016 19.277 0 18.792 0 14.923s.016-4.354.086-5.874c.069-1.516.31-2.551.662-3.457A6.982 6.982 0 0 1 2.39 3.07a6.977 6.977 0 0 1 2.523-1.643C5.82 1.073 6.856.832 8.372.763Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-[2rem] h-[2rem] hover:text-card-bg">
              <a href="https://www.instagram.com/aiutacom/" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 29 30"
                >
                  <path
                    fill="currentColor"
                    d="M14.754 3.245c3.804 0 4.255.015 5.757.083 1.389.063 2.143.295 2.645.49.665.259 1.14.568 1.639 1.066.498.499.807.973 1.065 1.638.195.502.427 1.256.49 2.645.069 1.502.083 1.953.083 5.757 0 3.804-.014 4.254-.083 5.756-.063 1.39-.295 2.144-.49 2.646a4.419 4.419 0 0 1-1.066 1.638 4.405 4.405 0 0 1-1.638 1.065c-.502.195-1.256.427-2.645.49-1.502.07-1.953.084-5.757.084-3.804 0-4.254-.015-5.756-.083-1.389-.064-2.143-.296-2.646-.49a4.419 4.419 0 0 1-1.638-1.066 4.405 4.405 0 0 1-1.065-1.638c-.195-.502-.427-1.257-.49-2.646-.069-1.501-.083-1.952-.083-5.756 0-3.804.014-4.254.083-5.757.063-1.389.295-2.143.49-2.645a4.42 4.42 0 0 1 1.065-1.638 4.4 4.4 0 0 1 1.638-1.066c.503-.195 1.257-.427 2.646-.49 1.502-.068 1.952-.083 5.756-.083m0-2.567c-3.869 0-4.354.017-5.873.086-1.516.07-2.552.31-3.458.662A6.977 6.977 0 0 0 2.9 3.07a6.982 6.982 0 0 0-1.644 2.523C.905 6.499.664 7.534.595 9.05c-.07 1.52-.086 2.005-.086 5.874 0 3.869.016 4.354.086 5.874.069 1.516.31 2.552.662 3.458A6.977 6.977 0 0 0 2.9 26.779a6.983 6.983 0 0 0 2.523 1.643c.906.352 1.942.593 3.458.662 1.52.07 2.005.086 5.874.086 3.869 0 4.354-.016 5.874-.086 1.516-.069 2.552-.31 3.457-.662a6.977 6.977 0 0 0 2.524-1.643 6.982 6.982 0 0 0 1.643-2.523c.352-.906.593-1.942.662-3.458.07-1.52.086-2.005.086-5.874 0-3.87-.016-4.354-.086-5.874-.069-1.516-.31-2.552-.662-3.458A6.976 6.976 0 0 0 26.61 3.07a6.981 6.981 0 0 0-2.523-1.643c-.906-.352-1.942-.593-3.458-.662-1.52-.07-2.005-.086-5.874-.086Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M14.754 7.607a7.315 7.315 0 1 0 0 14.63 7.315 7.315 0 0 0 0-14.63Zm0 12.064a4.748 4.748 0 1 1 0-9.496 4.748 4.748 0 0 1 0 9.496Zm7.605-10.643a1.71 1.71 0 1 0 0-3.419 1.71 1.71 0 0 0 0 3.42Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* subscribe */}
          <div className="mt-[32px] text-center rounded-full">
            <button className="w-[250px] h-[50px] text-[#4000ff] font-[500] rounded-full text-[22px] bg-white hover:bg-card-bg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-[20px] mt-[100px] ml-[100px] w-[300px]">
          <p className="text-[#fff] underline cursor-pointer hover:no-underline hover:text-card-bg">
            Terms of service
          </p>
          <p className="text-[#fff] underline cursor-pointer hover:no-underline hover:text-card-bg">
            Privacy policy
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
