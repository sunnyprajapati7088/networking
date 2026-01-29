import { useState, useEffect } from "react";

const Placement = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch placement data from the local API
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        // const response = await fetch("https://lms-backend-f9h3.onrender.com/api/placement/");
      
        const data =[
    {
        "_id": "681a47577753425bbaeaa32c",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552659/dxr7votg7ehogptuvwhs.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:31:03.491Z",
        "updatedAt": "2025-05-06T17:31:03.491Z",
        "__v": 0
    },
    {
        "_id": "681a473c7753425bbaeaa326",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552633/qmchrsilgwofmopqhddc.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-06T17:30:36.203Z",
        "updatedAt": "2025-05-06T17:38:04.232Z",
        "__v": 0
    },
    {
        "_id": "681a47cd7753425bbaeaa330",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552680/ersqfcnaled0ckz9tgcq.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:33:01.657Z",
        "updatedAt": "2025-05-06T17:33:01.657Z",
        "__v": 0
    },
    {
        "_id": "67f14ef09d2888a8d7393b8d",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743867627/psvlalkflfimiajbymdq.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-05T15:40:32.727Z",
        "updatedAt": "2025-05-06T17:05:37.053Z",
        "__v": 0
    },
    {
        "_id": "68308b8a74e4f3750ea3f6b6",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1748011910/fiknimjtjaqtw9c0ma2s.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-23T14:51:54.061Z",
        "updatedAt": "2025-05-23T14:53:24.479Z",
        "__v": 0
    },
    {
        "_id": "67ffde4a9723f97aa5ebb4bd",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1744821828/keahdwqfhcohg62jyw9y.jpg",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-16T16:43:54.445Z",
        "updatedAt": "2025-05-06T17:05:50.997Z",
        "__v": 0
    },
    {
        "_id": "681924ad76c0011ccd31568d",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746478248/revnwqouugavqcfqroqj.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-05T20:50:53.350Z",
        "updatedAt": "2025-05-06T17:05:54.985Z",
        "__v": 0
    },
    {
        "_id": "68309e395ee87ea8623eabbb",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1748016694/l3twz4smbset9tmupocy.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-23T16:11:37.916Z",
        "updatedAt": "2025-05-23T16:13:00.564Z",
        "__v": 0
    },
    {
        "_id": "67efff8045499e5aafa65f01",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743781756/nnr6krthutgfkna2gg48.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-04T15:49:20.138Z",
        "updatedAt": "2025-08-04T14:37:15.741Z",
        "__v": 0
    },
    {
        "_id": "681a4344986574c0a5d734ed",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746551617/snipbrhhqnfalmuwikcb.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:13:40.133Z",
        "updatedAt": "2025-05-06T17:13:40.133Z",
        "__v": 0
    },
    {
        "_id": "67efff2d45499e5aafa65eed",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743781674/vsqwppn6snbiosp8jssn.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-04T15:47:57.419Z",
        "updatedAt": "2025-05-06T17:05:14.216Z",
        "__v": 0
    },
    {
        "_id": "67f14f229d2888a8d7393b91",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743867678/lmnvewidpxmpimdtbl1x.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-05T15:41:22.262Z",
        "updatedAt": "2025-05-06T17:05:43.323Z",
        "__v": 0
    },
    {
        "_id": "681a40e5986574c0a5d734b3",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746551011/l02fmpvlvqqe6ohsebdk.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:03:33.943Z",
        "updatedAt": "2025-05-06T17:37:52.678Z",
        "__v": 0
    },
    {
        "_id": "681a47df7753425bbaeaa334",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552795/nwvbvlvtxz9oakictffe.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:33:19.425Z",
        "updatedAt": "2025-05-06T17:33:19.425Z",
        "__v": 0
    },
    {
        "_id": "681a485b7753425bbaeaa33e",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552919/hh2egjrxzinte6grctr4.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:35:23.670Z",
        "updatedAt": "2025-05-06T17:35:23.670Z",
        "__v": 0
    },
    {
        "_id": "681a48737753425bbaeaa347",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552944/x60tohfxpvprjsio9tzf.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-06T17:35:47.096Z",
        "updatedAt": "2025-05-06T17:36:34.318Z",
        "__v": 0
    },
    {
        "_id": "67efff3f45499e5aafa65ef1",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743781692/prpaxlmlsyoyklcvlqh2.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-04T15:48:15.406Z",
        "updatedAt": "2025-05-23T16:01:34.183Z",
        "__v": 0
    },
    {
        "_id": "67efff4f45499e5aafa65ef5",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743781709/bysrehpr4ebywjeetu9h.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-04T15:48:31.047Z",
        "updatedAt": "2025-05-06T17:05:23.355Z",
        "__v": 0
    },
    {
        "_id": "67efff9c45499e5aafa65f05",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743781785/r3lg7htxpg1mhizzcoaf.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-04-04T15:49:48.656Z",
        "updatedAt": "2025-05-06T17:05:32.814Z",
        "__v": 0
    },
    {
        "_id": "681a48167753425bbaeaa339",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746552852/rzrag2zn4zoojstquivo.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": true,
        "createdAt": "2025-05-06T17:34:14.700Z",
        "updatedAt": "2025-05-06T17:34:14.700Z",
        "__v": 0
    },
    {
        "_id": "681a40c0986574c0a5d734af",
        "image": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1746550972/m45win1donh4h2vxuq87.png",
        "company": "",
        "name": "",
        "user": null,
        "isActive": false,
        "createdAt": "2025-05-06T17:02:56.596Z",
        "updatedAt": "2025-05-06T17:06:01.139Z",
        "__v": 0
    }
]
        setPlacements(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching placements:", error);
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div> {/* Custom loader */}
      </div>
    );
  }

  return (
    <div className="p-6 bg-orange-200 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Placement Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placements.map((item, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src={item.image}
              alt={item.company}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-blue-200">
              <p className="font-semibold text-lg text-blue-800">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
