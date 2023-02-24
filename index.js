const Button = (props) => {
  //  Write your code here.
  console.log(props);
  const { className, children } = props;
  return <button className={`button ${className}`}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="cart-btn">
      <Button className="like-colour" children="Like" />
      <Button className="comment-colour" children="Comment" />
      <Button className="share-colour" children="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
