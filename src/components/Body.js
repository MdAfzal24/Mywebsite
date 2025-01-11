const Body = () => {
  return (
    <div className="p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to My Website</h2>
        <p className="text-gray-600">This is a sample React website styled with Tailwind CSS.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
    </div>
  );
};

export default Body;
