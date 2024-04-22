import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  const registerHandle = (data) => {
    console.log(data);
  };
  return (
    <div className=" text-center">
      <h1 className=" p-5 mt-[10%] text-2xl">React Hook Form Example</h1>
      <form onSubmit={handleSubmit(registerHandle)}>
        <input
          className="p-3"
          type="text"
          placeholder="Enter your Name "
          {...register("name", { required: true })}
        />
        <br /> <br />
        <input
          type="text"
          className=" p-3"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        <button className=" px-3 py-2 rounded-md bg-green-500">Submit</button>
      </form>
    </div>
  );
};

export default App;
