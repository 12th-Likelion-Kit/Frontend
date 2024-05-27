
import dayjs from "dayjs";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>오늘은 📆</h3>
      <h1>{dayjs("2024-05-07").format("YYYY-MM-DD dddd")}</h1>
    </div>
  )
};

export default Header;