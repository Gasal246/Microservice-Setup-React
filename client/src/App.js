import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <main className="h-screen w-full flex items-center flex-col justify-center">
    <PostCreate />
    <div className="mt-5"></div>
    <PostList />
    </main>
  );
}

export default App;
