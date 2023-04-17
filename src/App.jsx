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
import logo from "./assets/logo.svg";
import iconPhone from "./assets/iconPhone.svg";
import iconEmail from "./assets/iconEmail.svg";

function App() {
  return (
    <>
      <div className="container px-4 pt-16">
        <Nav />
        <Home />
      </div>

      <img src={bgSectionTopMobile1} alt="bgSectionTopMobile1" />
      <img
        src={illustrationGrowTogether}
        alt="illustrationGrowTogether"
        className="bg-[#F4FAFF] p-16"
      />
      <div className="bg-[#F4FAFF] text-center">
        <div className="container px-4 pt-16 pb-16">
          <h2 className="text-xl font-bold">Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
      <img
        src={bgSectionBottomMobile1}
        alt="bgSectionBottomMobile1"
        className="pb-16"
      />

      <img
        src={illustrationFlowingConversation}
        alt="illustrationFlowingConversation"
        className="p-16"
      />
      <div className="text-center">
        <div className="container px-4 pt-16 pb-16">
          <h2 className="text-xl font-bold">Flowing Conversations</h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>

      <img src={bgSectionTopMobile2} alt="bgSectionTopMobile2" />

      <div className="bg-[#F4FAFF]">
        <img
          src={illustratioYourUsers}
          alt="illustratioYourUsers"
          className="p-16 "
        />
        <div className="text-center">
          <div className="container px-4 pt-16 pb-16">
            <h2 className="text-xl font-bold">Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
      </div>
      <img src={bgSectionBottomMobile2} alt="bgSectionBottomMobile2" />

      <h2 className="mt-16 text-2xl font-bold text-center">
        <span>Ready To Build Your </span>
        <br />
        <span>Community? </span>
      </h2>
      <ButtonFree />

      <img src={bgFooterTopMobile} alt="bgFooterTopMobile" className="mt-48" />
      <div className="bg-[#00242D] text-white pt-16 px-8">
        <h2 className="pb-4 text-xl font-bold">Newsletter</h2>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address{" "}
        </p>
        <input type="text" className="w-full h-12 my-8 rounded" />

        <ButtonSub />

        <img src={logo} alt="logo" className="w-full h-full fill-white" />

        <p className="pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <div className="flex flex-row items-center pb-4">
          <img src={iconPhone} alt="iconPhone" className="pr-4" />
          Phone: +1-543-123-4567
        </div>
        <div className="flex flex-row items-center pb-4">
          <img src={iconEmail} alt="iconEmail" className="pr-4" />
          example@huddle.com
        </div>

        <div className="flex flex-row gap-4 pb-8">
          <img src={iconEmail} alt="iconEmail" />
          <img src={iconEmail} alt="iconEmail" />
          <img src={iconEmail} alt="iconEmail" />
        </div>
      </div>
    </>
  );
}

export default App;
