export default function Layout({ children }) {
  console.log("Create 레이아웃 작동");
  return (
    <form>
      <h2>Create Page</h2>
      {children}
    </form>
  );
}
