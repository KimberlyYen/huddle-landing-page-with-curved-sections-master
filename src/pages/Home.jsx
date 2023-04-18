import ButtonFree from "../components/ButtonFree";
import screenMockups from "../assets/screenMockups.svg";
import iconCommunities from "../assets/iconCommunities.svg";
import iconMessages from "../assets/iconMessages.svg";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="w-3/4 mt-24 text-2xl font-bold text-center lg:text-4xl">
          Build The Community Your Fans Will Love
        </h1>

        <p className="max-w-md mt-8 text-center">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
      </div>

      <ButtonFree />

      <img src={screenMockups} alt="screenMockups" className="mx-auto my-16" />
      <div className="w-full">
        <div className="flex flex-col justify-around lg:flex-row">
          <div className="flex flex-col items-center justify-center mb-16">
            <div>
              <img
                src={iconCommunities}
                alt="screenMockups"
                className="w-8 my-4 h-7 place-self-start "
              />
              <h2 className="text-6xl font-bold">1.4k+</h2>
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
              <h2 className="text-6xl font-bold">2.7m+</h2>
              <div className="flex items-center w-16 mx-auto text-center lg:w-44 lg:pl-8">
                <p className="my-4 text-gray-400">Messages Sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
