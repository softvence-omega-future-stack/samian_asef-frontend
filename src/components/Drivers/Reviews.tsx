

"use client";


import { Star } from "lucide-react";
import passenger1 from "../../assets/images/passengerImg.png";
import passenger2 from "../../assets/images/pasengerImg2.png";


interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}


const reviewData: Review[] = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Passenger",
    avatar: passenger1,
    rating: 5.0,
    comment: "“Expedited service was requested and pickup from the driver was very fast and earlier than expected”",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "Passenger",
    avatar: passenger2,
    rating: 4.9,
    comment: "This driver is a very friendly and responsive person. I'm satisfied with her services. Obesely next time I will knock him.",
  },
  {
    id: 3,
    name: "Devon Lane",
    role: "Passenger",
    avatar: passenger1,
    rating: 5.0,
    comment: "“Expedited service was requested and pickup from the driver was very fast and earlier than expected”",
  },
  {
    id: 4,
    name: "Devon Lane",
    role: "Passenger",
    avatar: passenger1,
    rating: 5.0,
    comment: "“Expedited service was requested and pickup from the driver was very fast and earlier than expected”",
  },
  {
    id: 5,
    name: "Albert Flores",
    role: "Passenger",
    avatar: passenger2,
    rating: 4.9,
    comment: "This driver is a very friendly and responsive person. I'm satisfied with her services. Obesely next time I will knock him.",
  },
];

const ReviewPage = () => {
  return (
    <div className="min-h-screen ">

      <div className=" border border-gray-100 rounded-2xl p-3 md:p-6 overflow-hidden">
        
   
        <div className="  mb-6">
          <h2 className="text-xl md:text-2xl  font-semibold leading-6 text-titleColor">Reviews</h2>
        </div>

      
        <div className=" space-y-5">
          {reviewData.map((review) => (
            <div
              key={review.id}
              className="bg-[#F9F9F9] rounded-2xl p-4   transition-all hover:shadow-sm"
            >
           
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
      
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
      
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-titleColor leading-6">
                      {review.name}
                    </h4>
                    <p className="text-textColor  text-sm md:text-base font-normal leading-5">
                      {review.role}
                    </p>
                  </div>
                </div>

       
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-[#FF5C00] fill-[#FF5C00]" />
                  <span className="text-sm md:text-base font-normal text-titleColor leading-4">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>


              <div className="pl-0 md:pl-16">
                <p className="text-sm md:text-base font-normal text-titleColor leading-6">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
