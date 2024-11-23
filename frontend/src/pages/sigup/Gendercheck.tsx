type checker = {
  gender: string;
  changeGeender: (e: any) => void;
};
export default function Gendercheck({ gender, changeGeender }: checker) {
  return (
    <div className="flex gap-x-3 p-2 ">
      <div className="flex gap-x-2">
        <label className="capitalize text-white">male</label>
        <input
          onChange={(e) => changeGeender(e)}
          type="radio"
          value="male"
          name="male"
          checked={gender === "male"}
        />
      </div>
      <div className="flex gap-x-2">
        <label className="capitalize text-white">female</label>
        <input
          onChange={(e) => changeGeender(e)}
          type="radio"
          checked={gender === "female"}
          value="female"
          name="famale"
        />
      </div>
    </div>
  );
}
