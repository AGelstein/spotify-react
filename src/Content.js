import SearchParams from "./SearchParams";

SearchParams;

const Content = ({ token }) => {
  console.log("consoletoken", token);
  return (
    <div className="pt-20">
      <SearchParams token={token}></SearchParams>
    </div>
  );
};

export default Content;
