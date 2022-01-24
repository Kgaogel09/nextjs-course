import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // Load Data
    router.push("/clients/max/projecta");

    // Alternative
    // router.push({
    //   pathname: "/clients/[id]/[clientId]",
    //   query: { id: "max", clientId: "projecta" },
    // });
  }
  return (
    <div>
      <h1>The Clients Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
