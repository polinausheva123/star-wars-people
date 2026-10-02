import { Button } from "./Button";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number | ((prev: number) => number)) => void;
  isFetching?: boolean;
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  isFetching = false,
}: PaginationProps) => {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center gap-4 text-sm font-medium"
    >
      <Button
        onClick={() => onPageChange((p) => Math.max(p - 1, 1))}
        disabled={page === 1 || isFetching}
      >
        Previous
      </Button>

      <span className="text-gray-700 whitespace-nowrap">
        Page {page} of {totalPages}
      </span>

      <Button
        onClick={() => onPageChange((p) => Math.min(p + 1, totalPages))}
        disabled={page >= totalPages || isFetching}
      >
        Next
      </Button>
    </nav>
  );
};
