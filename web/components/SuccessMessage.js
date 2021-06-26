const SuccessMessage = (props) => {
  if (props.message === true) {
    return (
      <div style={{ backgroundColor: "#D4EDDA" }}>
        <p style={{ padding: ".75rem 1.25rem", color: "#155724" }}>
          Your message was sent successfully!
        </p>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#F8D7DA" }}>
        <p style={{ padding: ".75rem 1.25rem", color: "#721c24" }}>
          It looks like your message didn't send. You can just email me at
          bsmith20681@gmail.com
        </p>
      </div>
    );
  }
};

export default SuccessMessage;
