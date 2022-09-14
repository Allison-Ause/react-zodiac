// export default function Button() {
//   function handleClick() {
//     alert("You've made these astro-kittens very happy!");
//   }
//   return <button onClick={handleClick}>Pet Cats!</button>;
// }

export default function Button({ count, onClick }) {
  return <button onClick={onClick}>Pet {count} times.</button>;
}
