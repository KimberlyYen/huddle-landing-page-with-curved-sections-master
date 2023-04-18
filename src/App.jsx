import Nav from "./pages/Nav";
import Home from "./pages/Home";
import bgSectionTopMobile1 from "./assets/bgSectionTopMobile1.svg";
import illustrationGrowTogether from "./assets/illustrationGrowTogether.svg";
import bgSectionBottomMobile1 from "./assets/bgSectionBottomMobile1.svg";
import illustrationFlowingConversation from "./assets/illustrationFlowingConversation.svg";
import bgSectionTopMobile2 from "./assets/bgSectionTopMobile2.svg";
import illustratioYourUsers from "./assets/illustratioYourUsers.svg";
import bgSectionBottomMobile2 from "./assets/bgSectionBottomMobile2.svg";
import ButtonFree from "./components/ButtonFree";
import bgFooterTopMobile from "./assets/bgFooterTopMobile.svg";
import ButtonSub from "./components/ButtonSub";
import iconPhone from "./assets/iconPhone.svg";
import iconEmail from "./assets/iconEmail.svg";
import { ReactComponent as LogoWhite } from "./assets/logoWhite.svg";
import { ReactComponent as BgSectionTopDesktop1 } from "./assets/bgSectionTopDesktop1.svg";
import { ReactComponent as BgSectionTopDesktop2 } from "./assets/bgSectionTopDesktop2.svg";
import { ReactComponent as BgSectionBottomDesktop1 } from "./assets/bgSectionBottomDesktop1.svg";
import { ReactComponent as BgSectionBottomDesktop2 } from "./assets/bgSectionBottomDesktop2.svg";
import { ReactComponent as BgFooterTopDesktop } from "./assets/bgFooterTopDesktop.svg";

function App() {
  return (
    <>
      <div className="container px-4 pt-8 mx-auto">
        <Nav />
        <Home />
      </div>

      <div>
        <img
          src={bgSectionTopMobile1}
          alt="bgSectionTopMobile1"
          className="lg:hidden"
        />

        <BgSectionTopDesktop1 className="hidden lg:flex" />

        <div className="flex flex-col lg:flex-row ">
          <img
            src={illustrationGrowTogether}
            alt="illustrationGrowTogether"
            className="bg-[#F4FAFF] p-16 lg:w-1/2 lg:order-last lg:p-32"
          />

          <div className=" bg-[#F4FAFF] text-center lg:text-left lg:p-32">
            <div className="container px-4 pt-16 pb-16">
              <h2 className="text-xl font-bold lg:text-4xl lg:pb-8">
                Grow Together
              </h2>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>
        </div>

        <img
          src={bgSectionBottomMobile1}
          alt="bgSectionBottomMobile1"
          className="pb-16 lg:hidden"
        />
        <BgSectionBottomDesktop1 className="hidden lg:flex" />
      </div>

      <div className="flex flex-col lg:flex-row">
        <img
          src={illustrationFlowingConversation}
          alt="illustrationFlowingConversation"
          className="p-16 lg:w-1/2 lg:p-32"
        />

        <div className="text-center lg:p-32 lg:text-left">
          <div className="container px-4 pt-16 pb-16">
            <h2 className="text-xl font-bold lg:text-4xl lg:pb-8">
              Flowing Conversations
            </h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src={bgSectionTopMobile2}
          alt="bgSectionTopMobile2"
          className="lg:hidden "
        />
        <BgSectionTopDesktop2 className="hidden lg:flex" />

        <div className="bg-[#F4FAFF] flex flex-col lg:flex-row">
          <img
            src={illustratioYourUsers}
            alt="illustratioYourUsers"
            className="p-16 lg:w-1/2 lg:p-32"
          />

          <div className="text-center lg:p-32 lg:text-left lg:w-1/2 ">
            <div className="container px-4 pt-16 pb-16">
              <h2 className="text-xl font-bold lg:text-4xl lg:pb-8">
                Your Users
              </h2>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </div>
        </div>

        <img
          src={bgSectionBottomMobile2}
          alt="bgSectionBottomMobile2"
          className="lg:hidden"
        />
        <BgSectionBottomDesktop2 className="hidden lg:flex" />
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="w-3/4 mt-16 text-2xl font-bold text-center lg:text-4xl">
          Ready To Build Your Community?
        </h2>
      </div>
      <ButtonFree />

      <footer>
        <img
          src={bgFooterTopMobile}
          alt="bgFooterTopMobile"
          className="mt-48 lg:hidden"
        />
        <BgFooterTopDesktop className="hidden lg:flex" />

        <div className="bg-[#00242D] text-white pt-16 px-8 lg:flex-row lg:flex">
          <div className="lg:w-1/2 lg:p-32 lg:order-last">
            <h2 className="pb-4 text-xl font-bold">Newsletter</h2>
            <p>
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address{" "}
            </p>

            <div className="my-8 lg:grid-cols-3 lg:grid lg:gap-4">
              <input
                type="text"
                className="w-full h-12 rounded lg:col-span-2"
              />

              <div className="w-1/2 pt-4 ml-auto lg:pt-0 lg:w-full">
                <ButtonSub />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:p-32">
            <div className="w-48 pb-8">
              <LogoWhite />
            </div>

            <p className="pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>

            <div className="pb-8">
              <div className="flex flex-row items-center pb-4">
                <img src={iconPhone} alt="iconPhone" className="pr-4" />
                Phone: +1-543-123-4567
              </div>
              <div className="flex flex-row items-center pb-4">
                <img src={iconEmail} alt="iconEmail" className="pr-4" />
                example@huddle.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
