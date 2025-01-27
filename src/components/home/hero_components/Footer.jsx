export function Footer() {
  return (
    <footer className="flex flex-col items-center py-5">
      <div className="flex justify-between py-10 w-full">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <button className="h-fit p-1 bg-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
            </button>
            <p className="text-2xl font-semibold">todoit</p>
          </div>
          <p className="text-lg w-6/10">
            Join millions of people who organize work and life with Todoist.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <strong className="pb-4">Features</strong>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="">How it works</a>
              </li>
              <li>
                <a href="">For teams</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Templates</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <strong className="pb-4">Resources</strong>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="">Download Apps</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Productivity</a>{" "}
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <strong className="pb-4">Company</strong>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Inspiration Hub</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        Developed by{" "}
        <a
          className="font-bold hover:underline"
          href="https://github.com/zemoCode25"
          target="_blank"
        >
          Zemo
        </a>
      </small>
    </footer>
  );
}
