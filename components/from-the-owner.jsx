import { CardBody , CardContainer, CardItem } from "@/components/ui/3d-card";

export function FromTheOwner() {
  return (
    <section className="py-20 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl lg:text-6xl font-extrabold mb-10 text-center ">
          From <span className="text-[#2bb673]">The Owner</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Left column: Card */}
          <div className="w-full flex justify-center">
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
                  <strong>CEO</strong> of TTM Hub
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/lara.png"
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
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-[#2bb673] hover:text-white"
                  >
                    Visit LinkedIn →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-[#2bb673] cursor-pointer hover:text-white"
                  >
                    Facebook
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          {/* Right column: Text */}
          <div className="w-full sm:py-5 lg:py-40">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">A Note from the Owner</h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-7 mb-4">
              Welcome to TTM Hub. Our mission is to empower entrepreneurs and
              businesses with the right tools, guidance, and services to start,
              manage, and grow with confidence. We believe in transparent
              processes, exceptional support, and long-term partnerships.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-7">
              Thank you for trusting us as your partner in formation and
              compliance. If there is anything we can do to support your journey,
              please reach out to our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}