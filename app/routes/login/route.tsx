/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4099da"
            viewBox="0 0 302 91"
            className="mx-auto h-16 w-auto"
          >
            <path d="M48.2 15.3C65 17.9 77.5 31.6 77.5 49.2c0 19.4-15.3 34.7-35.3 34.7S7 68.6 7 49.2c0-17.6 12.7-31.3 29.3-33.9V5.1h11.9v10.2zm15.5 33.8c0-10.7-6.2-18.8-15.5-21.2v20.3h-12V27.9C27 30.3 20.8 38.4 20.8 49.1c0 12.3 9.2 21.7 21.4 21.7s21.5-9.3 21.5-21.7zM114.4 36v12.7c-5.6.1-13.3 1.9-16.7 5.4v28.7H85.1V36.2h12.7v4.9c4.8-3.7 11.5-5.3 16.6-5.1zm2.7 39.4 7-9c3.1 3.9 7.9 6.1 12.7 6.1 3 0 4.9-1.3 4.9-3.5 0-3.2-3-3.9-8.9-5.2-9.4-2-13.9-6.7-13.9-14.3 0-8.2 7.5-14.3 17.4-14.3 6.6 0 12.5 2.3 16.8 6.8l-6.2 8.3c-3.2-2.8-6.6-4.2-10.5-4.2-3 0-5 1.2-5 3.1 0 2.6 2.2 3.1 8.8 4.4 9 1.9 13.9 7.2 13.9 15 0 8.6-7.1 14.7-16.9 14.7-8.1.2-15.9-2.8-20.1-7.9zm76.5 5.1c-3.8 1.9-7.8 2.8-11.6 2.8-9.6 0-17.2-6.3-17.2-18V47.5h-7.6V36.2h7.6V21.4h12.5v14.8h12.5l-3.1 11.4h-9.3v16.2c0 5.8 2.9 8.5 6.9 8.5 1.9 0 4.2-.6 6.4-1.8l2.9 10zm25.8-8.2c5.4 0 9-2.4 11.4-5.8l8.1 8c-4.3 5.8-11.5 9.3-19.5 9.3-14.2 0-24.9-10.4-24.9-24.2 0-13.7 10.5-24.2 24.4-24.2 13.2 0 22.5 10.3 22.5 23.5 0 1.7-.1 3.3-.3 4.5h-33.2c1.3 5.4 5.9 8.9 11.5 8.9zm-11.3-17.9h20.7c-1.3-5-5-8.2-9.8-8.2-5.3-.1-9.3 3.1-10.9 8.2zM295 15.6v67.2h-12.7v-2.2c-3.4 2-7.4 3.1-11.7 3.1-13.6 0-23.9-10.4-23.9-24.2s10.3-24.2 23.9-24.2c4.3 0 8.3 1.1 11.7 3.1V15.6H295zm-12.5 52.2V51.2c-2.1-2.5-5.7-4.3-10-4.3-7.3 0-12.5 5.5-12.5 12.7s5.3 12.7 12.5 12.7c4.3-.1 7.8-1.9 10-4.5z" />
          </svg>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
