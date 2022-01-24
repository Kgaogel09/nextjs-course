import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Max" },
    { id: "john", name: "John" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/* <li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/john">John</Link>
        </li> */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
