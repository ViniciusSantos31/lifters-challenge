import { useQuery } from "@tanstack/react-query";
import { getColors } from "../../services/product";
import { Cor, Product } from "../../types/product";

interface FilterColorProps {
  product?: Product;
  size?: number;
}

export const FilterColor: React.FC<FilterColorProps> = ({
  product,
  size = 25,
}) => {
  const { data: colors } = useQuery<Cor[]>({
    queryKey: ["colors"],
    queryFn: () => getColors(product ?? null),
  });

  return (
    <div className="w-75 d-flex gap-1 flex-wrap">
      {colors?.map((color) => (
        <button
          key={color.nome}
          id={`color-${color.nome}`}
          className="w-100 rounded-circle p-1 border border-black"
          style={{
            maxWidth: size,
            minHeight: size,
            backgroundColor: color.codigo.padEnd(6, "00"),
          }}
        />
      ))}
    </div>
  );
};
