import './App.css';
export default function App() {
  return (
    <>
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </>
  );
}

function MyComponent() {
  return <div class="body1">This is my component</div>;
}
