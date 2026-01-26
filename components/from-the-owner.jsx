import { CardBody , CardContainer, CardItem } from "@/components/ui/3d-card";
import NoteFromOwner from "./noteFromOwner";

export function FromTheOwner() {
  return (
    <section className="py-20 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl lg:text-6xl font-extrabold mb-10 text-center ">
          From <span className="text-[#2bb673]">The Owner</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Left column: Card */}
          <div className="w-full flex justify-center sm:mt-20">
            <CardContainer className="w-full">
              <CardBody className="bg-gray-50 relative group/card border rounded-xl shadow-md hover:shadow-xl shadow-[#2bb673] transition-all duration-300  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto  p-6">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Ms. Lara Dowell
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  <strong>CEO</strong> of TTM HUB
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/lara1.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-[#2bb673]"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://www.linkedin.com/in/laraservicestt/"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-[#2bb673] hover:text-white"
                  >
                    Visit LinkedIn →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://www.facebook.com/223891504150403/"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-[#2bb673] cursor-pointer hover:text-white"
                  >
                    Facebook
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          {/* Right column: Text */}
          <div className="w-full sm:py-5 lg:py-5">
            {/* <h3 className="text-xl lg:text-2xl font-semibold mb-4">A Note from the Owner</h3> */}
            <NoteFromOwner />
            {/* <p className="text-neutral-600 dark:text-neutral-300 leading-7 mb-4"> */}
              {/* Welcome to TTM Hub. Our mission is to empower entrepreneurs and
              businesses with the right tools, guidance, and services to start,
              manage, and grow with confidence. We believe in transparent
              processes, exceptional support, and long-term partnerships. */}
                 {/* After years of working with leaders across industries, regions and stages of growth, one pattern shows up again and again:<br />
              businesses do not struggle because leaders lack commitment or intelligence, they struggle because
              the systems meant to support them are fragmented.
                I have seen strong leaders burn out under the weight of unclear structures. I have seen capable teams underperform
              because the business foundations around them were unstable, and I have seen promising businessess stall -- not from
              lack of vision, but from loack of integrated support. <br />
                That is why Better Business exists. <br />
                At The Talent Management Hub, we do not believe business success happens in silos. A truly healthy organization
              is built when leaders are supported as people(Better Me), teams are equipped to work well together(Better Teams),
              and the business itself is structured to protect, guide and sustain. <br />
                Better Business is about creating clarity, confidence and compliance--without losing the human element. It is about
              putting the right foundations in place so leaders can focus on leading, teams can focus on performing, and businesses
              can grow with integrity abd resilience. <br />
                Better Business matters because when businesses are built well, people thrive within them. <br />
              If you are building something that matters, you do not have to do it alone. This is the ecosystem designed to help you thrive. <br />

              Let's make better business together. */}
               {/* <p className="text-lg font-medium text-gray-900 border-l-4 border-green-500 pl-4">
      Businesses don’t struggle because leaders lack commitment —  
      they struggle because their systems fail to support them.
    </p>

    <p>
      After years of working with leaders across industries, regions, and stages of growth,
      one pattern appears again and again.
    </p>

    <p>
      I’ve seen strong leaders burn out under unclear structures, capable teams underperform
      due to unstable foundations, and promising businesses stall — not from lack of vision,
      but from lack of integrated support.
    </p>

    <p className="font-semibold text-gray-900">
      That is why Better Business exists.
    </p>

    {/* Pills */}
    {/* <div className="flex flex-wrap gap-3 pt-4">
      <span className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
        Better Me
      </span>
      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
        Better Teams
      </span>
      <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
        Better Business
      </span>
    </div>

    <p className="pt-6 font-medium text-gray-900">
      Let’s build better business — together.
    </p> */}

              
            {/* </p> */} 
            {/* <p className="text-neutral-600 dark:text-neutral-300 leading-7">
              Thank you for trusting us as your partner in formation and
              compliance. If there is anything we can do to support your journey,
              please reach out to our team.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}