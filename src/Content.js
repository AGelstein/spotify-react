import SearchParams from "./SearchParams";

SearchParams;

const Content = ({ token }) => {
  console.log("consoletoken", token);
  return (
    <div className="p-20  bg-slate-200">
      <SearchParams token={token}></SearchParams>
    </div>
  );
};

export default Content;
