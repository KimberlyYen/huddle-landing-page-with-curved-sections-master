import ButtonFree from "../components/ButtonFree";
import screenMockups from "../assets/screenMockups.svg";
import iconCommunities from "../assets/iconCommunities.svg";
import iconMessages from "../assets/iconMessages.svg";

function Home() {
  return (
    <div className="flex flex-col ">
      <h1 className="mt-8 text-2xl font-bold text-center">
        <span>Build The Community</span>
        <br />
        <span>Your Fans Will Love </span>
      </h1>

      <p className="mt-8 text-center">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>

      <ButtonFree />

      <img src={screenMockups} alt="screenMockups" className="my-16" />

      <div className="flex flex-col items-center justify-center mb-16">
        <div>
          <img
            src={iconCommunities}
            alt="screenMockups"
            className="w-8 my-4 h-7 place-self-start "
          />
          <h2 className="text-5xl font-bold">1.4k+</h2>
          <p className="my-4 text-gray-400 ">Communities Formed</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-16">
        <div>
          <img
            src={iconMessages}
            alt="screenMockups"
            className="w-8 my-4 h-7 place-self-start "
          />
          <h2 className="text-5xl font-bold">2.7m+</h2>
          <p className="my-4 text-center text-gray-400">
            Messages <br />
            Sent
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
