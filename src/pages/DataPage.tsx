import { useState } from "react";
import { useStarWarsPeople } from "../hooks/useStarWarsPeople";
import { DataCards } from "../components/DataCards";
import { DataPageTable } from "../components/DataPageTable";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../components/ui/Pagination";
import { Button } from "../components/ui/Button";

export const DataPage = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, totalPages, isLoading, isFetching, error, refetch } =
    useStarWarsPeople(page);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600">
          <span className="sr-only">Loading</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-3">
        <p className="text-red-600 font-medium">Error: {error.message}</p>

        <Button type="button" onClick={refetch}>
          Retry
        </Button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <p className="text-center py-8">No data found.</p>;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-3 gap-6 w-full max-w-5xl mx-auto py-6">
      <div className="w-full flex items-center justify-between pb-3 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">
          Star Wars Characters
        </h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div
        className={`w-full transition-opacity duration-200 ${isFetching ? "opacity-50 pointer-events-none" : "opacity-100"}`}
      >
        <div className="md:hidden">
          <DataCards data={data} />
        </div>

        <div className="hidden md:block">
          <DataPageTable data={data} />
        </div>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        isFetching={isFetching}
      />
    </div>
  );
};
