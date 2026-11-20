export interface layoutProps {
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  content: string;
}

export type Size = "small" | "medium" | "large";
export type Shape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
  title?: string;
  size: Size;
  shape: Shape;
  onClick?: () => void;
}

export interface PostProps {
  id: number;
  userId: number;
  title: string;
  content: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
}
