// components/OurMission.jsx
const OurMission = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          At <span className="font-semibold text-indigo-600">FoodShare</span>,
          we aim to reduce food waste and fight hunger by connecting donors with
          people in need. Every meal shared helps create a stronger, more caring
          community where no one goes to bed hungry.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              ♻️ Reduce Waste
            </h3>
            <p className="text-gray-600">
              We encourage responsible food sharing and prevent good food from
              going to waste.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              ❤️ Feed the Hungry
            </h3>
            <p className="text-gray-600">
              We connect donors to families, students, and individuals in need
              of nutritious meals.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🤝 Build Community
            </h3>
            <p className="text-gray-600">
              Together, we create a network of kindness, compassion, and
              sustainable living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
