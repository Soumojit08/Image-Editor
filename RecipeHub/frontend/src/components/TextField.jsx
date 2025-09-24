const TextField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const ingredients = e.target.value;
    const arr = ingredients.split(",").map((ing) => ing.trim());
    console.log("Parsed Ingredients Array:", arr);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute inset-0 z-10 flex items-center justify-center w-full"
    >
      <div className="bg-zinc-400/10 w-1/4 p-6 rounded-2xl border border-zinc-200/20 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-semibold my-2">Ingredients</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter ingredients separated by commas"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-primary py-2 rounded-md 
        "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default TextField;
