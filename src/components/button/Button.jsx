export default function Button(props) {
  console.log("props", props);
  return (
    <>
      <button className="px-2.5 py-2 bg-yellow-500 text-white font-medium">
        {props.title ?? "Default"} {props.price}
      </button>
    </>
  );
}

// There are 2 export , default export ,  name export
