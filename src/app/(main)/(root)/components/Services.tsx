import { TfiWorld } from "react-icons/tfi";

const serviceCards = [
  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#e1eeff]">
        <TfiWorld size={22} className="text-[#2282ff]" />
      </div>
    ),
    title: "Social Media Management",
    subHeading: "Instagram, Linkedin and more",
    description: `Amplify your social media impact through expert management services. We devise captivating
    strategies for heightened engagement, follower growth, and extensive reach.`,
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-6 md:py-8">
      <div className="service-title">
        <h1 className="text-center text-4xl text-[#222] inter-font">
          <span className="text-primary">Services</span>, We offer 👀
        </h1>
      </div>

      <div className="services-carda w-full flex items-center justify-center flex-wrap gap-8 py-8">
        {serviceCards.map((card) => (
          <div
            className="w-[350px] p-6 bg-[#fff] flex flex-col items-start gap-3 border border-[#f8f8f8] hover:border-[#ccc] rounded-md duration-300 ease-in-out cursor-pointer"
            key={card.title}
          >
            {/* <div className="icon">{card.icon}</div> */}

            <div className="title">
              <h1 className="text-xl font-bold inter-font text-[#222]">{card.title}</h1>
            </div>

            <div className="sub-heading">
                <h2>{card.subHeading}</h2>
            </div>

            <div>
                <p className="text-sm text-muted-foreground" id="services_paragraph">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
