import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between font-monteserrat mt-[50px] pb-[20px]">
      <div className="">
        <p className="text-[#555]">© 2023 Aiuta USA, Inc.</p>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex gap-[20px]">
          <p className="underline hover:no-underline cursor-pointer">Terms of service</p>
          <p className="underline hover:no-underline cursor-pointer">
            Privacy Policy
          </p>
        </div>
        {/* social icons */}
        <div className="flex  gap-[10px]">
          <div className="w-[2rem] h-[2rem]">
            <a
              href="https://www.linkedin.com/company/aiuta-inc/"
              className="text-[#4000ff]"
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
          <div className="w-[2rem] h-[2rem]">
            <a
              href="https://web.facebook.com/aiutacom?_rdc=1&_rdr"
              className="text-[#4000ff]"
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
          <div className="w-[2rem] h-[2rem]">
            <a
              href="https://www.instagram.com/aiutacom/"
              className="text-[#4000ff]"
            >
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
      </div>
    </footer>
  );
};

export default Footer;
