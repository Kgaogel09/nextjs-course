function UserProfilePage({ username }) {
  return <div>{username}</div>;
}

export default UserProfilePage;

//Page cannot be pre-rendered, because we need to know for which user
//Runs for each coming server request so there is no need to revalidate
//Used for dynamic data

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}

// CLIENT_SIDE DATA FETCHING
// some data does'nt need to be pre rendered
// highly user-specific data (e.g last orders in an online shop)
// Partial data (e.g data that's only used on a part of a page)
// Pre-fetching data for page generation might not be required
// Traditional client-side data fetching (e.g useEffect(), with fetch())
