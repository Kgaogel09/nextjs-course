import { useRouter } from "next/router";

function SelectedClientPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Selected Clients Project Page</h1>
    </div>
  );
}

export default SelectedClientPage;
