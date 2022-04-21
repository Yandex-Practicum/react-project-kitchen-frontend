import EditProfileSettings from './EditProfileSettings';
import FollowUserButton from './FollowUserButton';

type TProfileHeader = {
  profile: {
    following: boolean;
    image: string;
    username: string;
    bio: string;
  };
  isUser: boolean;
  follow: boolean;
  unfollow: boolean;
}

function ProfileHeader({profile, isUser, follow, unfollow}: TProfileHeader) {

  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={profile.image} className="user-img" alt={profile.username} />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>
            <EditProfileSettings isUser={isUser} />
            <FollowUserButton
              isUser={isUser}
              user={profile}
              follow={follow}
              unfollow={unfollow}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
