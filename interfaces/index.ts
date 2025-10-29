export interface CardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
