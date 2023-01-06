import Calendar from "./components/Calendar";

function App() {
  // const value = `2022-12-31`;

  const onSelect = (dayjs, dateString) => {
    console.log(`dayjs=${dayjs}, dateString=${dateString}`);
  };

  return (
    <div>
      <Calendar 
      // value={value} 
      onSelect={onSelect} 
      />
    </div>
  );
}

export default App;
