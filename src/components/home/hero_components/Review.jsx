export function Review() {
  return (
    <div className="flex justify-between items-center px-16 my-32">
      <div>
        <p className="w-2/3 text-center text-lg">
          <em>“Simple, straightforward, and super powerful”</em>
        </p>
      </div>
      <span className="block h-24 w-0.5 bg-gray-500"></span>
      <div>
        <p className="w-2/3 text-center text-lg">
          <em>“The best to-do list app on the market”</em>
        </p>
      </div>
      <span className="block h-24 w-0.5 bg-gray-500"></span>
      <div>
        <p className="text-center text-lg">
          <em>“Nothing short of stellar”</em>
        </p>
      </div>
    </div>
  );
}
