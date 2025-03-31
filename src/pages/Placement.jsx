const placements = [
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  }
  , {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  }
  , {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
  {
    image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743363918/placement_ovhp2d.png",
    company: "Company 1"
  },
];

const Placement = () => {
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Placement Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placements.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden ">
            <img src={item.image} alt={item.company} className="w-full h-50 object-cover" />
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
