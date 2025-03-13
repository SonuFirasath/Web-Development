import { submitaction } from "./actions/Submitactions";
export default function Home() {

  return (
   <div className="w-2/3 mx-auto my-12">
      <form action={submitaction}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className = "text-white"type="text" />
        </div>
        <div>
          <label htmlFor="add">Adress</label>
          <input name="add" id="add" className = "text-white"type="text" />
        </div>
      <div>
        <button className="border border-white">Submit</button>
      </div>
      </form>
   </div>
  );
}
