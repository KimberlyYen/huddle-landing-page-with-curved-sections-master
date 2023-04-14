import Button from "../components/Button";
import screenMockups from "../assets/screenMockups.svg";
import iconCommunities from "../assets/iconCommunities.svg";

function Home() {
  return (
    <>
      <h1 className="mt-24 text-2xl font-bold text-center">
        <span>Build The Community</span>
        <br />
        <span>Your Fans Will Love </span>
      </h1>

      <p className="mt-8">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>

      <Button />

      <img src={screenMockups} alt="screenMockups" className="my-16" />

      <div className="flex flex-col items-center justify-center">
        <img
          src={iconCommunities}
          alt="screenMockups"
          className="w-8 h-8 my-16"
        />
        <h2 className="text-5xl font-bold">1.4k+</h2>
        <p>Communities Formed</p>
      </div>
    </>
  );
}

export default Home;
