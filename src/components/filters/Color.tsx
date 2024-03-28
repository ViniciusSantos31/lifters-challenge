import { useQuery } from "@tanstack/react-query";
import { getColors } from "../../services/product";
import { Cor, Product } from "../../types/product";

interface FilterColorProps extends React.HTMLAttributes<HTMLButtonElement> {
  product?: Product;
  size?: number;
  setColor?: (color: Cor) => void;
}

export const FilterColor: React.FC<FilterColorProps> = ({
  product,
  size = 25,
  setColor,
}) => {
  const { data: colors } = useQuery<Cor[]>({
    queryKey: ["colors"],
    queryFn: () => getColors(product ?? null),
    staleTime: 1000 * 60 * 60 * 2,
  });

  const handleAddRemoveClass = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const buttons =
      document.querySelectorAll<HTMLButtonElement>("#colors>.selected");

    buttons.forEach((button) => button.classList.remove("selected"));
    target.classList.add("selected");
  }

  return (
    <div id="colors" className="w-75 d-flex gap-1 flex-wrap">
      {colors?.map((color) => (
        <button
          key={color.nome}
          id={`color-${color.nome}`}
          className="w-100 rounded-circle p-1 border border-white"
          style={{
            maxWidth: size,
            minHeight: size,
            backgroundColor: color.codigo.padEnd(6, "00"),
          }}
          onClick={(e) => {
            setColor?.(color)
            handleAddRemoveClass(e)
          }}
        />
      ))}
    </div>
  );
};
