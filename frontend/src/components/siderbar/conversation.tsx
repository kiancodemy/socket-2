export default function conversation() {
  return (
    <div>
      <div className="hover:bg-blue-700 px-1 flex items-center justify-between rounded-md py-2 text-white">
        <div className="flex justify-center items-center gap-x-1">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <h1>kian</h1>
        </div>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
