import "./post.css";

const  Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src='https://source.unsplash.com/random'
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          lorem ipsum lorem ips lorem ipsum lorem ips
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

export default Post
