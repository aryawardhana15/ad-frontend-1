import Profile from "/src/components/layouts/ProfileLayout.jsx";

const storedUser = JSON.parse(localStorage.getItem("user"));

const App = () => {
  return (
    <Profile storedUser={storedUser} />
  );
};

export default App;
