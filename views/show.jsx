const React = require("react");
const Default = require("./layouts/Default");

function Show({ bread, index }) {
   return (
    <Default>
      <li>
        <a href="/breads">Go home</a>
      </li>
      <h3>{bread.name}</h3>

      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>

      <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>

    {/*   <a href={`/breads/${index}/edit`}>
        <button>Edit</button>
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
      </a> */}

      <img src={bread.image} alt={bread.name} />
    </Default>
  );
}

module.exports = Show;
