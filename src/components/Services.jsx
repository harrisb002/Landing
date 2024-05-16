import Section from "./Section";
import Heading from "./Heading";
import { service1, check } from "../namedAssets";
import { ssuChess } from "../constants";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          className="text-cyan-400"
          title="Made for the risk takers"
          text="SSU Chess unlocks the potential of blockchain applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Bet SQZ for skills"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 text-4xl text-green-400">
                Bet SQZ for Skills
              </h4>
              <p className="body-4 mb-[3rem] text-yellow-300">
                Earn SQZ through games & puzzles
              </p>
              <ul className="body-2">
                {ssuChess.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={30} height={30} src={check} />
                    <p className="ml-4 text-n-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
