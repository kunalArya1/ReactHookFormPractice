import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" text-center">
      <h1 className=" p-5 mt-[10%] text-2xl">React Hook Form Example</h1>
      
    </div>
  );
};

export default App;
