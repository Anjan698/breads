const React = require("react");
const Default = require("./layouts/Default");

function New({bakers}) {
  return (
    <Default>
      <h2>Add a new bread</h2>
      <label htmlFor="baker">Baker</label>
      
      <form action="/breads" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
        <br />
        <input type="submit" />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          <option value="Rachel">Rachel</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Chandler">Chandler</option>
          <option value="Ross">Ross</option>
          <option value="Phoebe">Phoebe</option>
        </select>
      </form>
      <div className="backButton">
        <a href="/breads">
          <button>Go back to the index</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = New;
