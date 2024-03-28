import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/product";

export const FilterCategory: React.FC = () => {
  const { data: filters } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <ul className="list-group border-0">
      {filters?.map((filter) => (
        <FilterCategoryItem key={filter} filter={filter} />
      ))}
    </ul>
  );
};

interface FilterCategoryItemProps {
  filter: string;
}

const FilterCategoryItem: React.FC<FilterCategoryItemProps> = ({ filter }) => {
  return (
    <li className="list-group-item border-0 p-0">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={`categroy-${filter}`}
          value=""
        />
        <label className="form-check-label" htmlFor={`categroy-${filter}`}>
          {filter}
        </label>
      </div>
    </li>
  );
};
