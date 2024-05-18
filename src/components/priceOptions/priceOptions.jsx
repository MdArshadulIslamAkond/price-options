import PriceOption from "../priceOption/priceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Open gym hours",
        "Free parking",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Group fitness classes",
        "1 personal training session per month",
        "Open gym hours",
        "Free parking",
        "Nutrition guidance",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Group fitness classes",
        "4 personal training sessions per month",
        "Access to spa and sauna",
        "Priority class booking",
        "Open gym hours",
        "Free parking",
        "Nutrition guidance",
        "Access to swimming pool",
        "Discount on merchandise",
      ],
    },
    {
      id: 4,
      name: "Elite",
      price: 109.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Group fitness classes",
        "Unlimited personal training sessions",
        "Access to spa and sauna",
        "Priority class booking",
        "Open gym hours",
        "Free parking",
        "Nutrition guidance",
        "Access to swimming pool",
        "Discount on merchandise",
        "Access to VIP lounge",
        "Complimentary health assessments",
        "Guest passes",
        "Exclusive events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => {
          return <PriceOption key={option.id} option={option} />;
        })}
      </div>
    </div>
  );
};

export default PriceOptions;
