"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams(); // gets dynamic route param "id"
  console.log(id);

  return (
    <div>
      <h5>Welcome to {id} course</h5>
    </div>
  );
};

export default page;
