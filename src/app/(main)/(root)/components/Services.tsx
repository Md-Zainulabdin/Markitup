import { TfiWorld } from "react-icons/tfi";

const serviceCards = [
  {
    title: "Social Media Management",
    subHeading: "Instagram, Linkedin and more",
    description: `Amplify your social media impact through expert management services. We devise captivating
    strategies for heightened engagement, follower growth, and extensive reach.`,
  },

  {
    title: "360° Youtube Management",
    subHeading: "For Brands and Influencers",
    description: `All-encompassing support for startegy, post-production, operations, and analytics, driving
    channel growth and success."
  `,
  },
  {
    title: "Graphic Designing",
    subHeading: "Mutipurpose Designing ",
    description: `Elevate your brand with versatile, tailored multipurpose graphic design services: stunning
    visuals for marketing, branding, and social media.
  "
  `,
  },
  {
    title: "Video Editing",
    subHeading: "Vlogs, Tutorials, Educational etc.",
    description: `Transform your raw footage into stunning, engaging videos with our professional video
    editing services. From concept to delivery, we bring your story to life. 
  "
  `,
  },
  {
    title: " Advertising",
    subHeading: "Facebook, Instagram and Google",
    description: `Empower your brand with Facebook, Instagram, Google, and YouTube advertising. Reach
    millions, boost sales, and maximize visibility.  
  "
  `,
  },
  {
    title: " Social Media Consulting",
    subHeading: "Calls for building strategy",
    description: ` Maximize YouTube success with expert consulting: in-depth channel analysis, innovative
    video ideas, editing/thumbnail feedback, and content optimization.   
  "
  `,
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

      <div className="services-cards w-full flex items-center justify-center flex-wrap gap-8 py-10">
        {serviceCards.map((card) => (
          <div
            className="w-[350px] p-8 bg-[#fff] flex flex-col items-start gap-3 border border-[#f8f8f8] hover:border-[#ccc] rounded-md duration-300 ease-in-out cursor-pointer"
            key={card.title}
          >
            {/* <div className="icon">{card.icon}</div> */}

            <div className="title">
              <h1 className="text-xl font-bold inter-font text-[#222]">
                {card.title}
              </h1>
            </div>

            <div className="sub-heading font-semibold text-[#555]">
              <h2>{card.subHeading}</h2>
            </div>

            <div>
              <p
                className="text-sm text-muted-foreground"
                id="services_paragraph"
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
