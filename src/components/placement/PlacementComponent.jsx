import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PlacementComponent = () => {
  // State for API data
  const [placementStats, setPlacementStats] = useState(null);
  const [companyLogos, setCompanyLogos] = useState([]);
  const [previousPlacements, setPreviousPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data - Replace with actual API calls
  const mockData = {
    stats: {
      placementRate: "100%",
      averagePackage: "6.5 LPA",
      highestPackage: "15 LPA",
      totalStudents: "1200+"
    },
    companies: [
      { id: 1, name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
      { id: 2, name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
      { id: 3, name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
      { id: 4, name: "HCL", logo: "https://logo.clearbit.com/hcl.com" },
      { id: 5, name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      { id: 6, name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
      { id: 7, name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
      { id: 8, name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" }
    ],
    placements: [
      {
        id: 1,
        name: "Rahul Sharma",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        company: "TCS",
        role: "Network Engineer",
        package: "5.5 LPA",
        batch: "2023"
      },
      // Add more placement records...
    ]
  };

  // API call simulation
  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        setLoading(true);
        
        // Replace these with actual API calls
        // const statsResponse = await fetch('/api/placement-stats');
        // const companiesResponse = await fetch('/api/company-logos');
        // const placementsResponse = await fetch('/api/previous-placements');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setPlacementStats(mockData.stats);
        setCompanyLogos(mockData.companies);
        setPreviousPlacements(mockData.placements);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlacementData();
  }, []);

  // Carousel settings
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading placement data: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Placement Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center backdrop-blur-sm">
                <p className="text-white text-sm font-medium mb-1">Placement Rate</p>
                <p className="text-3xl font-bold text-white">{placementStats.placementRate}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center backdrop-blur-sm">
                <p className="text-white text-sm font-medium mb-1">Average Package</p>
                <p className="text-3xl font-bold text-white">{placementStats.averagePackage}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center backdrop-blur-sm">
                <p className="text-white text-sm font-medium mb-1">Highest Package</p>
                <p className="text-3xl font-bold text-white">{placementStats.highestPackage}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center backdrop-blur-sm">
                <p className="text-white text-sm font-medium mb-1">Students Placed</p>
                <p className="text-3xl font-bold text-white">{placementStats.totalStudents}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Carousel Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Recruiters</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Slider {...carouselSettings}>
              {companyLogos.map((company) => (
                <div key={company.id} className="px-2">
                  <div className="flex items-center justify-center h-20">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=' + company.name;
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Previous Placements Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Placed Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousPlacements.map((placement) => (
              <div key={placement.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={placement.photo} 
                      alt={placement.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800">{placement.name}</h3>
                      <p className="text-gray-600">{placement.batch} Batch</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium">{placement.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Role:</span>
                      <span className="font-medium">{placement.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-medium text-blue-600">{placement.package}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlacementComponent;