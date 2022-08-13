import SearchParams from "./SearchParams";

const Content = ({ token }) => {
  return (
    <div className="p-20  bg-slate-200">
      <SearchParams token={token}></SearchParams>
    </div>
  );
};

export default Content;
