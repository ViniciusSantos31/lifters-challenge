import { Cor } from "../types/product";

type ColorButtonProps = {
  color: Cor;
  size?: number
}

export const ColorButton: React.FC<ColorButtonProps> = ({ color, size = 25 }) => {
  return (
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
  )
}