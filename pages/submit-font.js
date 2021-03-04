import Layout from "../components/Layout";
import Message from "../components/Message";

const SubmitFont = () => {
  return (
    <Layout>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <Message message="We are always looking to expand our database. Send us a font and we will add it!" />
        </div>
      </div>
    </Layout>
  );
};

export default SubmitFont;
