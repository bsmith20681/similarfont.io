const AuthorBox = () => {
  return (
    <div className="authorBox ">
      <img
        className="authorBox-image"
        src="/images/self-portrait-sm.jpg"
        alt="picture of ben smith"
      />
      <div>
        <p>
          <strong>About the Author</strong>
        </p>
        <p className="authorBox-text">
          Ben Smith is a professional web developer who dabbles in design. He
          created this site as an ongoing catalog of free alternative fonts for
          when the premium font just won't work. He currently writes for this
          site as well as his own personal blog.{" "}
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
