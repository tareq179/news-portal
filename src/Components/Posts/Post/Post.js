import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOi8s0.img?h=516&w=799&m=6&q=60&o=f&l=f&x=2124&y=1119"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <span className="postTitle">
          U.S., Japan, S.Korea to meet over N.Korea nuclear standoff
        </span>
        <div className="postData">
          <span>By Josh Smith | 7 hrs ago</span>
        </div>
        <p className="postDesc">
          SEOUL (Reuters) - Officials from the United States, South Korea and
          Japan will hold a meeting on North Korea next week in Tokyo, South
          Korea's foreign ministry confirmed on Friday. The three countries have
          been discussing ways to break a standoff with North Korea over its
          nuclear weapons and ballistic missile programmes, which have drawn
          international sanctions. Noh Kyu-duk, Seoul's special representative
          for Korean peninsula peace and security affairs, will travel to Japan
          on Sunday for a three-day visit, the ministry said in a statement.
        </p>
      </div>
    </div>
  );
};

export default Post;
