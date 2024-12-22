// Basic Button component
const Button: React.FC<{ title: string }> = ({ title }) => {
  return <button className="btn">{title}</button>;
};

export default Button;
