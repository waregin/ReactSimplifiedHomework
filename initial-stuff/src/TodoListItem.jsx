export function TodoListItem({ children, isComplete }) {
  return (
    <>
      <input type="checkbox" checked={isComplete} />
      <label>{children}</label>
    </>
  );
}
